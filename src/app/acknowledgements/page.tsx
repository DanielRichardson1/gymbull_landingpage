import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: `Acknowledgements | ${siteDetails.siteName}`,
  description: "Acknowledging the libraries, services, and resources used in GymBull",
};

export default function Acknowledgements() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold pt-24 md:pt-16 mb-8">Acknowledgements</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>
          GymBull would not be possible without the incredible work of many open-source projects, 
          services, and resources. We'd like to acknowledge and thank the following:
        </p>
        
        <h2>Open Source Libraries</h2>
        <ul>
          <li>
            <strong>React</strong> - A JavaScript library for building user interfaces
            <br />
            <a href="https://reactjs.org/" className="text-primary">https://reactjs.org/</a>
          </li>
          <li>
            <strong>Next.js</strong> - The React framework for production
            <br />
            <a href="https://nextjs.org/" className="text-primary">https://nextjs.org/</a>
          </li>
          <li>
            <strong>Tailwind CSS</strong> - A utility-first CSS framework
            <br />
            <a href="https://tailwindcss.com/" className="text-primary">https://tailwindcss.com/</a>
          </li>
          <li>
            <strong>TypeScript</strong> - A typed superset of JavaScript
            <br />
            <a href="https://www.typescriptlang.org/" className="text-primary">https://www.typescriptlang.org/</a>
          </li>
        </ul>
        
        <h2>Design Resources</h2>
        <ul>
          <li>
            <strong>Manrope Font</strong> - By Mikhail Sharanda
            <br />
            <a href="https://fonts.google.com/specimen/Manrope" className="text-primary">https://fonts.google.com/specimen/Manrope</a>
          </li>
          <li>
            <strong>Source Sans 3 Font</strong> - By Adobe
            <br />
            <a href="https://fonts.google.com/specimen/Source+Sans+3" className="text-primary">https://fonts.google.com/specimen/Source+Sans+3</a>
          </li>
          <li>
            <strong>Unsplash</strong> - Beautiful free images
            <br />
            <a href="https://unsplash.com/" className="text-primary">https://unsplash.com/</a>
          </li>
        </ul>
        
        <h2>Services</h2>
        <ul>
          <li>
            <strong>Vercel</strong> - Deployment and hosting platform
            <br />
            <a href="https://vercel.com/" className="text-primary">https://vercel.com/</a>
          </li>
          <li>
            <strong>GitHub</strong> - Source code management
            <br />
            <a href="https://github.com/" className="text-primary">https://github.com/</a>
          </li>
        </ul>
        
        <h2>Fitness Data</h2>
        <p>
          We would like to thank the fitness professionals and exercise physiologists whose research and 
          work has contributed to the exercise database and fitness recommendations in our application.
        </p>
        
        <h2>Contributors</h2>
        <p>
          Thank you to all the developers, designers, testers, and advisors who have contributed to 
          making GymBull a reality.
        </p>
      </div>
    </div>
  );
} 