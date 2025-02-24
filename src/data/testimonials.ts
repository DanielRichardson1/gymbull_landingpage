import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'John Smith',
        role: 'Fitness Enthusiast',
        message: `${siteDetails.siteName} has completely revolutionized my fitness journey. The personalized plans and guidance have helped me achieve my goals like never before.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Jane Doe',
        role: 'Personal Trainer',
        message: `As a personal trainer, I'm impressed by ${siteDetails.siteName}'s ability to provide tailored workouts and real-time feedback. It's a game-changer for both me and my clients.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Emily Johnson',
        role: 'Health Coach',
        message: `${siteDetails.siteName} is a must-have app for anyone serious about fitness. Its user-friendly interface and powerful features make it an indispensable tool for achieving a healthier lifestyle.`,
        avatar: '/images/testimonial-3.webp',
    },
];
