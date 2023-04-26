import "./globals.css";
import { Inter } from "next/font/google";
import { SideBar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mainstack | Dashboard",
  description: "Welcome to your mainstack dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="w-full h-screen flex sm:gap-x-[3%] lg:gap-x-[5%] ">
          <SideBar />
          <main className="flex-1">{children}</main>
        </section>
      </body>
    </html>
  );
}
