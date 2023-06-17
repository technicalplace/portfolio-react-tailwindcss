import React, { useEffect, useRef, useState } from "react";
import { RecipeShow } from "./RecipeShow";

export const Recipe = () => {
  const APP_ID = "677c4ba3";
  const APP_KEY = "02a2497cf596ecbdf642d4776114e4f3";
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");
  const [recipes, setRecipes] = useState([]);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q="${query}"&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const getSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  const updateSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="h-full bg-slate-300">
      <form className="text-center pt-9" onSubmit={getSearch}>
        <input
          className="w-60 py-3 rounded-lg outline-none"
          value={search}
          onChange={updateSearch}
          type="text"
          placeholder="入力してください"
          ref={inputRef}
        />
        <button
          className="ml-4 text-2xl border-4 rounded-xl p-2 bg-white"
          type="submit"
        >
          検索
        </button>
      </form>
      <div>
        {recipes.map((recipe: { recipe: any; label: string; calories: number }) => (
            <RecipeShow
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          )
        )}
      </div>
    </div>
  );
};
