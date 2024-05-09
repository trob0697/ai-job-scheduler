import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "App Template",
  description: "Get started with your new app idea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
