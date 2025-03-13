
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

interface LayoutProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
}

export const Layout = ({ children, showBreadcrumbs = true }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {showBreadcrumbs && <BreadcrumbNav />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
