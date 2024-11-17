import React, { useState } from "react";

import { LineChart } from "@mui/x-charts/LineChart";
import Modal from "./Modal";
import Parameters from "./Parameters";

const data = {
  skillImg:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  skillHeading: "Hyper Text Markup Language",
  questions: "15",
  duration: "15",
  dateSubmitted: "2024-11-15T10:30:00Z",
};

const formatDate = (dateString) => {
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Body = () => {
  const [scores, setScores] = useState({
    rank: "1",
    percentile: "90",
    correctAns: "12",
  });

  const [showModal, setShowModal] = useState(false);

  const updateScores = (newScores) => {
    setScores(newScores);
    setShowModal(false);
  };

  const chartData = {
    xAxis: [{ data: [0, 25, 50, 75, 100] }],
    series: [
      {
        data: [0, 20, 50, 50, 20],
      },
    ],
  };

  const updatedSeries = [
    {
      data: [
        chartData.series[0].data[0],
        scores.percentile,
        chartData.series[0].data[2],
        chartData.series[0].data[3],
        chartData.series[0].data[4],
      ],
    },
  ];
  return (
    <div className="lg:flex">
      <div className="p-5 ">
        <div className="font-bold text-black  text-lg  w-full ">Skill Test</div>

        <div>

          
          <div className="bg-white border-slate-200 rounded-lg flex p-5 border-2 items-center mt-5">
            <div>
              <img className="size-24" src={data.skillImg} />
            </div>
            <div className="px-4">
              <h2 className="text-black font-extrabold">{data.skillHeading}</h2>
              <h3 className="text-slate-500">
                Questions: {data.questions} | Duration: {data.duration} mins |
                Submitted on {formatDate(data.dateSubmitted)}
              </h3>
            </div>
            <div>
              <button
                onClick={() => {
                  setShowModal(true);
                }}
                className="bg-blue-950 text-white px-6 py-3 rounded-lg"
              >
                Update
              </button>
            </div>
          </div>

          <div className=" border-slate-200 border-2 rounded-lg mt-5">
            <h2 className="font-extrabold p-3">Quick Statistics</h2>
            <div className="flex justify-around mb-4">
              <div className="flex items-center">
                <div className="bg-slate-300 rounded-full p-4 m-2">🏆</div>
                <div>
                  <h2 className="font-bold">{scores.rank}</h2>
                  <h3 className="text-gray-700">YOUR RANK</h3>
                </div>
              </div>

              <div className="flex items-center  px-6 border-x-2">
                <div className="bg-slate-200 rounded-full p-4 m-2 ">📑</div>
                <div>
                  <h2 className="font-bold">{scores.percentile}%</h2>
                  <h3 className="text-gray-700 ">PERCENTILE</h3>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-slate-300 rounded-full p-4 m-2">✅</div>
                <div>
                  <h2 className="font-bold">{scores.correctAns}/15</h2>
                  <h3 className="text-gray-700">CORRECT ANSWERS</h3>
                </div>
              </div>
            </div>
          </div>

          {showModal && (
            <Modal
              setShowModal={setShowModal}
              scores={scores}
              updateScores={updateScores}
            />
          )}

          <div className="border-2 border-slate-200 mt-5 rounded-lg">
            <div className="flex justify-between p-1 items-center">
              <div className="flex-col p-4 ">
                <h2 className="font-extrabold pb-3">Comparision Graph</h2>
                <div>
                  You scored {scores.percentile}% percentile which is lower than
                  the <br />
                  average percentile 72% of all the engineers who took this
                  assessment.
                </div>
              </div>

              <div className="bg-slate-200 rounded-full p-4   m-4">📈</div>
            </div>

            <div>
              <LineChart
                xAxis={chartData.xAxis}
                series={updatedSeries}
                width={750}
                height={300}
              />
            </div>
          </div>


        </div>
      </div>
      <div>
        <Parameters scores={scores} updateScores={updateScores} />
      </div>
    </div>
  );
};

export default Body;
