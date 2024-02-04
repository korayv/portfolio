"use client";
import Image from "next/image";
import me from "./images/me2.png";
import btk from "./images/btk.jpeg";
import mecoffee from "./images/mecoffee.jpg";
import Header from "@/components/Header";
import Link from "next/link";

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
                Hey there! I'm Koray Vatan, a junior software engineer with a
                keen interest in solving everyday problems. With over 3 years in
                the software world, I've taken the responsibility of three
                mobile applications, numerous websites, and aced pitches that
                would make even the most seasoned entrepreneurs nod in approval.
                I'm a soft-skilled developer who dances through the digital
                landscape using Agile Methodologies. My track record is a
                symphony of successes in leadership and competence development
                projects. I've donned multiple hats in start-ups, participating
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
                But hey, I'm not all about codes and pixels. You also hear me
                while talking snooker [watched live Judd Trump's 147], sculpting
                busts, and getting lost in the world of car designs. With a mind
                that thrives on creativity, a passion for quality, and a dash of
                tactful and diplomatic flair. Let's create something
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
        <div className="grid grid-col-5">
          <div className="col-span-1  text-white">
            <div mt-5 text-left>
              <h2
                className={
                  "mt-20 mb-3 text-center text-2xl font-semibold text-yellow-500"
                }
              >
                Where I worked
              </h2>
              <div className="mt-5 mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left text-white">
                <a
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className={"mb-3 text-2xl font-semibold text-white"}>
                    Medicurism{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p
                    className={"m-0 max-w-[30ch] text-sm opacity-50 text-white"}
                  >
                    A medical treatment start-up that built for health tourism
                    in Turkiye.
                  </p>
                </a>
                <a
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className={"mb-3 text-2xl font-semibold text-white"}>
                    Netsim Software Inc.{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p
                    className={"m-0 max-w-[30ch] text-sm opacity-50 text-white"}
                  >
                    Curious people's dating application
                  </p>
                </a>
                <a
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className={"mb-3 text-2xl font-semibold text-white"}>
                    Raspberrify{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p
                    className={"m-0 max-w-[30ch] text-sm opacity-50 text-white"}
                  >
                    A startup-driven web development company, catering to
                    startups through freelance projects.
                  </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-4 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis qui odit reiciendis mollitia voluptatum illo repudiandae dolorem doloribus ducimus veritatis esse, similique natus. Provident dolores fuga officiis, fugit autem numquam consequuntur amet voluptate quisquam unde, possimus modi dolorem id voluptatum earum laborum quam odio nam sint vero accusantium ut voluptatem magni! A soluta nemo culpa asperiores. Tempore nesciunt eaque fugiat aperiam excepturi consequuntur culpa non architecto veniam velit nisi est earum magnam at, ipsam iusto. Ab recusandae soluta autem rerum error enim nam voluptatem voluptatibus quis cumque voluptatum pariatur atque minus est dolor exercitationem ratione, incidunt qui reprehenderit fugit officia!</div>
          </div>
          {/*The linking to my projects I have done so far*/}
          <h2
            className={
              "mt-20 mb-3 text-center text-2xl font-semibold text-white"
            }
          >
            Start-ups:
          </h2>
          <div className="mt-5 mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left text-white">
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={"mb-3 text-2xl font-semibold text-white"}>
                Medicurism{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={"m-0 max-w-[30ch] text-sm opacity-50 text-white"}>
                A medical treatment website and app built for health tourism in
                Turkiye.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={"mb-3 text-2xl font-semibold text-white"}>
                Kario{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={"m-0 max-w-[30ch] text-sm opacity-50 text-white"}>
                Curious people's dating application
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={"mb-3 text-2xl font-semibold text-white"}>
                Raspberrify{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={"m-0 max-w-[30ch] text-sm opacity-50 text-white"}>
                A startup-driven web development company, catering to startups
                through freelance projects.
              </p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={"mb-3 text-2xl font-semibold"}>
                Factory Fuse{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={"m-0 max-w-[30ch] text-sm opacity-50"}>
                Time management gantt chart application runs in your browser.
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={"mb-3 text-2xl font-semibold"}>
                Grinder{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={"m-0 max-w-[30ch] text-sm opacity-50"}>
                Instantly manipulate your photos with our mobile-app.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={"mb-3 text-2xl font-semibold text-white"}>
                Go-App{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={"m-0 max-w-[30ch] text-sm opacity-50 text-white"}>
                Payment Gateway Solution for an extra-ordinary payment
                experience for remarkable moments.
              </p>
            </a>
          </div>

          <div className="mt-20">
            <h1 className="font-InterRegular uppercase tracking-tighter  bg-gradient-to-b from-[#e0dfdf]  to-black  text-transparent bg-clip-text text-center  ">
              Trusted by the best front end teams
            </h1>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col items-center mt-5 gap-y-10">
            <div className="flex gap-x-20">
              <Image
                className="me-coffee"
                alt="I am a coffee lover"
                src={mecoffee}
              />
              <h2 className="mb-3 text-2xl font-semibold text-white">
                I love coffee
              </h2>
            </div>
            <div className="flex gap-x-20"></div>
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
