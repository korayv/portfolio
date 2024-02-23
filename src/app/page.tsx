"use client";
import Image from "next/image";
import me from "./images/me2.png";
import btk from "./images/btk.jpeg";
import mecoffee from "./images/mecoffee.jpg";
import Header from "@/components/Header";
import Link from "next/link";
import ExperiencePage from './experiencePage';
import Projects from './projects';
import Contact from './contact';
import Photo from './photoShow';

import Footer from "@/components/Footer";
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
import {
  TbBrandCSharp,
  TbBrandNextjs,
  TbBrandPhp,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandFigma,
} from "react-icons/tb";
import { SiJavascript, SiAsana } from "react-icons/si";
import { FaJava, FaBootstrap, FaConfluence, FaJira } from "react-icons/fa6";


export default function Home() {
  return (
    <main>
      <div className="up absolute z-10 lg:-top-48 md:-top-24 -top-10" />
      <div className="w-full h-full  max-w-5xl mx-auto relative z-20 ">
        <Header />

        <div className="mt-40 px-5">
          <h1 className="text-l text-center font-InterMedium  text-white bg-gradient-to-r from-[#e0dfdf]  to-black  text-transparent bg-clip-text ">
            Hello, My name is <br />{" "}
            <span className="mt-5 font-bold tracking-tighter  bg-gradient-to-r from-[#fffb13] to-yellow-500 text-transparent bg-clip-text text-6xl font-InterBold">
              Koray Vatan{" "}
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-[81rem] mx-auto mt-10 font-InterRegular text-center">
            Nice to meet you! You better know me:
            <br /> Business oriented Full-Stack Developer, and has knowledge
            with UI&UX. <br />
            Failed a start-up before and developing another one in these days..
          </p>

          <div className="flex justify-center mt-11">
            <div>
              {
                <Link href="/hire">
                  <button className="py-2 px-8 text-lg w-fit transition-colors duration-200 text-white bg-slate-800 border rounded-full shadow-md border-[#D1D5DA] hover:bg-slate-700 flex items-center">
                    Hire me!
                  </button>
                </Link>
              }
            </div>
          </div>
          {/*About me */}
          <h2
            className={
              "mt-80 text-yellow-500 text-center text-2xl font-semibold"
            }
          >
            About me
          </h2>

          <div className="grid grid-cols-12 px-2 ">
            <div className="col-span-5 text-white text-center">
              <p className={"mt-10 text-s font-medium"}>
                Hey there! I`m Koray Vatan, a junior software engineer with a
                keen interest in solving everyday problems. With over 3 years in
                the software world, I`ve taken the responsibility of three
                mobile applications, numerous websites, and aced pitches that
                would make even the most seasoned entrepreneurs nod in approval.
                I`m a soft-skilled developer who dances through the digital
                landscape using Agile Methodologies. My track record is a
                symphony of successes in leadership and competence development
                projects. I`ve donned multiple hats in start-ups, participating
                into a UI&UX design team during my internship in Belgium.
              </p>
              <div className={"text-s italic"}>
                <ul>
                  I am
                  <li>
                    A communication-first multitasking wizard with a knack for
                    detail.
                  </li>
                  <li>
                    I thrive on handling the development of large and complex
                    projects with unmatched diligence.
                  </li>
                  <li>
                    Armed with negotiation skills that can turn the tide in
                    project management.
                  </li>
                  <li>
                    Fluent in the languages of both Agile and Waterfall project
                    management approaches.
                  </li>
                </ul>
              </div>
              <br />
              <p className={"text-center text-s font-medium text-white"}>
                But hey, I`m not all about codes and pixels. You also hear me
                while talking snooker [watched live Judd Trump`s 147], sculpting
                busts, and getting lost in the world of car designs. With a mind
                that thrives on creativity, a passion for quality, and a dash of
                tactful and diplomatic flair. Let`s create something
                extraordinary together! 💻🚀
              </p>
            </div>
            <div className="mt-10 col-span-7 align-center ml-10">
              <Image className="me-btk" alt="Koray Vatan" src={btk} />
            </div>
          </div>
          <h2
            className={
              "mt-40 mb-3 text-center text-2xl font-semibold text-yellow-500"
            }
          >
            The languages and tools I use:
          </h2>

          <div className="mt-10 max-w-4xl mx-auto flex justify-center gap-x-8">
            <SiJavascript className="text-neutral-400 text-4xl" />
            <FaJava className="text-neutral-400 text-4xl" />
            <TbBrandCSharp className="text-neutral-400 text-4xl" />
            <TbBrandPhp className="text-neutral-400 text-4xl" />
            <TbBrandNextjs className="text-neutral-400 text-4xl" />
            <GrReactjs className="text-neutral-400 text-4xl" />
            <TbBrandHtml5 className="text-neutral-400 text-4xl" />
            <TbBrandCss3 className="text-neutral-400 text-4xl" />
            <FaBootstrap className="text-neutral-400 text-4xl" />
            <TbBrandTailwind className="text-neutral-400 text-4xl" />
            <TbBrandFigma className="text-neutral-400 text-4xl" />
            <FaJira className="text-neutral-400 text-4xl" />
            <SiAsana className="text-neutral-400 text-4xl" />
            <FaConfluence className="text-neutral-400 text-4xl" />
          </div>
        </div>

        {/*Where I worked section*/}

        <ExperiencePage />
      


        {/*The linking to my projects I have done so far*/}
          <Projects />


        {/*Photo show*/}
          <Photo />
        {/*Contact*/}
          <Contact />
      </div>
    </main>
  );
}
