import { MantineProvider } from "@mantine/core";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
            <div className="fixed">
              <Topbar />
              <Navbar />
            </div>
            <div className="pt-[112.7px]">{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
