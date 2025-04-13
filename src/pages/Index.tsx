
import PageLayout from "@/components/layout/PageLayout";
import { NavLink } from "react-router-dom";
import { Heart, Info, Church, Clock, MapPin, Camera, Users, Utensils } from "lucide-react";

const Home = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-64 h-64 bg-wedding-light rounded-full overflow-hidden mb-6">
          <div className="absolute inset-2 bg-wedding-peach rounded-full flex items-center justify-center">
            {/* Placeholder for couple image */}
            <Heart className="w-20 h-20 text-wedding-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-wedding-primary text-center">
          Sarah & John
        </h1>
        <p className="text-xl text-wedding-secondary mt-2 text-center">
          We're getting married!
        </p>
        <p className="text-wedding-neutral mt-2 text-center">
          06.15.2025
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <MenuCard
          to="/information"
          icon={<Info className="w-6 h-6" />}
          title="Information"
        />
        <MenuCard
          to="/church"
          icon={<Church className="w-6 h-6" />}
          title="Church"
        />
        <MenuCard
          to="/timetable"
          icon={<Clock className="w-6 h-6" />}
          title="Timetable"
        />
        <MenuCard
          to="/location"
          icon={<MapPin className="w-6 h-6" />}
          title="Location"
        />
        <MenuCard
          to="/photos"
          icon={<Camera className="w-6 h-6" />}
          title="Photos"
        />
        <MenuCard
          to="/tables"
          icon={<Users className="w-6 h-6" />}
          title="Tables"
        />
        <MenuCard
          to="/menu"
          icon={<Utensils className="w-6 h-6" />}
          title="Menu"
        />
      </div>
    </PageLayout>
  );
};

interface MenuCardProps {
  to: string;
  icon: React.ReactNode;
  title: string;
}

const MenuCard = ({ to, icon, title }: MenuCardProps) => {
  return (
    <NavLink
      to={to}
      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-transform hover:scale-105"
    >
      <div className="w-12 h-12 rounded-full bg-wedding-light flex items-center justify-center mb-2">
        <span className="text-wedding-primary">{icon}</span>
      </div>
      <span className="text-wedding-text font-medium text-sm">{title}</span>
    </NavLink>
  );
};

export default Home;
