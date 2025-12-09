import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <img className='invert h-5 lg:h-9' src="/assets/Picsart_25-11-09_19-57-31-938.png" alt="" />

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        {/* <p></p> */}
        <p>@ 2026 Personal Portfolio Made by -PJ</p>
      </div>
    </div>
  )
}
