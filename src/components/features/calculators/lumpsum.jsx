import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";

const LumpsumCalculator = () => {
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

  const calculateLumpsum = () => {
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

    const futureValue = P * Math.pow(1 + r, n);
    const totalEarnings = futureValue - P;

    const durationBreakdown = [];
    for (let i = 1; i <= 50; i++) {
      const fv = P * Math.pow(1 + r, i);
      durationBreakdown.push({
        duration: i,
        futureValue: fv,
      });
    }

    setResults({
      investedAmount: P,
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
            className="w-auto ml-10 mt-6 h-10 shadow-sm cursor-pointer"
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
            Lumpsum Calculator
          </h1>

          <div className="mb-4">
            <label className="block text-lg mb-2">Investment Amount (₹)</label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              placeholder="Enter your investment amount"
            />
            <p className="text-sm text-gray-400 p-2">
              {formatNumberToWords(investmentAmount)}
            </p>
          </div>

          <div className="mb-10">
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
              onClick={calculateLumpsum}
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
                <span className="font-semibold px-2">Investment Amount:</span> ₹{" "}
                {results.investedAmount.toLocaleString()} (
                {formatNumberToWords(results.investedAmount)})
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
                      ₹ {formatNumberToWords(item.futureValue)}
                      {/* Alphanumeric formatting */}
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
          About FinFlex Lumpsum Calculator
        </h2>
        <div className="text-lg  w-3/4 mx-auto ">
          <ul>
            <li className="my-2">1) What is a Lumpsum Investment?</li>
            <p>
              Lumpsum investment or one-time investment is a style of investment
              in which you invest once (lumpsum) and allow your invested money
              to generate compounding returns over a given time frame.
            </p>
            <li className="pt-6 my-2">2) What Is Lumpsum Calculator?</li>
            <p>
              With Lumpsum calculator you can calculate the maturity value of
              your investment...
            </p>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LumpsumCalculator;
