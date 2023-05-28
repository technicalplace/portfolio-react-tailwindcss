import React from "react"

export const Link = () => {
    const ITEMS = [
    {
      id: 0,
      href: '',
      title: 'Application',
      description: 'Here is a list of applications I have created so far',
    },
    {
      id: 1,
      href: '',
      title: 'Career',
      description: 'This is my previous career history',
    },
    {
      id: 2,
      href: '',
      title: 'SNS',
      description: "If you don't mind, please take a look at the various SNS I have listed",
    },
    {
      id: 3,
      href: '',
      title: 'Self-study',
      description: 'I am writing about the things I consciously focus on when I study',
    }
  ]

  return (
    <>
      <div className="max-w-5xl h-auto mx-auto mt-9 grid grid-cols-2 grid-rows-2 gap-7 justify-around">
        {ITEMS.map((item) => {
          const { id, title, href, description } = item;
          return(
            <a key={id} href={href} className='px-20 py-8 mx-3 text-emerald-500 text-center border-8 border-double border-teal-500 rounded-xl hover:scale-110 duration-1000'>
              <h1 className="text-2xl font-bold text-green-300">{title}&nbsp;→</h1>
              <p className="w-full mt-2">{description}</p>
            </a>
          )
        })}
      </div>
    </>
  )
}