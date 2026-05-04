import type { Metadata } from "next";
import "@/app/globals.css";
import StoreProvider from "@/redux/provider/StoreProvider";
import DefautlLayout from "@/template/DefautlLayout";

export const metadata: Metadata = {
  title: "Sofa Minh Phú",
  description: "Sofa Minh Phú",
  icons: {
    icon: "/IconLogo.svg",
    shortcut: "/IconLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <DefautlLayout>{children}</DefautlLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
