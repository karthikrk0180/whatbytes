import React from "react";

import { LineChart } from "@mui/x-charts/LineChart";

const data = {
  skillImg:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  skillHeading: "Hyper Text Markup Language",
  questions: "1",
  duration: "15",
  dateSubmitted: "2024-11-15T10:30:00Z",
};

// Helper function to format the date
const formatDate = (dateString) => {
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Body = () => {
  return (
    <div className="p-5 ">
      <div className="font-semibold text-gray-700 text-lg  w-full ">Skill Test</div>

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
            <button className="bg-blue-950 text-white px-6 py-3 rounded-lg">
              Update
            </button>
          </div>
        </div>

        <div className=" border-slate-200 border-2 rounded-lg mt-5">
          <h2 className="font-extrabold p-3">Quick Statistics</h2>
          <div className="flex justify-around mb-4">
            <div className="flex items-center">
              <div className="bg-slate-400 rounded-full p-4 m-2">🏆</div>
              <div>
                <h2 className="font-bold">1</h2>
                <h3 className="text-gray-700">YOUR RANK</h3>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-slate-400 rounded-full p-4 m-2">📑</div>
              <div>
                <h2 className="font-bold">30%</h2>
                <h3 className="text-gray-700">PERCENTILE</h3>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-slate-400 rounded-full p-4 m-2">✅</div>
              <div>
                <h2 className="font-bold">10/15</h2>
                <h3 className="text-gray-700">CORRECT ANSWERS</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-slate-200 mt-5 rounded-lg">

          <div className="flex justify-between p-1 items-center">
            <div className="flex-col p-4 ">
              <h2 className="font-extrabold pb-3">Comparision Graph</h2>
              <div>
                You scored 30% percentile which is lower than the <br />
                average percentile 72% of all the engineers who took this
                assessment.
              </div>
            </div>

            <div className="bg-slate-400 rounded-full p-4   m-4">📈</div>
          </div>

          <div>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Body;
