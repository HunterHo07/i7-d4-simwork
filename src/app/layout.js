import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${APP_NAME} - Prove your skills. Play your job.`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "hiring platform",
    "skill assessment",
    "gamified learning",
    "2.5D simulation",
    "work simulation",
    "talent discovery",
    "coding challenges",
    "design tasks",
    "project management",
    "AI-powered",
  ],
  authors: [{ name: "SimWork Team" }],
  creator: "SimWork",
  publisher: "SimWork",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://simwork.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simwork.dev",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${APP_NAME} - The Future of Work Simulation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@simwork",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    shortcut: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    apple: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0A0E27",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <div id="root">
          {children}
        </div>
        <div id="portal-root" />
      </body>
    </html>
  );
}
