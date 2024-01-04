"use client";
import Image from 'next/image'; 
import me from "./images/me2.png";
import Header from "@/components/Header";
import Link from "next/link";
import {TbBrandCSharp, TbBrandNextjs, TbBrandPhp, TbBrandHtml5, TbBrandCss3, TbBrandTailwind , TbBrandFigma} from "react-icons/tb";
import {SiJavascript, SiAsana} from "react-icons/si";
import { FaJava, FaBootstrap, FaConfluence, FaJira } from "react-icons/fa6";



import {
  SiAdobe,
  SiEbay,
  SiHashnode,
  SiHonda,
  SiLoom,
  SiMeta,
  SiTailwindcss,
  SiThewashingtonpost,
  SiUnderarmour,
  SiZapier,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
    <div className="up absolute z-10 lg:-top-48 md:-top-24 -top-10" />
    <div className="w-full h-full  max-w-5xl mx-auto relative z-20 ">
      <Header />
      <div className="mt-40 px-2 flex items-center justify-center">
          <Image
          className='me-container'
           alt="Koray Vatan"
          src={me}
          />
        </div>
      <div className="mt-10 px-5">
     
        <h1 className="text-6xl text-center font-InterMedium  text-white bg-gradient-to-r from-[#e0dfdf]  to-black  text-transparent bg-clip-text capitalize">
          Computer Engineering Student who is an{" "}
          <span className=" font-bold tracking-tighter  bg-gradient-to-r from-[#fffb13] to-yellow-500 text-transparent bg-clip-text text-6xl font-InterBold">
            Entrepreneur{" "}
          </span>
        </h1>
        <p className="text-neutral-400 max-w-[41rem] mx-auto mt-4  font-InterRegular text-center">
          Koray Vatan,
          <br/> Business oriented Full-Stack Developer,  
         and has knowledge with UI&UX. <br/>
         Failed a start-up before and developing another one in these days..
        </p>

        <div className="flex justify-center mt-11">
          <div>
            {
              <Link href="/posts">
                <button
                  className="px-4 bg-transparent
                  border-neutral-800 border  font-InterRegular
                rounded-full h-8
                text-xl text-neutral-400
                dark:border-slate-600"
                >
                  Hire me!
                </button>
              </Link>
            }
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex justify-center gap-x-8 mt-10">
          <SiJavascript className="text-neutral-400 text-4xl" />
          <FaJava className="text-neutral-400 text-4xl" />
          <TbBrandCSharp  className="text-neutral-400 text-4xl" />
          <TbBrandPhp  className="text-neutral-400 text-4xl" />
          <TbBrandNextjs className="text-neutral-400 text-4xl" />
          <GrReactjs className="text-neutral-400 text-4xl" />
          <TbBrandHtml5  className="text-neutral-400 text-4xl" />
          <TbBrandCss3  className="text-neutral-400 text-4xl" />
          <FaBootstrap  className="text-neutral-400 text-4xl" />
          <TbBrandTailwind  className="text-neutral-400 text-4xl" />
          <TbBrandFigma className="text-neutral-400 text-4xl" />
          <FaJira  className="text-neutral-400 text-4xl" />
          <SiAsana className="text-neutral-400 text-4xl" />
          <FaConfluence  className="text-neutral-400 text-4xl" />
          

        </div>
      </div>

      <div className="mt-20">
        <h1 className="font-InterRegular uppercase tracking-tighter  bg-gradient-to-b from-[#e0dfdf]  to-black  text-transparent bg-clip-text text-center  ">
          Trusted by the best front end teams
        </h1>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center mt-5 gap-y-10">
        <div className="flex gap-x-20">
          <SiAdobe className="text-neutral-400 text-xl" />
          <SiUnderarmour className="text-neutral-400 text-xl" />
          <SiEbay className="text-neutral-400 text-xl" />
          <SiZapier className="text-neutral-400 text-xl" />
          <SiLoom className="text-neutral-400 text-xl" />
        </div>
        <div className="flex gap-x-20">
          <SiHashnode className="text-neutral-400 text-xl" />
          <SiTailwindcss className="text-neutral-400 text-xl" />
          <SiThewashingtonpost className="text-neutral-400 text-xl" />
          <SiHonda className="text-neutral-400 text-xl" />
          <SiMeta className="text-neutral-400 text-xl" />
        </div>
      </div>

      {/* <Link href="/posts">
        <div className="py-2 px-8 mt-14 text-lg w-fit transition-colors duration-200 text-white bg-slate-800 border rounded-full shadow-md border-[#D1D5DA] hover:bg-slate-700 flex items-center">
          Go to Blogs <BsArrowRightShort className="text-3xl ml-1" />
        </div>
      </Link> */}
      {/* <Footer /> */}
    </div>
  </main>
  );
}
