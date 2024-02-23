// components/ContactWithMe.js
import React from 'react';

const ContactWithMe = () => {
  return (
        <div className="mt-40 px-5">
            <div className="text-l text-center font-InterMedium">  
                <div>
                    <span className="mt-5 font-bold tracking-tighter  bg-gradient-to-r from-[#fffb13] to-yellow-500 text-transparent bg-clip-text text-6xl font-InterBold">
                        Contact with me {" "}
                    </span>
                </div>
                <br />
                <p className="text-xl text-neutral-400 max-w-[81rem] mx-auto mt-2 font-InterRegular text-center">
                I am searching for internship. Web development and Product management are my interests. <br /> Please reach me via e-mail.
                 </p>

                <div className='flex justify-center mt-10'>
                    {
                        <button className="py-2 px-8 text-lg w-fit transition-colors duration-200 text-white bg-slate-800 border rounded-full shadow-md border-[#D1D5DA] hover:bg-slate-700 flex items-center">
                        Mail me!
                        </button>
                    }
                </div>
                <div className='mt-40'>

                </div>
            </div>
        </div>
  );
};

export default ContactWithMe;
