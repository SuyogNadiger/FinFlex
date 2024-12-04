import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Banner from "../../assets/banner";
import Footer from "../footer";

const Planner = () => {
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [capitalAmount, setCapitalAmount] = useState("");
  const [riskTolerance, setRiskTolerance] = useState("Low");
  const [investmentPlan, setInvestmentPlan] = useState(null);
  const [saved, setSaved] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  // Function to calculate the investment plan
  const calculateInvestmentPlan = () => {
    if (!goalName || !targetAmount || !capitalAmount) {
      alert("Please fill in all fields.");
      return;
    }

    const target = parseFloat(targetAmount);
    const capital = parseFloat(capitalAmount);
    let timeToGoal, avgReturnRate, suggestedPortfolio, compoundedReturns;

    // Define the return rates based on risk tolerance
    if (riskTolerance === "Low") {
      avgReturnRate = { min: 8, max: 18 };
      suggestedPortfolio = [
        { type: "Government Bonds", allocation: "50%" },
        { type: "Blue-Chip Mutual Funds", allocation: "30%" },
        { type: "Fixed Deposits", allocation: "20%" },
      ];
    } else if (riskTolerance === "Medium") {
      avgReturnRate = { min: 18, max: 30 };
      suggestedPortfolio = [
        { type: "Index Funds", allocation: "40%" },
        { type: "Dividend Stocks", allocation: "30%" },
        { type: "Corporate Bonds", allocation: "30%" },
      ];
    } else if (riskTolerance === "High") {
      avgReturnRate = { min: 30, max: 42 };
      suggestedPortfolio = [
        { type: "Equity Mutual Funds", allocation: "50%" },
        { type: "Growth Stocks", allocation: "30%" },
        { type: "Crypto Assets", allocation: "20%" },
      ];
    }

    // Calculate time to goal
    timeToGoal =
      Math.log(target / capital) / Math.log(1 + avgReturnRate.min / 100);

    // Compound return calculation for min and max return rates
    const calculateCompoundReturn = (rate, years) => {
      return capital * Math.pow(1 + rate / 100, years) - capital;
    };

    compoundedReturns = {
      minReturn: calculateCompoundReturn(avgReturnRate.min, timeToGoal),
      maxReturn: calculateCompoundReturn(avgReturnRate.max, timeToGoal),
    };

    const plan = {
      goalName,
      targetAmount: `₹${parseFloat(targetAmount).toLocaleString("en-IN")}`,
      capitalAmount: `₹${parseFloat(capitalAmount).toLocaleString("en-IN")}`,
      riskTolerance,
      timeToGoal: `${Math.round(timeToGoal)} years`,
      avgReturnRate: `${avgReturnRate.min}% - ${avgReturnRate.max}%`,
      suggestedPortfolio,
      compoundedReturns,
    };

    setInvestmentPlan(plan);
    setSaved(false);
    setResultVisible(true);
  };

  const formatNumberToWords = (num) => {
    if (!num) return "";
    const number = parseFloat(num);
    if (number >= 10000000) {
      return `${(number / 10000000).toFixed(1)} crore`;
    } else if (number >= 100000) {
      return `${(number / 100000).toFixed(1)} lakh`;
    } else if (number >= 1000) {
      return `${(number / 1000).toFixed(1)} thousand`;
    } else {
      return `${number.toFixed(0)}`;
    }
  };

  // Function to save the investment plan to Firestore
  const savePlan = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("You need to log in to save your plan.");
      return;
    }

    try {
      const planToSave = {
        userId: user.uid,
        goalName,
        targetAmount,
        capitalAmount,
        riskTolerance,
        investmentData: investmentPlan,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "plannerHistory"), planToSave);
      alert("Plan saved successfully!");
      setSaved(true);
    } catch (error) {
      console.error("Error saving plan:", error.message);
      alert("Error saving plan! Please try again.");
    }
  };

  // Function to navigate to more information page
  const handleMoreInfo = () => {
    navigate("/paidinfo");
  };

  // Notes based on risk tolerance
  const getRiskNotes = (risk) => {
    switch (risk) {
      case "Low":
        return (
          <div className="mt-4 text-gray-300">
            <p className="font-semibold text-lg">
              Notes for Low-Risk Investors:
            </p>
            <ul className="list-disc ml-6 text-md">
              <li>
                Investing in government bonds and fixed deposits provides
                stability with low returns.
              </li>
              <li>
                Consider diversifying into safer, low-risk options to preserve
                capital.
              </li>
              <li>
                Monitor interest rates for changes in the returns on fixed
                income securities.
              </li>
            </ul>
          </div>
        );
      case "Medium":
        return (
          <div className="mt-4 text-gray-300">
            <p className="font-semibold text-lg">
              Notes for Medium-Risk Investors:
            </p>
            <ul className="list-disc ml-6 text-md">
              <li>
                Equity and bonds in a balanced portfolio offer a good balance
                between risk and returns.
              </li>
              <li>
                Index funds are a great option for diversified exposure to the
                market.
              </li>
              <li>
                Rebalance your portfolio periodically to optimize returns while
                managing risk.
              </li>
            </ul>
          </div>
        );
      case "High":
        return (
          <div className="mt-4 text-gray-300">
            <p className="font-semibold text-lg">
              Notes for High-Risk Investors:
            </p>
            <ul className="list-disc ml-6 text-md">
              <li>
                Growth stocks and crypto assets can offer high returns but come
                with significant volatility.
              </li>
              <li>
                Consider leveraging more aggressive growth assets for greater
                potential returns.
              </li>
              <li>
                Risk management is critical, especially with high volatility
                investments like crypto.
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  const clearInputs = () => {
    setGoalName("");
    setTargetAmount("");
    setCapitalAmount("");
    setRiskTolerance("Low");
    setInvestmentPlan(null);
    setResultVisible(false);
  };

  return (
    <div className="exo-2-text min-h-screen bg-gradient-to-tl from-slate-900 to-black text-gray-300">
      {/* Logo */}
      <div className="flex fixed w-full h-20">
        <Link to="/dashboard">
          <img
            src="/logo_white_png.png"
            alt="Logo"
            className="w-15 h-10 shadow-sm bg-transparent ml-11 mt-6 cursor-pointer"
          />
        </Link>
      </div>
      <div className="h-10 flex justify-end pr-6 lg:pr-12 pt-12 space-x-6 lg:space-x-14 items-center text-white relative">
        <a
          href="/documentation"
          className=" hover:text-yellow-500 hover:scale-105"
        >
          Why Invest?
        </a>
        <Link
          to="/planhistory"
          className=" hover:text-yellow-500 hover:scale-105"
        >
          <p>Plan History</p>
        </Link>
      </div>

      {/* Input Container */}
      <div className="w-full flex justify-center mt-10 mb-20">
        <div className="gap-6 w-3/4 lg:w-3/4 flex justify-center max-h-fit">
          <div className="w-full md:w-1-2 lg:w-1/2 p-8 bg-slate-900 rounded-xl shadow-lg flex flex-col justify-between h-fit mx-auto">
            <h1 className="mb-12 text-3xl font-bold montserrat text-white">
              Investment Planner
            </h1>

            {/* Input Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-lg mb-2 text-gray-200">
                  Plan Name
                </label>
                <input
                  type="text"
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                  className="w-full p-3 bg-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your plan name"
                />
              </div>
              <div>
                <label className="block text-lg mb-2 text-gray-200">
                  Target Amount (₹)
                </label>
                <input
                  type="number"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  className="w-full p-3 bg-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter target amount"
                />
                <p className="text-sm text-gray-400 p-2">
                  {formatNumberToWords(targetAmount)}
                </p>
              </div>
              <div>
                <label className="block text-lg mb-2 text-gray-200">
                  Available Capital (₹)
                </label>
                <input
                  type="number"
                  value={capitalAmount}
                  onChange={(e) => setCapitalAmount(e.target.value)}
                  className="w-full p-3 bg-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your current capital"
                />
                <p className="text-sm text-gray-400 p-2">
                  {formatNumberToWords(capitalAmount)}
                </p>
              </div>
              <div>
                <label className="block text-lg mb-2 text-gray-200">
                  Risk Tolerance
                </label>
                <select
                  value={riskTolerance}
                  onChange={(e) => setRiskTolerance(e.target.value)}
                  className="w-full p-3 bg-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex mx-auto gap-16 mt-2 text-gray-200">
              <button
                onClick={calculateInvestmentPlan}
                className="mx-auto mt-6 bg-blue-900 text-white p-3 rounded-full hover:bg-yellow-500 transition-all"
              >
                Generate Plan
              </button>
              {resultVisible && (
                <button
                  onClick={clearInputs}
                  className="bg-blue-950 text-white px-8 mt-6 rounded-full hover:bg-yellow-500 transition-all"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Result Container */}
          {resultVisible && (
            <div className="w-4/5 lg:w-3/5 p-8 bg-slate-800 rounded-xl shadow-lg flex my-auto flex-col h-fit">
              <h2 className="text-3xl font-semibold mb-8 text-white montserrat">
                Your Investment Plan
              </h2>
              <div className="space-y-2">
                <p className="text-lg">
                  <strong>Goal Name:</strong> {investmentPlan.goalName}
                </p>
                <p className="text-lg">
                  <strong>Target Amount:</strong> {investmentPlan.targetAmount}
                  <span className="text-sm text-gray-400 ml-2">
                    (≈{formatNumberToWords(targetAmount)})
                  </span>
                </p>
                <p className="text-lg">
                  <strong>Capital Amount:</strong>{" "}
                  {investmentPlan.capitalAmount}
                  <span className="text-sm text-gray-400 ml-2">
                    (≈{formatNumberToWords(capitalAmount)})
                  </span>{" "}
                </p>
                <p className="text-lg">
                  <strong>Risk Tolerance:</strong>{" "}
                  {investmentPlan.riskTolerance}
                </p>
                <p className="text-lg">
                  <strong>Time to Goal:</strong> {investmentPlan.timeToGoal}
                </p>
                <p className="text-lg">
                  <strong>Average Return Rate:</strong>{" "}
                  {investmentPlan.avgReturnRate}
                </p>

                <div className="mt-4">
                  <p className="font-semibold">
                    Suggested Portfolio Allocation:
                  </p>
                  <ul className="list-disc ml-6 text-md">
                    {investmentPlan.suggestedPortfolio.map((item, index) => (
                      <li key={index}>
                        <strong>{item.type}:</strong> {item.allocation}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compounded Returns */}
                <div className="mt-6 text-gray-300">
                  <p className="font-semibold text-lg">
                    Annual Compounded Returns:
                  </p>
                  <ul className="list-disc ml-6 text-md">
                    <li>
                      <strong>Min Return (Low):</strong> ₹
                      {investmentPlan.compoundedReturns.minReturn.toLocaleString(
                        "en-IN"
                      )}
                    </li>
                    <li>
                      <strong>Max Return (High):</strong> ₹
                      {investmentPlan.compoundedReturns.maxReturn.toLocaleString(
                        "en-IN"
                      )}
                    </li>
                  </ul>
                </div>

                {/* Risk Notes */}
                {getRiskNotes(riskTolerance)}

                <div className="flex justify-around ">
                  {/* Save Plan */}
                  <button
                    onClick={savePlan}
                    className="mt-6 w-fit p-2.5 bg-blue-950 hover:bg-slate-900 hover:scale-95 border-white border-1 rounded-md font-semibold"
                  >
                    {saved ? "Plan Saved" : "Save This Plan"}
                  </button>

                  {/* More Info Link */}
                  <a href="/moreinfo">
                    <button
                      // onClick={Moreinfo}
                      className="mt-4 w-fit p-2.5 bg-blue-950 hover:bg-slate-900 hover:scale-95 border-white border-1 rounded-md font-semibold"
                    >
                      Get More Information
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Planner;
