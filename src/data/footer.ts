import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering the world with cutting-edge fitness solutions for a healthier lifestyle.",
    quickLinks: [
        {
            text: "Help Center",
            url: "/help"
        },
        {
            text: "Feedback",
            url: "/feedback"
        },
        {
            text: "Terms of Use",
            url: "/terms"
        },
        {
            text: "Privacy Policy",
            url: "/privacy"
        },
        {
            text: "Acknowledgements",
            url: "/acknowledgements"
        }
    ],
    email: 'support@gymbull.com',
    telephone: '+1 (610) 123-4203',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}