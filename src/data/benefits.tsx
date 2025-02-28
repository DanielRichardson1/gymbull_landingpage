import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Personalized Workouts",
    description:
      "Experience tailored fitness plans that adapt to your needs and goals. GymBull makes staying fit enjoyable and easy.",
    bullets: [
      {
        title: "Customized Plans",
        description:
          "Get workouts designed specifically for your fitness level and goals.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Flexible Scheduling",
        description: "Schedule workouts around your busy life effortlessly.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Real-Time Feedback",
        description: "Receive instant feedback on your form and progress.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/mockups/workout_overview.png",
  },
  {
    title: "Personalized Meal Plans",
    description:
      "Get meal plans tailored to your dietary preferences and fitness goals. GymBull ensures you're fueling your body right.",
    bullets: [
      {
        title: "Nutrition Tracking",
        description:
          "Track your meals and nutrition to stay on top of your diet.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Custom Recipes",
        description:
          "Enjoy delicious recipes customized to your dietary needs.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Calorie Monitoring",
        description:
          "Monitor your calorie intake with easy-to-understand charts.",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/mockups/meal_overview.webp",
  },
  {
    title: "AI Powered Coaching",
    description:
      "Benefit from AI-driven coaching that adjusts to your performance and helps you achieve your fitness goals faster.",
    bullets: [
      {
        title: "Smart Recommendations",
        description: "Receive personalized workout and meal recommendations.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Performance Analytics",
        description: "Analyze your performance data to optimize your progress.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Continuous Improvement",
        description:
          "AI learns and adapts to provide more effective coaching over time.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockups/workout_description.png",
  },
];
