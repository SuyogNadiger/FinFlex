import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";

const StepUpCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [growthRate, setGrowthRate] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [tenure, setTenure] = useState("");
  const [results, setResults] = useState(null);
  const [durationData, setDurationData] = useState([]);
  const [showResults, setShowResults] = useState(false);

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

  const calculateStepUpSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const g = parseFloat(growthRate) / 100;
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseInt(tenure);

    if (
      isNaN(P) ||
      isNaN(g) ||
      isNaN(r) ||
      isNaN(n) ||
      P <= 0 ||
      g < 0 ||
      r <= 0 ||
      n <= 0 ||
      n > 50
    ) {
      alert("Please enter valid inputs (tenure up to 50 years).");
      return;
    }

    let totalDeposited = 0;
    let futureValue = 0;
    const durationBreakdown = [];

    // Generate data for 50 years
    for (let i = 1; i <= 50; i++) {
      const annualInvestment = P * Math.pow(1 + g, i - 1) * 12;
      totalDeposited += annualInvestment;
      const fv =
        annualInvestment *
        ((Math.pow(1 + r, 12 * (50 - i + 1)) - 1) / r) *
        (1 + r);
      futureValue += fv;

      // Collect yearly data for all 50 years
      durationBreakdown.push({
        duration: i,
        totalDeposited: totalDeposited,
        futureValue: futureValue,
      });
    }

    setResults({
      totalDeposited: totalDeposited,
      futureValue: futureValue,
      totalEarnings: futureValue - totalDeposited,
    });
    setDurationData(durationBreakdown);
    setShowResults(true);
  };

  const clearInputs = () => {
    setMonthlyInvestment("");
    setGrowthRate("");
    setExpectedReturn("");
    setTenure("");
    setResults(null);
    setDurationData([]);
    setShowResults(false);
  };

  return (
    <div className="w-full min-h-screen text-white exo-2-text bg-gradient-to-tl from-slate-900 to-black">
      <div className="fixed">
        <Link to="/dashboard">
          <img
            src="\logo_white_png.png"
            alt="Logo"
            className="w-auto h-10 ml-10 mt-6 shadow-sm cursor-pointer"
          />
        </Link>
      </div>

      <div className="h-fit flex justify-end pr-16 pt-7 items-center text-white relative">
        <a
          href="calcidash"
          className="relative p-2 hover:text-yellow-500 hover:scale-105"
        >
          More Calculators
        </a>
      </div>

      <div className="flex items-start justify-center p-8 pt-16">
        <div className="w-2/5 stepup-calculator p-12 bg-slate-900 rounded-lg">
          <h1 className="montserrat text-4xl font-bold mb-16 text-center">
            Step-Up SIP Calculator
          </h1>

          <div className="mb-4">
            <label className="block text-lg mb-2">
              Monthly Investment Amount (₹)
            </label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              placeholder="Enter monthly investment"
            />
            <p className="text-sm text-gray-400 p-2">
              {formatNumberToWords(monthlyInvestment)}
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">
              Growth in Investment (P.A) (%)
            </label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={growthRate}
              onChange={(e) => setGrowthRate(e.target.value)}
              placeholder="Enter growth percentage"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">
              Expected Return (P.A) (%)
            </label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              placeholder="Enter expected return percentage"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Tenure (in years)</label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="Enter tenure (up to 50 years)"
              max={50}
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={calculateStepUpSIP}
              className="w-2/5 mx-auto mt-6 bg-blue-900 text-white p-3 rounded-full hover:bg-yellow-500 transition-all"
            >
              Calculate
            </button>
            {showResults && (
              <button
                onClick={clearInputs}
                className="bg-blue-950 text-white p-3 mt-6 rounded-full w-2/5 hover:bg-yellow-500 transition-all"
              >
                Clear All
              </button>
            )}
          </div>

          {showResults && (
            <div className="result mt-6">
              <h2 className="text-xl font-bold montserrat my-2">Results</h2>
              <p>
                <span className="font-semibold px-2">Total Deposited:</span> ₹{" "}
                {results.totalDeposited.toLocaleString()} (
                {formatNumberToWords(results.totalDeposited)})
              </p>
              <p>
                <span className="font-semibold px-2">Future Value:</span> ₹{" "}
                {results.futureValue.toLocaleString()} (
                {formatNumberToWords(results.futureValue)})
              </p>
              <p>
                <span className="font-semibold px-2">Total Earnings:</span> ₹{" "}
                {results.totalEarnings.toLocaleString()} (
                {formatNumberToWords(results.totalEarnings)})
              </p>
            </div>
          )}
        </div>
        {showResults && (
          <div className="projected-returns ml-8 p-4 bg-slate-800 rounded-lg w-2/5 max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4 montserrat">
              Projected Returns
            </h2>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border p-2">Year</th>
                  <th className="border p-2">Deposited (₹)</th>
                  <th className="border p-2">Future Value (₹)</th>
                </tr>
              </thead>
              <tbody>
                {durationData.map((item) => (
                  <tr
                    key={item.duration}
                    className={`${
                      item.duration === parseInt(tenure)
                        ? "bg-yellow-500 text-black font-semibold"
                        : "bg-gray-800"
                    }`}
                  >
                    <td className="border p-2">{item.duration}</td>
                    <td className="border p-2">
                      ₹ {formatNumberToWords(item.totalDeposited)}
                    </td>
                    <td className="border p-2">
                      ₹ {formatNumberToWords(item.futureValue)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="w-full min-h-fit flex flex-col justify-center about-stepup-calculator text-white my-20">
        <h2 className="montserrat text-4xl font-semibold mx-auto my-10">
          About FinFlex StepUp Calculator
        </h2>
        <div className="px-10 py-5 text-lg">
          <p className="mb-4">
            The Step-Up SIP Calculator is a financial tool designed to help
            investors calculate the future value of their investments when they
            increase their monthly contributions periodically. This calculator
            is particularly useful for individuals who anticipate a steady rise
            in their income and want to align their savings accordingly.
          </p>
          <p className="mb-4">
            With the ability to account for a yearly increase in the monthly SIP
            amount, the Step-Up SIP Calculator provides a more realistic
            projection of potential wealth accumulation compared to a
            traditional SIP calculator. Users can also gain insights into the
            total amount invested, projected future value, and the total
            earnings over the investment tenure.
          </p>
          <p className="mb-4">
            By adjusting parameters like the annual increment percentage,
            expected return rate, and tenure, this calculator empowers investors
            to make informed decisions and better plan their financial future.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StepUpCalculator;
