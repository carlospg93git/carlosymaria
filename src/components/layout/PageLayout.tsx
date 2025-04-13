
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const location = useLocation();

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-wedding-background text-wedding-text">
      <main className="flex-1 pt-4 pb-20 px-4 relative overflow-x-hidden">
        <div className="max-w-lg mx-auto animate-fade-in">
          {children}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default PageLayout;
