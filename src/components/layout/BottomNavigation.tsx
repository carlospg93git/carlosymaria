
import { NavLink } from "react-router-dom";
import { Heart, Info, Church, Clock, MapPin, Camera, Users, Utensils } from "lucide-react";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50">
      <div className="max-w-lg mx-auto px-2">
        <div className="flex overflow-x-auto py-2 scrollbar-hide">
          <NavItem to="/" icon={<Heart className="w-5 h-5" />} label="Home" />
          <NavItem to="/information" icon={<Info className="w-5 h-5" />} label="Info" />
          <NavItem to="/church" icon={<Church className="w-5 h-5" />} label="Church" />
          <NavItem to="/timetable" icon={<Clock className="w-5 h-5" />} label="Time" />
          <NavItem to="/location" icon={<MapPin className="w-5 h-5" />} label="Map" />
          <NavItem to="/photos" icon={<Camera className="w-5 h-5" />} label="Photos" />
          <NavItem to="/tables" icon={<Users className="w-5 h-5" />} label="Tables" />
          <NavItem to="/menu" icon={<Utensils className="w-5 h-5" />} label="Menu" />
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center px-3 py-1 rounded-lg transition-colors ${
          isActive
            ? "text-wedding-primary"
            : "text-wedding-neutral hover:text-wedding-text"
        }`
      }
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </NavLink>
  );
};

export default BottomNavigation;
