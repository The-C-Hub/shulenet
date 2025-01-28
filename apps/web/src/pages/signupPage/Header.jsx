import React from 'react'

export default function Header() {
  return (
    <div>
       <div className="container mx-auto h-28 flex justify-between items-center bg-black text-white">
            <div className="relative flex items-center">
                
                <div className="text-xl font-bold font-['KoHo'] ml-6">Shulenet</div>
            </div>
            <div className="relative flex items-center">
                <div className="text-sm font-bold font-['KoHo'] ml-3 mr-7">Courses</div>
                <div className="text-sm font-bold font-['KoHo'] ml-9">Why Us</div>
            </div>
            <div className="relative flex items-center">
                <div className="text-sm font-bold font-['KoHo'] ml-6 mr-8">Become an Instructor</div>
            <div className="w-28 h-10 relative mr-8">
                    <div className="w-28 h-12 absolute bg-white rounded-lg" />
                    <div className="absolute left-7 top-4 text-blue-950 text-sm font-semibold font-['KoHo']">Sign In</div>
                </div>
                <div className="w-28 h-10 relative mr-5">
                    <div className="w-28 h-12 absolute bg-blue-950 rounded-lg" />
                    <div className="absolute left-6 top-4 text-white text-sm font-semibold font-['KoHo']">Sign Up</div>
                </div>
                
            </div>
        </div>

    </div>
  )
}
