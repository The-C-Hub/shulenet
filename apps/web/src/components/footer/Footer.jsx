import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[400px] relative">
      <div className="w-full h-full left-0 top-0 absolute bg-black">
        <div className="w-full mx-auto h-[210px] left-6 right-6 top-[54px] absolute text-white text-2xl font-['KoHo'] ml-5">
          <div className="flex ">
            <div className="flex-auto">
              <div className="mb-4">Support & Community</div>
              <div className="mb-4 text-sm">Contact Us</div>
              <div className="mb-4 text-sm">WhatsApp</div>
              <div className="mb-4 text-sm">Facebook</div>
            </div>
            <div className="flex-auto">
              <div className="mb-4">Company</div>
              <div className="mb-4 text-sm">Why Us</div>
              <div className="mb-4 text-sm">Careers</div>
              <div className="mb-4 text-sm">Resources</div>
            </div>
            <div className="flex-auto">
              <div className="mb-4">Quick Links</div>
              <div className="mb-4 text-sm">Home</div>
              <div className="mb-4 text-sm">Courses</div>
              <div className="mb-4 text-sm">Login</div>
            </div>
            <div className="flex-auto">
              <div className="mb-4">Newsletter</div>
              <div className="mb-4 text-sm">Sign up to join our mailing list</div>
              <div className="w-2/3 h-10 bg-white rounded-md flex items-center justify-center mb-5">
                <div className="w-2/3 h-[30px] text-black text-base font-medium font-['KoHo'] ">email@example.com</div>
              </div>
              <button className="w-1/3 h-10 bg-blue-950 rounded-md flex items-center justify-center">
                <div className="text-white text-base font-semibold font-['KoHo']">Submit</div>
              </button>
            </div>
          </div>
        </div>

        <div className="w-5/6 mx-auto h-[0px] top-[323px] absolute border-2 border-yellow-400 left-1/2 transform -translate-x-1/2"></div>
          <div className="w-[107.92px] mx-auto h-[32.99px] left-[125px] top-[355px] absolute flex-col justify-start items-start flex" />
          <div className="mx-auto left-1/2 absolute text-white text-base font-semibold font-['KoHo'] transform -translate-x-1/2 top-[370px]">
            Copyright © 2024. All rights reserved
          </div>
     </div>
    </div>
  );
}
