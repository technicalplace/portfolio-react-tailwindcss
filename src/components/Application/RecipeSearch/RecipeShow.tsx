import React from "react";

export const RecipeShow = (props: {
  key: string;
  title: string;
  calories: number;
  image: string;
  ingredients: string[];
}) => {
  return (
    <div className="w-full mx-auto text-center">
      <h1 className="font-bold text-2xl mt-8">{props.title}</h1>
      <ol className=" list-decimal">
        {props.ingredients.map((ingredients: any) => (
          <li key={props.key}>{ingredients.text}</li>
        ))}
      </ol>
      <p>{props.calories} cal</p>
      <img className="mx-auto mt-2" src={props.image} alt="レシピ画像" />
    </div>
  );
};
