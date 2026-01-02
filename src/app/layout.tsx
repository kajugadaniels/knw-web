import type { Metadata, Viewport } from "next";
import { Nunito, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * ✅ Kid-friendly + readable font
 * - Nunito for UI (rounded, friendly, great for children)
 * - Geist Mono kept for code/technical text if needed
 */
const kidsSans = Nunito({
    variable: "--font-kids-sans",
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://knw.nexcode.africa"),
    applicationName: "KNW",
    title: {
        default: "KNW — Kids Routine & Life Skills Platform",
        template: "%s | KNW",
    },
    description:
        "KNW helps children build independence with visual routines, positive reinforcement, and parent controls — designed to be calm, friendly, and easy to use.",
    keywords: [
        "KNW",
        "kids routines",
        "visual schedule",
        "life skills",
        "parent controls",
        "behavior support",
        "reward system",
        "child independence",
        "ADHD routines",
        "autism routines",
    ],
    authors: [{ name: "Nexcode Africa" }],
    creator: "Nexcode Africa",
    publisher: "Nexcode Africa",
    category: "Education",
    alternates: {
        canonical: "https://knw.nexcode.africa",
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        url: "https://knw.nexcode.africa",
        siteName: "KNW",
        title: "KNW — Kids Routine & Life Skills Platform",
        description:
            "Build independence with visual routines, positive reinforcement, and parent controls — calm, friendly, and easy to use.",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "KNW",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "KNW — Kids Routine & Life Skills Platform",
        description:
            "Build independence with visual routines, positive reinforcement, and parent controls.",
        images: ["/og.png"],
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.png", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png" }],
    },
    manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
        { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${kidsSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
