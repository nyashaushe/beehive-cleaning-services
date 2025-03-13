
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const routeNames: Record<string, string> = {
  "": "Home",
  "about": "About",
  "services": "Services",
  "pricing": "Pricing",
  "contact": "Contact",
  "testimonials": "Testimonials",
};

export function BreadcrumbNav() {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((path) => path !== "");
  
  // Don't show breadcrumbs on home page
  if (pathNames.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          
          {pathNames.map((name, index) => {
            const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathNames.length - 1;
            const displayName = routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1);
            
            return (
              <BreadcrumbItem key={routeTo}>
                {isLast ? (
                  <BreadcrumbPage>{displayName}</BreadcrumbPage>
                ) : (
                  <>
                    <BreadcrumbLink asChild>
                      <Link to={routeTo}>{displayName}</Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                )}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
