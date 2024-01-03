import React from 'react'

export default function Header() {
  return (
    <div className="w-[1512px] h-28 bg-black">
        <div className="w-[138.75px] h-[43.83px] relative flex-col justify-start items-start inline-flex" />
        <div className="w-14 h-[20.45px] text-white text-base font-bold font-['KoHo']">Courses</div>
        <div className="w-[55px] h-[20.45px] text-white text-base font-bold font-['KoHo']">Why Us</div>
        <div className="w-[153px] h-[20.45px] text-white text-base font-bold font-['KoHo']">Become an Instructor</div>
        <div className="w-[118px] h-12 bg-white rounded-lg border border-blue-700">
        <div className="w-[50px] h-[21px] text-sky-950 text-base font-semibold font-['KoHo']">Sign In</div>
        </div>
        <div className="w-[118px] h-12 bg-sky-950 rounded-lg">
        <div className="w-[57px] h-[21px] text-yellow-400 text-base font-semibold font-['KoHo']">Sign Up</div>
        </div>
        </div>
  )
}
