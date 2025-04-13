
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-5xl font-italianno text-wedding-primary">{title}</h1>
      {subtitle && (
        <p className="text-wedding-neutral mt-1">{subtitle}</p>
      )}
      <div className="mt-2 flex justify-center">
        <div className="w-16 h-0.5 bg-wedding-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default PageHeader;
