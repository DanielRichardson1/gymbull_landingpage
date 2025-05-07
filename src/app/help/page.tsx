import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: `Help Center | ${siteDetails.siteName}`,
  description: "Find answers to your questions and get support for GymBull",
};

export default function HelpCenter() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold pt-24 md:pt-16 mb-8">Help Center</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">How do I get started with GymBull?</h3>
              <p className="mt-2 text-foreground-accent">Download the app from the App Store or Google Play, create an account, and follow the setup guide to start your fitness journey.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">How do I customize my workout plan?</h3>
              <p className="mt-2 text-foreground-accent">Navigate to the &apos;My Plan&apos; section in the app, tap on &apos;Edit Plan&apos;, and adjust your preferences, goals, and available equipment.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Can I use GymBull without equipment?</h3>
              <p className="mt-2 text-foreground-accent">Yes! GymBull offers a wide range of bodyweight exercises and workout plans that require no equipment.</p>
            </div>
          </div>
        </section>
        
        <section className="bg-card rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <p className="mb-4">Our support team is available to help you with any questions or issues.</p>
          <div className="space-y-2">
            <p>Email: <a href="mailto:support@gymbull.com" className="text-primary hover:underline">support@gymbull.com</a></p>
            <p>Phone: <a href="tel:+16101234203" className="text-primary hover:underline">+1 (610) 123-4203</a></p>
            <p>Hours: Monday - Friday, 9am - 5pm EST</p>
          </div>
        </section>
      </div>
    </div>
  );
} 