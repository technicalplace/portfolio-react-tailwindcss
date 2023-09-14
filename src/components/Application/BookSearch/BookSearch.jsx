import React, { useEffect, useState } from 'react'
import { getAllBook } from './utils';
import { BookCard } from './BookCard';

export const BookSearch = () => {
  const [ inputVal, setInputVal ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ bookData, setBookData ] = useState([]);
  const [ nextURL, setNextURL ] = useState("");
  const [ prevURL, setPrevNextURL ] = useState("");
  const initialURL = `https://www.googleapis.com/books/v1/volumes?q=${inputVal}`;

  useEffect(() => {
    const fetchBookData = async () => {
      // すべての本のデータを取得
      let allBookData = await getAllBook(initialURL);
      console.log(allBookData);
      // 各本の詳細なデータを取得
      getDetailBookData(allBookData);
    }
    fetchBookData();
  }, [initialURL]);

  const getDetailBookData = async (data) => {
    console.log(data);
    let bookData = data.items;
    // let _bookData = await Promise.all(
    //   bookData.map((book) => {
    //     let bookRecord = getDetailBookData(book);
    //     return bookRecord;
    //   })
    // )
    // setBookData(_bookData);
  }

  const handlePrevPage = async () => {

  }
  const handleNextPage = async () => {

  }

  return (
    <div className='h-full text-center pb-24'>
      <h1 className='text-xl mb-12'>Book検索</h1>
      <input 
        onChange={(e) => setInputVal(e.target.value)} 
        type="text" 
        className='mr-7'
      />
      <button >検索</button>
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <>
          <div>
            {bookData.map((book) => {
              return (
                <BookCard book={book} key={book.id}/>
              )
            })}
          </div>
        </>
      )}
      <div className='mx-auto flex justify-center items-center gap-8 mt-12 pb-9'>
        <button onClick={handlePrevPage} className='px-8 py-4 bg-teal-500 rounded-lg text-white cursor-pointer hover:'>前へ</button>
        <button onClick={handleNextPage} className='px-8 py-4 bg-teal-500 rounded-lg text-white cursor-pointer hover:'>次へ</button>
      </div>
    </div>
  )
}
