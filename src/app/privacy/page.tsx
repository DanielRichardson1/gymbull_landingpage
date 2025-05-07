import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteDetails.siteName}`,
  description: "GymBull's privacy policy and data protection information",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold pt-24 md:pt-16 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <h2>1. Introduction</h2>
        <p>
          At GymBull, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
        </p>
        
        <h2>2. Information We Collect</h2>
        <p>
          We may collect the following types of information:
        </p>
        <ul>
          <li>Personal information (name, email address, date of birth)</li>
          <li>Fitness metrics (height, weight, exercise data)</li>
          <li>Device information (device type, operating system)</li>
          <li>Usage data (how you interact with the app)</li>
        </ul>
        
        <h2>3. How We Use Your Information</h2>
        <p>
          We use your information to:
        </p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Personalize your experience</li>
          <li>Send you updates and communications</li>
          <li>Analyze usage patterns to enhance the app</li>
        </ul>
        
        <h2>4. Data Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. We may share your information with:
        </p>
        <ul>
          <li>Service providers who help us operate the app</li>
          <li>When required by law or to protect our rights</li>
          <li>With your consent or at your direction</li>
        </ul>
        
        <h2>5. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
        </p>
        
        <h2>6. Your Rights</h2>
        <p>
          Depending on your location, you may have the right to:
        </p>
        <ul>
          <li>Access and receive a copy of your data</li>
          <li>Rectify or update your information</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Data portability</li>
        </ul>
        
        <h2>7. Children&apos;s Privacy</h2>
        <p>
          Our app is not intended for children under 13, and we do not knowingly collect personal information from children under 13.
        </p>
        
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
        </p>
        
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@gymbull.com">privacy@gymbull.com</a>.
        </p>
      </div>
    </div>
  );
} 