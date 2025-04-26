
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
      <div className="pt-20"> {/* Add top padding to account for fixed navbar */}
        {showBreadcrumbs && <BreadcrumbNav />}
        <main className="flex-grow max-w-screen-lg mx-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
