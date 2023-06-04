import React from "react";
import { IconContext } from "react-icons";
import { FaCalculator } from "react-icons/fa";
import { Link } from "react-router-dom";


type AppListProps = {
  item: {
    id: number,
    appName: string,
    url: string,
    description: string
  };
};


export const AppList = ({ item }: AppListProps) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border-4 border-double border-green-200 p-6 mx-auto w-3/4 rounded-full text-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-neutral-400 text-indigo-500 mb-4">
          <IconContext.Provider value={{ size: '30px', color: 'yellow' }}>
            <FaCalculator />
          </IconContext.Provider>
        </div>
        <Link to={item.url}>
          <h2 className="text-lg text-green-400 font-medium title-font mb-2">
            {item.appName}
          </h2>
        </Link>
        <p className="leading-relaxed text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
};
