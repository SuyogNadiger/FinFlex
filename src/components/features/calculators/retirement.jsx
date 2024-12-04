import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [lifeExpectancy, setLifeExpectancy] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [currentAnnualExpense, setCurrentAnnualExpense] = useState("");
  const [results, setResults] = useState(null);
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

  const calculateRetirement = () => {
    const P = parseFloat(currentAnnualExpense); // Current annual expense
    const n = parseInt(retirementAge) - parseInt(currentAge); // Years to retirement
    const r = parseFloat(expectedReturn) / 100; // Expected rate of return
    const lifeYears = parseInt(lifeExpectancy) - parseInt(retirementAge); // Years post-retirement
    const inflationRate = 0.06; // Assumed inflation rate (6%)

    if (
      isNaN(P) ||
      isNaN(n) ||
      isNaN(r) ||
      isNaN(lifeYears) ||
      P <= 0 ||
      n <= 0 ||
      r <= 0 ||
      lifeYears <= 0 ||
      n > 50
    ) {
      alert("Invalid input values.");
      return;
    }

    // Step 1: Annual Expense at Retirement Age (Inflation-Adjusted)
    const futureAnnualExpense = P * Math.pow(1 + inflationRate, n);

    // Step 2: Retirement Corpus Needed
    const corpusNeeded =
      futureAnnualExpense * ((1 - Math.pow(1 + r, -lifeYears)) / r);

    // Step 3: Monthly Savings Required to Reach Corpus
    const monthlySavings =
      (corpusNeeded * (r / 12)) / (Math.pow(1 + r / 12, n * 12) - 1);

    // Set results
    setResults({
      corpusNeeded: corpusNeeded,
      monthlySavings: monthlySavings,
      futureAnnualExpense: futureAnnualExpense,
    });
    setShowResults(true);
  };

  const clearInputs = () => {
    setCurrentAge("");
    setRetirementAge("");
    setLifeExpectancy("");
    setExpectedReturn("");
    setCurrentAnnualExpense("");
    setResults(null);
    setShowResults(false);
  };

  return (
    <div className="w-full min-h-screen text-white bg-gradient-to-tl from-slate-900 to-black">
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
            Retirement Calculator
          </h1>

          <div className="mb-4">
            <label className="block text-lg mb-2">Current Age</label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              placeholder="Enter your current age"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Retirement Age</label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              placeholder="Enter your retirement age"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Life Expectancy</label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={lifeExpectancy}
              onChange={(e) => setLifeExpectancy(e.target.value)}
              placeholder="Enter your expected life expectancy"
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

          <div className="mb-4">
            <label className="block text-lg mb-2">
              Current Annual Expense (₹)
            </label>
            <input
              type="number"
              className="p-3 rounded bg-gray-700 w-full"
              value={currentAnnualExpense}
              onChange={(e) => setCurrentAnnualExpense(e.target.value)}
              placeholder="Enter your current annual expense"
            />
            <p className="text-sm text-gray-400 p-2">
              {formatNumberToWords(currentAnnualExpense)}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={calculateRetirement}
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
                <span className="font-semibold px-2">
                  Retirement Corpus Needed:
                </span>{" "}
                ₹{" "}
                {results.corpusNeeded.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{" "}
                ({formatNumberToWords(results.corpusNeeded)})
              </p>
              <p>
                <span className="font-semibold px-2">
                  Monthly Savings Required to Reach Corpus:
                </span>{" "}
                ₹{" "}
                {results.monthlySavings.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{" "}
                ({formatNumberToWords(results.monthlySavings)})
              </p>
              <p>
                <span className="font-semibold px-2">
                  Annual Expense at Retirement Age After Considering Inflation:
                </span>{" "}
                ₹{" "}
                {results.futureAnnualExpense.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{" "}
                ({formatNumberToWords(results.futureAnnualExpense)})
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="w-full min-h-fit flex flex-col justify-center about-sip-calculator text-white my-20">
        <h2 className="montserrat text-4xl font-semibold mx-auto my-10">
          About FinFlex Retirement Calculator
        </h2>
        <div className="text-lg w-3/4 mx-auto ">
          <ul>
            <li className="my-2">1) What is Retirement Planning?</li>
            <p>
              Retirement planning is the process of determining how much money
              you need to live comfortably after retirement, factoring in
              expenses, inflation, and life expectancy.
            </p>

            <li className="pt-6 my-2">
              2) How does the Retirement Calculator work?
            </li>
            <p>
              The calculator estimates how much you need to save monthly to meet
              your retirement goals, based on your current age, expected
              retirement age, life expectancy, and annual expenses. It accounts
              for expected returns on investments to give you a more accurate
              result.
            </p>

            <li className="pt-6 my-2">
              3) Why should I plan for retirement early?
            </li>
            <p>
              Starting your retirement savings early can take advantage of
              compound interest, meaning your money grows faster over time. The
              earlier you start, the less you may need to save each month to
              reach your goal.
            </p>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RetirementCalculator;
