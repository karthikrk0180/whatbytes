import React from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import Stack from "@mui/joy/Stack";

const Parameters = () => {
  const progressValue = 75; // Change this value to set the circular progress (0 to 100)

  // Set static values for each category
  const progressData = [
    { label: "HTML Tools, Forms, History", value: 43 },
    { label: "Tags & References in HTML", value: 60 },
    { label: "Tables & References in HTML", value: 24 },
    { label: "Tables & CSS Basics", value: 96 },
  ];

  // Function to determine color based on value
  const getColor = (value) => {
    if (value >= 80 && value <= 100) return "success"; // green
    if (value >= 60 && value <= 79) return "neutral"; // orange
    if (value >= 40 && value <= 59) return "primary"; // blue (use 'primary' as blue)
    return "danger"; // red
  };

  return (
    <div>
      <div className="bg-white border-2 border-slate-200 mt-16 w-[100%] mb-3 pb-7 rounded-lg">
        <div className="font-semibold py-5 px-3 text-lg">
          Syllabus Wise Analysis
        </div>

        {progressData.map((item, index) => (
          <div className="px-4 pt-3" key={index}>
            <div className="pb-4">{item.label}</div>
            <div>
              <LinearProgress
                determinate
                variant="outlined"
                color={getColor(item.value)}
                size="sm"
                thickness={24}
                value={item.value}
                sx={{
                  "--LinearProgress-radius": "10px",
                  "--LinearProgress-thickness": "18px",
                }}
              >
                <Typography
                  level="body-xs"
                  textColor="common.white"
                  sx={{ fontWeight: "xl", mixBlendMode: "difference" }}
                >
                  {`${item.value}%`}
                </Typography>
              </LinearProgress>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg w-[100%] text-black text-wrap">
        <div className="flex justify-between px-5 py-4">
          <div className="text-xl font-bold">Question Analysis</div>
          <div className="text-xl font-bold">10/15</div>
        </div>

        <div className="text-wrap px-5">
          You scored 10 questions correct out of 15.
          <br />
          However, it still needs improvements.
        </div>

        <div>
          <Stack
            direction="row"
            spacing={8}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Stack spacing={2}>
              <CircularProgress
                sx={{
                  "--CircularProgress-size": "236px",
                  "--CircularProgress-trackThickness": "40px",
                  "--CircularProgress-progressThickness": "40px",
                }}
                size="lg"
                determinate
                value={progressValue}
                color="primary"
              >
                <Typography>{progressValue}%</Typography>
              </CircularProgress>
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Parameters;
