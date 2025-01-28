import React from 'react';

const InputField = ({ label, top }) => {
    return (
        <div className={`w-1/2 h-[50px] left-0 top-[${top}] absolute`}>
            <div className="w-2/3 h-[50px] left-0 top-0 absolute bg-white rounded-[5px] border border-sky-950" />
            <div className="left-[15px] top-[14px] absolute text-black text-[1rem] font-light font-['KoHo'] tracking-widest">{label}</div>
        </div>
    );
};

export default InputField;
