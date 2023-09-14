import React from 'react'

export const BookCard = ({ book }) => {
  console.log(book);
  return (
    <>
      <div>{book}</div>
      <div>
        <img src={book} alt="" />
      </div>
    </>
  )
}