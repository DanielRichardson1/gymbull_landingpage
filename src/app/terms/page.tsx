import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: `Terms of Use | ${siteDetails.siteName}`,
  description: "Terms and conditions for using the GymBull application",
};

export default function TermsOfUse() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold pt-24 md:pt-16 mb-8">Terms of Use</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the GymBull application ("the App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App.
        </p>
        
        <h2>2. User Accounts</h2>
        <p>
          When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device.
        </p>
        
        <h2>3. User Content</h2>
        <p>
          Users may have the ability to post content such as progress photos, workout logs, and comments. You retain ownership of your content, but grant GymBull a worldwide, non-exclusive license to use, reproduce, and display such content in connection with the App.
        </p>
        
        <h2>4. Prohibited Activities</h2>
        <p>
          You agree not to use the App for any unlawful purpose or in any way that could damage, disable, or impair the App. You also agree not to attempt to gain unauthorized access to any part of the App.
        </p>
        
        <h2>5. Disclaimer of Warranties</h2>
        <p>
          The App is provided "as is" without warranties of any kind, either express or implied. GymBull does not warrant that the App will be error-free or uninterrupted.
        </p>
        
        <h2>6. Limitation of Liability</h2>
        <p>
          GymBull shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the App.
        </p>
        
        <h2>7. Changes to Terms</h2>
        <p>
          GymBull reserves the right to modify these Terms at any time. We will provide notice of significant changes to these Terms by posting the new Terms on the App.
        </p>
        
        <h2>8. Governing Law</h2>
        <p>
          These Terms shall be governed by the laws of the United States, without regard to its conflict of law provisions.
        </p>
        
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at <a href="mailto:legal@gymbull.com">legal@gymbull.com</a>.
        </p>
      </div>
    </div>
  );
} 