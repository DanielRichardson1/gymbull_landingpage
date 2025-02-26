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
          "Workouts designed specifically for your fitness level and goals.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Flexible Scheduling",
        description: "Fit your workouts into your busy schedule with ease.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Real-Time Feedback",
        description: "Get instant feedback on your form and progress.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Seamless Integration",
    description:
      "Easily integrate GymBull with your favorite fitness trackers and devices to keep all your data in one place.",
    bullets: [
      {
        title: "Wearable Compatibility",
        description:
          "Sync with popular fitness wearables and track your progress.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Nutrition Tracking",
        description:
          "Monitor your diet alongside your workouts for holistic health.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Progress Visuals",
        description:
          "Visualize your fitness journey with easy-to-understand charts and graphs.",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/mockups/hero_ss-portrait-full.webp",
  },
  {
    title: "Top-Notch Security",
    description:
      "Your fitness data is safe with us. GymBull employs advanced security measures to protect your information.",
    bullets: [
      {
        title: "Data Encryption",
        description:
          "Your information is safeguarded with advanced encryption methods.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Biometric Authentication",
        description:
          "Access your account securely with fingerprint or facial recognition.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Continuous Monitoring",
        description:
          "We constantly monitor for any suspicious activity to keep your data safe.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
];
