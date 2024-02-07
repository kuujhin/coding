import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

// layout이나 page에서만 eport 가능
// server component에서만 존재 가능
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
