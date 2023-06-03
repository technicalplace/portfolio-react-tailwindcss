import React from "react";
import { Link } from "react-router-dom"
import { AppList } from "./AppList";

export const Application = () => {
  const appListDetails = [
    {
      id: 0,
      appName: 'Photo Search App',
      description: 'I created a photo search app using React. Please feel free to take a look.',
    },
    {
      id: 1,
      appName: 'Simple calculator app',
      description: 'I created a simple calculator app using React and TypeScript, Please feel free to take a look.',
    },
    {
      id: 2,
      appName: 'Todo List',
      description: 'I created a TodoList app using React. Please feel free to take a look.',
    },
    {
      id: 3,
      appName: 'Pagination',
      description: 'I created a pagination feature using React. Please feel free to take a look.',
    },
    {
      id: 4,
      appName: 'Modal',
      description: 'I created a modal feature using React. Please feel free to take a look.',
    },
    {
      id: 5,
      appName: 'Toggle Button',
      description: 'I created a Toggle Button feature using React. Please feel free to take a look.',
    },
  ]

  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl title-font font-bold mb-2 text-gray-900">
            Here is a list of applications I have created
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="flex flex-wrap items-center -m-4 text-green-100">
          {appListDetails.map(({ id }) => {
            return (
              <AppList item={appListDetails[id]} />
            )
          })}
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <Link to="/">Home</Link>
        </button>
      </div>
    </section>
  );
};
