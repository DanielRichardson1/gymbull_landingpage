import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Basic',
        price: "Free",
        features: [
            'Custom Workout Scheduling',
            'Personalized Meal Plan',
            'Workout History & Stats',
            'Calorie & Macro Tracking',
            'Rest & Recovery Optimization',
        ],
    },
    {
        name: 'Premium',
        price: 3.99,
        features: [
            '1-on-1 AI Coaching Chat',
            'Social & Competitive Challenges',
            'Access to our Recipe Library',
            'Priority Email & Phone Support',
            'Offline Mode',
        ],
    },
    {
        name: 'Premium +',
        price: 9.99,
        features: [
            'All Premium Features',
            'Advanced Performance Analytics',
            'Exclusive Access to Masterclass Workouts',
            'Custom Dietitian Consultations',
            'Premium Content Library Access',
            'Monthly Fitness Progress Reports',
            'Priority Support with Dedicated Coach'
        ],
    },
]