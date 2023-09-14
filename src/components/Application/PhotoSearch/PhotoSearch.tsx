import React, { useRef, useState } from "react";
import { ImageGallery } from "./ImageGallery";
import { Link } from "react-router-dom";

export const PhotoSearch: React.FC = () => {
  const [fetchData, setFetchData] = useState([]);
  //useRefの場合
  const inputRef = useRef<HTMLInputElement | null>(null);
  const errorMessage = "画像が見つかりません。他の条件で検索してください。";
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //APIUrl
    const endpointUrl = `https://pixabay.com/api/?key=37969050-08103b501b56b12338f905797&q=${inputRef.current?.value}&image_type=photo`;
    //APIを叩く（データフェッチング）
    fetch(endpointUrl)
      .then((res) => {
        console.log(res);
        // データを受け取ることができたらresという変数で受取る
        // それをjson形式でreturnしてあげる
        return res.json();
      })
      .then((data) => {
        // json形式にしたものをdataとして受取る
        setFetchData(data.hits);
        const inputVal = inputRef.current?.value;
        if (inputRef.current?.value) {
          inputRef.current.value = "";
        } else if (inputVal === "") {
          alert("なにか文字を入力してください");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-center pt-24 bg-slate-200 h-screen">
      <h1 className=" text-4xl font-extrabold">PhotoSearch App</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="photoKeyword"
          className="mt-4 focus:outline-none rounded-sm"
          type="text"
          placeholder="写真検索"
          ref={inputRef}
        />
        <button className="border-slate-800 border-solid border-2 rounded-lg px-4 ml-3">
          検索
        </button>
        {/* <p>{ err ? errorMessage : '' }</p> */}
      </form>
      <ImageGallery fetchData={fetchData} />
      <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <Link to="/Application">Application Page&nbsp;→</Link>
      </button>
    </div>
  );
};
