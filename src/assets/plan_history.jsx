import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase"; // Adjust the relative path
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

const PlanHistory = () => {
  const [savedPlans, setSavedPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null); // To keep track of the currently selected plan

  // Fetch saved plans from Firestore
  const fetchPlans = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "plannerHistory"));
      const plans = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Store document ID for deletion
        ...doc.data(),
      }));
      setSavedPlans(plans);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  // Delete a specific plan
  const deletePlan = async (planId) => {
    try {
      await deleteDoc(doc(db, "plannerHistory", planId));
      setSavedPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== planId));
      alert("Plan deleted successfully!");
    } catch (error) {
      console.error("Error deleting plan:", error);
      alert("Error deleting plan! Please try again.");
    }
  };

  // Fetch the plans on component mount
  useEffect(() => {
    fetchPlans();
  }, []);

  // Toggle visibility of the selected plan details
  const handlePlanClick = (plan) => {
    if (selectedPlan === plan) {
      setSelectedPlan(null); // Close the accordion if the same plan is clicked again
    } else {
      setSelectedPlan(plan); // Open the selected plan
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white exo-2-text">
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
      <div className="h-10 flex justify-end pr-12 pt-12 space-x-14 items-center text-white relative">
        <a href="/dashboard">Start Investing!</a>
        <Link to="/planner">
          <p>Go Back to planner</p>
        </Link>

      </div>

      <div className="w-2/3 pt-28 m-auto">
        <h1 className="text-4xl font-bold mb-6 montserrat pb-10">Saved Investment Plans</h1>

        {savedPlans.length === 0 ? (
          <p>No saved plans found</p>
        ) : (
          <div className="space-y-4">
            {savedPlans.map((plan, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg relative">
                <h2 className="text-xl font-semibold">{plan.goalName}</h2>

                {/* Delete Icon */}
                <button
                  onClick={() => deletePlan(plan.id)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                  title="Delete Plan"
                >
                  🗑️
                </button>

                {/* Button to toggle the accordion */}
                <button
                  onClick={() => handlePlanClick(plan)}
                  className="mt-2 text-blue-500 hover:text-blue-700"
                >
                  {selectedPlan === plan ? "Hide Full Plan" : "Show Full Plan"}
                </button>

                {/* Show detailed plan information if selected */}
                {selectedPlan === plan && (
                  <div className="mt-4 space-y-2">
                    <p>
                      <strong>Goal Name:</strong> {plan.goalName}
                    </p>
                    <p>
                      <strong>Target Amount:</strong> ₹
                      {parseFloat(plan.targetAmount).toLocaleString("en-IN")}
                    </p>
                    <p>
                      <strong>Capital Amount:</strong> ₹
                      {parseFloat(plan.capitalAmount).toLocaleString("en-IN")}
                    </p>
                    <p>
                      <strong>Risk Tolerance:</strong> {plan.riskTolerance}
                    </p>
                    <p>
                      <strong>Time to Goal:</strong>{" "}
                      {plan.investmentData?.timeToGoal}
                    </p>
                    <p>
                      <strong>Average Return Rate:</strong>{" "}
                      {plan.investmentData?.avgReturnRate}
                    </p>

                    {/* Display Suggested Portfolio Allocation */}
                    {plan.investmentData?.suggestedPortfolio &&
                    plan.investmentData.suggestedPortfolio.length > 0 ? (
                      <div className="mt-4">
                        <p className="font-semibold">
                          Suggested Portfolio Allocation:
                        </p>
                        <ul className="list-disc ml-6">
                          {plan.investmentData.suggestedPortfolio.map(
                            (item, idx) => (
                              <li key={idx}>
                                <strong>{item.type}:</strong> {item.allocation}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        No portfolio allocation data available.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanHistory;
