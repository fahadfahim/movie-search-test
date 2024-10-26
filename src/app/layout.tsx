
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <div className="px-[20px]">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
