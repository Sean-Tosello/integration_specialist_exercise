import { Montserrat } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import Header from "../components/header";
import Footer from "../components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  head: [
  ],
  title: "Integration Specialist Exercise",
  description: "Demo Exercise for Further Integration Specialist Role",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          <GoogleTagManager gtmId="GTM-PPTRZFBT" />
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
