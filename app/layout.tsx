import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshit Paliwal | Frontend Developer",
  description:
    "Experienced frontend developer specializing in building scalable, high-performance web applications with a focus on clean design, optimal user experience, and cutting-edge technologies.",
  openGraph: {
    title: "Harshit Paliwal | Frontend Developer",
    description:
      "Experienced frontend developer specializing in building scalable, high-performance web applications with a focus on clean design, optimal user experience, and cutting-edge technologies.",
    url: "https://www.harshitpaliwal.in/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dwm5wpz0b/image/upload/v1728198858/Screenshot_2024-10-06_at_12.43.36_PM_zyodiy.png",
        width: 1200,
        height: 630,
        alt: "Harshit Paliwal - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Paliwal | Frontend Developer",
    description:
      "Experienced frontend developer specializing in building scalable, high-performance web applications with a focus on clean design, optimal user experience, and cutting-edge technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="3YFXXM97n6IB8wVkPfvRxz2F-afQ0AQ1b2zUAFKE8X4"
        />
      </head>
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 relative">
        {children}
      </body>
    </html>
  );
}
