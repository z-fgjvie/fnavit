import localFont from "next/font/local";
import "./globals.css";

const geomanistLight = localFont({
  src: "./fonts/Geomanist-Light.woff2",
  variable: "--font-geomanist-light",
  display: "swap",
});

const geomanistRegular = localFont({
  src: "./fonts/Geomanist-Regular.woff2",
  variable: "--font-geomanist-regular",
  display: "swap",
});

const geomanistBook = localFont({
  src: "./fonts/Geomanist-Book.woff2",
  variable: "--font-geomanist-book",
  display: "swap",
});

const geomanistMedium = localFont({
  src: "./fonts/Geomanist-Medium.woff2",
  variable: "--font-geomanist-medium",
  display: "swap",
});

const geomanistBold = localFont({
  src: "./fonts/Geomanist-Bold.woff2",
  variable: "--font-geomanist-bold",
  display: "swap",
});

export const metadata = {
  title: "Mi Cuenta Infonavit",
  description:
    "Accede a tu cuenta Infonavit para gestionar tus aportaciones, créditos y otros servicios habitacionales.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?=4"],
  },
  openGraph: {
    title: "Mi Cuenta Infonavit",
    description:
      "Accede a tu cuenta Infonavit para gestionar tus aportaciones, créditos y otros servicios habitacionales.",
    url: "https://fnavit.vercel.app",
    siteName: "Mi Cuenta Infonavit",
    images: [
      {
        url: "https://fnavit.vercel.app/og-vit.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geomanistLight.variable} ${geomanistRegular.variable} ${geomanistBook.variable} ${geomanistMedium.variable} ${geomanistBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
