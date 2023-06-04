import React from 'react'

export const Display = (props: {
  value: string;
}) => {
  return (
    <div className='w-40 mx-auto h-full'>{props.value}</div>
  )
}