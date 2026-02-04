import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@styles/globals.scss";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--hc-font-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hortência Côrtes",
  description:
    "Desenvolvedora Front-end | Apaixonada por criar experiências digitais incríveis",
  openGraph: {
    title: "Hortência Côrtes",
    description:
      "Desenvolvedora Front-end | Apaixonada por criar experiências digitais incríveis",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Hortência Côrtes",
      },
    ],
    type: "website",
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
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-S9QRWFPKZQ" strategy="afterInteractive"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-S9QRWFPKZQ');
          `}
        </Script> */}
      </head>
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
