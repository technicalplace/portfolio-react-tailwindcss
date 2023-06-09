import React from "react";

export const Display = (props: { value: string }) => {
  return (
    <div className="w-40 mx-auto h-full text-4xl text-white pt-8 text-right">
      {props.value}
    </div>
  );
};
