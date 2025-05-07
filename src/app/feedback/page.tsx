import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: `Feedback | ${siteDetails.siteName}`,
  description: "Share your feedback and suggestions for GymBull",
};

export default function Feedback() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold pt-24 md:pt-16 mb-8">Feedback</h1>
      
      <div className="bg-card rounded-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">We Value Your Input</h2>
        <p className="mb-6 text-foreground-accent">
          At GymBull, we&apos;re constantly striving to improve our app and provide the best possible experience for our users.
          Your feedback is invaluable in helping us achieve this goal.
        </p>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-border rounded-md bg-input"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-border rounded-md bg-input"
              placeholder="Your email"
            />
          </div>
          
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium mb-1">Your Feedback</label>
            <textarea
              id="feedback"
              rows={6}
              className="w-full px-4 py-2 border border-border rounded-md bg-input"
              placeholder="Share your thoughts, suggestions, or report any issues..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
} 