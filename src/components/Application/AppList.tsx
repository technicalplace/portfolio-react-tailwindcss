import React from "react";
import photoIcon from "../../img/camera-g4078d0a1f_640.png";

type AppListProps = {
  item: {
    id: number,
    appName: string,
    description: string
  };
};

export const AppList = ({ item }: AppListProps) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border-4 border-double border-green-200 p-6 mx-auto w-3/4 rounded-full text-center">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-200 text-indigo-500 mb-4">
          <img src={photoIcon} alt="photoIcon" className="w-7" />
        </div>
        <h2 className="text-lg text-green-400 font-medium title-font mb-2">
          {item.appName}
        </h2>
        <p className="leading-relaxed text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
};
