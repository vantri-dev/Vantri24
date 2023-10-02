import React from 'react'
export default function Wrapper({children}) {
  return (
    <div className='w-full bg-white min-w-full rounded shadow-md max-h-full pb-[2px] pt-[2px] z-999'>
        {children}
    </div>
  )
}
