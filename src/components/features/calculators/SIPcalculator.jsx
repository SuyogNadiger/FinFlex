import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
// import logo from "../assets/logo_white_png.png"; // Adjusted path for the logo import

const SIPCalculator = () => {
  const [investmentFrequency, setInvestmentFrequency] = useState("monthly");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
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

  const calculateSIP = () => {
    const P = parseFloat(investmentAmount);
    const n = parseInt(tenure);
    const r = parseFloat(expectedReturn) / 100;

    if (
      isNaN(P) ||
      isNaN(n) ||
      isNaN(r) ||
      P <= 0 ||
      n <= 0 ||
      r <= 0 ||
      n > 50
    ) {
      alert("Tenure should not exceed 50 years.");
      return;
    }

    const totalDeposited = P * 12 * n;
    const futureValue =
      P * ((Math.pow(1 + r / 12, 12 * n) - 1) / (r / 12)) * (1 + r / 12);
    const totalEarnings = futureValue - totalDeposited;

    const durationBreakdown = [];
    for (let i = 1; i <= 50; i++) {
      const fv =
        P * ((Math.pow(1 + r / 12, 12 * i) - 1) / (r / 12)) * (1 + r / 12);
      durationBreakdown.push({
        duration: i,
        totalDeposited: P * 12 * i,
        futureValue: fv,
      });
    }

    setResults({
      totalDeposited: totalDeposited,
      futureValue: futureValue,
      totalEarnings: totalEarnings,
    });
    setDurationData(durationBreakdown);
    setShowResults(true);
  };

  const clearInputs = () => {
    setInvestmentAmount("");
    setTenure("");
    setExpectedReturn("");
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
        <div className="w-2/5 sip-calculator p-12 bg-slate-900 rounded-lg">
          <h1 className="montserrat text-4xl font-bold mb-16 text-center">
            SIP Calculator
          </h1>

          <div className="mb-4">
            <label className="block text-lg mb-2">
              Frequency of Investment
            </label>
            <select
              className="p-3 rounded bg-gray-700 w-full"
              value={investmentFrequency}
              onChange={(e) => setInvestmentFrequency(e.target.value)}
            >
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">
              Monthly Investment Amount (₹)
            </label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              placeholder="Enter SIP amount"
            />
            <p className="text-sm text-gray-400 p-2">
              {formatNumberToWords(investmentAmount)}
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Tenure (in years)</label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              max={50}
              placeholder="Enter tenure (1-50 years)"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">
              Expected Rate of Return (P.A) (%)
            </label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              placeholder="Enter expected rate of return"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={calculateSIP}
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
                <span className="font-semibold px-2">Your Future Value:</span> ₹{" "}
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

      <div className="w-full min-h-fit flex flex-col justify-center about-sip-calculator text-white my-20">
        <h2 className="montserrat text-4xl font-semibold mx-auto my-10">
          About FinFlex SIP Calculator
        </h2>
        <div className="text-lg  w-3/4 mx-auto ">
          <ul>
            <li className="my-2">1) What is SIP?</li>
            <p>
              SIP (Systematic Investment Plan) is a disciplined way of investing
              a fixed amount at regular intervals. It helps in rupee-cost
              averaging and benefits from the power of compounding.
            </p>

            <li className="pt-6 my-2">2) What are the benefits of SIP?</li>
            <p>
              SIP allows you to invest regularly, building wealth over time,
              while minimizing risks associated with market fluctuations.
            </p>

            <li className="pt-6 my-2">3) How does the SIP calculator work?</li>
            <p>
              The SIP calculator calculates the future value based on inputs
              such as the amount, expected return, and tenure. It gives an
              estimate of your wealth accumulation over the specified period.
            </p>

            <li className="pt-6 my-2">4) Can I miss the payment of SIP?</li>
            <p>
              Yes, SIP payments can be paused, depending on the scheme's
              provisions. Some platforms allow resuming the SIP after a pause.
            </p>

            <li className="pt-6 my-2">
              5) How is SIP different from lump sum investment?
            </li>
            <p>
              SIP involves regular, smaller investments over time, reducing the
              impact of market volatility. A lump sum investment is a one-time
              large investment made at once, which exposes the investor to more
              market risk.
            </p>

            <li className="pt-6 my-2">
              6) What is the best time to invest in SIP?
            </li>
            <p>
              The best time to invest in SIP is as early as possible to benefit
              from the power of compounding. SIP is a long-term investment
              strategy, so the earlier you start, the better the potential
              returns.
            </p>

            <li className="pt-6 my-2">
              7) Can I change the SIP amount during the tenure?
            </li>
            <p>
              Yes, you can increase or decrease your SIP amount at any time,
              depending on the guidelines of your investment platform or scheme.
            </p>

            <li className="pt-6 my-2">
              8) Can I withdraw my SIP investment before the tenure?
            </li>
            <p>
              Yes, you can withdraw your investment before the completion of the
              tenure, but doing so might affect your returns based on the market
              conditions.
            </p>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SIPCalculator;
