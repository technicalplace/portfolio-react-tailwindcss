import React from "react";

interface ImageGalleryProps {
  fetchData: {
    pageURL: string | undefined;
    largeImageURL: string | undefined;
    id: number;
  }[];
}
export const ImageGallery: React.FC<ImageGalleryProps> = ({ fetchData }) => {
  return (
    <div className="bg-slate-200 mt-10">
      <div className="grid grid-cols-3 gap-5 w-4/6 mx-auto justify-center items-center">
        {fetchData.map(
          (data: {
            pageURL: string | undefined;
            largeImageURL: string | undefined;
            id: number;
          }) => (
            <div className=" w-72 h-72" key={data.id}>
              <a href={data.pageURL} target="_blank" rel="noreferrer">
                <img
                  className="w-full h-full hover:cursor-pointer"
                  src={data.largeImageURL}
                  alt=""
                />
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};
