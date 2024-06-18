import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { UserContextProvider } from "@/contexts/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Website",
  description: "Made by Karim Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <Header />
          <main>
            <UserContextProvider>{children}</UserContextProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
