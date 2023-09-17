import React, { ReactNode } from "react";
import { Link } from "react-router-dom"
import { AppList } from "./AppList";
import { FaCalculator } from "react-icons/fa";
import { IoIosPhotos } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { BiLastPage } from "react-icons/bi";
import { FaRegWindowRestore } from "react-icons/fa";
import { BsToggleOn } from "react-icons/bs";
import { TbNumbers } from "react-icons/tb";
import { MdOutlineDinnerDining } from "react-icons/md";
import { MdCatchingPokemon } from "react-icons/md";

export const Application: React.VFC = () => {
  const appListDetails: {
    id: number,
    icon: ReactNode,
    appName: string,
    url: string,
    description: string,
  }[] = [
    {
      id: 0,
      icon: <IoIosPhotos />,
      appName: '写真検索アプリ',
      url: 'PhotoSearch',
      description: 'I created a photo search app using React. Please feel free to take a look.',
    },
    {
      id: 1,
      icon: <FaCalculator />,
      appName: '簡単な電卓アプリ',
      url: 'Calculate',
      description: 'I created a simple calculator app using React and TypeScript, Please feel free to take a look.',
    },
    {
      id: 2,
      icon: <FcTodoList />,
      appName: 'Todoリスト',
      url: 'TodoList',
      description: 'I created a TodoList app using React. Please feel free to take a look.',
    },
    {
      id: 3,
      icon: <BiLastPage />,
      appName: 'ページネーション',
      url: 'Pagination',
      description: 'I created a pagination feature using React. Please feel free to take a look.',
    },
    {
      id: 4,
      icon: <FaRegWindowRestore />,
      appName: 'モーダル',
      url: 'Modal',
      description: 'I created a modal feature using React. Please feel free to take a look.',
    },
    {
      id: 5,
      icon: <BsToggleOn />,
      appName: 'Toggleボタン',
      url: 'ToggleButton',
      description: 'I created a Toggle Button feature using React. Please feel free to take a look.',
    },
    {
      id: 6,
      icon: <TbNumbers />,
      appName: 'カウントアプリ',
      url: 'CountUpDown',
      description: 'I created a Count Up and Down feature using React. Please feel free to take a look.',
    },
    {
      id: 7,
      icon: <MdOutlineDinnerDining />,
      appName: 'レシピ検索アプリ',
      url: 'RecipeSearch',
      description: 'I created a Recipe Search feature using React. Please feel free to take a look.',
    },
    {
      id: 8,
      icon: <MdCatchingPokemon />,
      appName: 'ポケモン図鑑',
      url: 'PokemonPictorialBook',
      description: 'I created a PokemonPictorialBook feature using React. Please feel free to take a look.',
    },
    {
      id: 9,
      icon: '',
      appName: '本検索アプリ',
      url: 'BookSearch',
      description: 'I created a BookSearch feature using React. Please feel free to take a look.',
    },
    {
      id: 10,
      icon: '',
      appName: 'カンバンボード',
      url: 'KanbanBoard',
      description: 'I created a KanbanBoard feature using React. Please feel free to take a look.',
    },
  ];

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
          {appListDetails.map(({ id, ...props}) => {
            return (
              <AppList id={id} key={id} {...props} />
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
