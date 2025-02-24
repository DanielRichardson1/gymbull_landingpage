import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "20M+",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description: "Workouts completed by our users, delivering real results.",
  },
  {
    title: "5.0",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "Star rating, consistently maintained across app stores.",
  },
  {
    title: "175+",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description:
      "Countries where GymBull is available, making fitness accessible worldwide.",
  },
];
