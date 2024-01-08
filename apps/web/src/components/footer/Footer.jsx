import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[497px] relative">
      <div className="w-full h-full left-0 top-0 absolute bg-black">
        <div className="w-full mx-auto h-[210px] left-6 right-6 top-[54px] absolute text-white text-2xl font-['KoHo']">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="mb-4">Support & Community</div>
              <div className="mb-4 text-sm">Contact Us</div>
              <div className="mb-4 text-sm">WhatsApp</div>
              <div className="mb-4 text-sm">Facebook</div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">Company</div>
              <div className="mb-4 text-sm">Why Us</div>
              <div className="mb-4 text-sm">Careers</div>
              <div className="mb-4 text-sm">Resources</div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">Quick Links</div>
              <div className="mb-4 text-sm">Home</div>
              <div className="mb-4 text-sm">Courses</div>
              <div className="mb-4 text-sm">Login</div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">Newsletter</div>
              <div className="mb-4 relative">
                <div className="w-[319px] h-12 bg-yellow-400 rounded-md" />
                <div className="w-[221px] h-[30px] text-black text-xl font-medium font-['KoHo']">
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full h-[33px] text-black text-xl font-medium font-['KoHo'] border-2 border-yellow-400 rounded-md px-2 absolute left-0 top-0"
                  />
                </div>
              </div>

              <div className="mb-4">
                <button className="w-[118px] h-12 bg-sky-950 rounded-md text-yellow-400 text-lg font-medium font-['KoHo']">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[62rem] mx-auto h-[0px] left-[125px] top-[323px] absolute border-2 border-yellow-400"></div>
        <div className="w-[107.92px] mx-auto h-[32.99px] left-[125px] top-[355px] absolute flex-col justify-start items-start flex" />
        <div className="mx-auto left-[252px] top-[362px] absolute text-white text-lg font-semibold font-['KoHo']">
          Copyright © 2024. All rights reserved
        </div>
      </div>
    </div>
  );
}
