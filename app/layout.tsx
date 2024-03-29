import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "../components/Nav";
export const metadata: Metadata = {
  title: "Form Generator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        <Nav />
        {children}
      </main>
    </html>
  );
}
