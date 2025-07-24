import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BsClock } from "react-icons/bs";
import { ImageProfile } from "../assets/header";

const DataImages = [
  { id: 1, image: ImageProfile },
  { id: 2, image: ImageProfile },
  { id: 3, image: ImageProfile },
  { id: 4, image: ImageProfile },
  { id: 5, image: ImageProfile },
];

export const Progress = () => {
  const value = 90;
  return (
    <div className="flex flex-col gap-4">
      <Box sx={{ width: "100%" }}>
        <Typography variant="body2" color="#546FFF">
          <div className="flex justify-between mb-2">
            <span className="text-black">Progress</span>
            <span>{`${value}%`}</span>
          </div>
        </Typography>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <BsClock />
          <span>1Hour</span>
        </div>
        <div className=" flex border border-white">
          {DataImages.map((item) => (
            <div key={item.id} className="w-4 h-4 rounded-full object-cover flex -ml-1">
              <img src={item.image} alt="Image-Profile" className="w-full- h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
