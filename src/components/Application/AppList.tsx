import React, { FC, ReactNode } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

type AppListProps = {
  id: number;
  icon: ReactNode;
  appName: string;
  url: string;
  description: string;
};

export const AppList:FC<AppListProps> = ({ icon, appName, url, description }: AppListProps) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border-4 border-double border-green-200 p-6 mx-auto w-3/4 rounded-full text-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-slate-800 text-indigo-500 mb-4">
          <IconContext.Provider value={{ size: "30px", color: "yellow" }}>
            {icon}
          </IconContext.Provider>
        </div>
        <Link to={url}>
          <h1 className="text-lg text-yellow-300 font-medium title-font mb-2">
            {appName}
          </h1>
        </Link>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
};
