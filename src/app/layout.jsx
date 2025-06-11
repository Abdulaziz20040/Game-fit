import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Sidebar from "./components/Sidebar"; // 👈 Sidebar import qilingan
import Navbar from "./components/Navbar"; // 👈 Navbar import qilingan

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard App",
  description: "My Next.js dashboard layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Navbar />
            <div style={{ flex: 1, padding: "1rem", color: "black" }}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
