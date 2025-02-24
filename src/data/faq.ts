import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Absolutely. We use advanced encryption to protect your data and never store your personal information. Your security is our priority.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Absolutely! Your GymBull account syncs seamlessly across all your devices - smartphone, tablet, and computer.',
    },
    {
        question: 'Can I customize my workout plans?',
        answer: `Yes! ${siteDetails.siteName} offers personalized workout plans tailored to your unique needs and goals. Simply set your preferences in the app.`,
    },
    {
        question: 'Do I need any prior fitness knowledge to use the app?',
        answer: 'Not at all! Our app is designed to be user-friendly and guides you through every step, regardless of your fitness experience.',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our dedicated support team is available 24/7 via chat or email. Plus, we offer in-app tutorials and a comprehensive knowledge base to help you make the most of GymBull.'
    }
];
