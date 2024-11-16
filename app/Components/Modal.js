import React, { useState } from "react";

const Modal = ({ setShowModal, scores, updateScores }) => {
  const [updatedScores, setUpdatedScores] = useState(scores);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    
    if (name === "rank" && /^[0-9]*$/.test(value)) {
      setUpdatedScores({ ...updatedScores, [name]: value });
    } else if (name === "percentile" && /^[0-9]*$/.test(value)) {
      setUpdatedScores({ ...updatedScores, [name]: value });
    } else if (name === "correctAns" && /^[0-9]*$/.test(value)) {
      setUpdatedScores({ ...updatedScores, [name]: value });
    }
  };

  const validateInputs = () => {
    const { rank, percentile, correctAns } = updatedScores;

    if (rank < 1 || rank > 100 || isNaN(rank)) {
      setError("Rank must be an integer between 1 and 100.");
      return false;
    }
    if (percentile < 1 || percentile > 100 || isNaN(percentile)) {
      setError("Percentile must be an integer between 1 and 100.");
      return false;
    }
    if (correctAns < 0 || correctAns > 15 || isNaN(correctAns)) {
      setError("Correct Answers must be an integer between 0 and 15.");
      return false;
    }

    setError(""); // Clear any previous error message
    return true;
  };

  const handleSave = () => {
    if (validateInputs()) {
      updateScores(updatedScores);
      setShowModal(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="p-6 bg-white rounded-xl shadow-md max-w-md w-full z-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Update Scores</h2>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-900 font-medium mb-1">
              1️⃣ Update your Rank
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="rank"
              value={updatedScores.rank}
              onChange={handleInputChange}
              placeholder="Enter your rank"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-900 font-medium mb-1">
              2️⃣ Update your Percentile
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="percentile"
              value={updatedScores.percentile}
              onChange={handleInputChange}
              placeholder="Enter your percentile"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-900 font-medium mb-1">
              3️⃣ Update your Current Score (out of 15)
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="correctAns"
              value={updatedScores.correctAns}
              onChange={handleInputChange}
              placeholder="Enter current score"
            />
          </div>
        </div>

        
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
