import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Olivia Carter',
        role: 'Fitness Enthusiast',
        message: `${siteDetails.siteName} has completely revolutionized my fitness journey. The personalized plans and guidance have helped me achieve my goals like never before.`,
        avatar: '/images/test-1.jpg',
    },
    {
        name: 'Ethan Thompson',
        role: 'Personal Trainer',
        message: `I'm impressed by ${siteDetails.siteName}'s ability to provide tailored workouts and real-time feedback. It's a game-changer for both me and my clients.`,
        avatar: '/images/test-2.jpg',
    },
    {
        name: 'Emily Johnson',
        role: 'Health Coach',
        message: `${siteDetails.siteName} is a must-have app for anyone serious about fitness. Its user-friendly and has great features for achieving a healthier lifestyle.`,
        avatar: '/images/test-3.jpg',
    },
];
