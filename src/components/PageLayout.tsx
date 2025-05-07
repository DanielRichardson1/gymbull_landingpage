import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { siteDetails } from "@/data/siteDetails";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  const pageTitle = `${title} | ${siteDetails.siteName}`;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout; 