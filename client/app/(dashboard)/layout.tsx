import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import StoreProvider from "../StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <StoreProvider>
            <div className="fixed z-[1000]">
              <Topbar />
              <Navbar />
            </div>
            <div className="pt-[112.7px]">{children}</div>
          </StoreProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
