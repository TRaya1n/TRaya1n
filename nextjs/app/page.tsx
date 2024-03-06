"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { SparklesCore } from "@/components/ui/sparkles";
import { FloatingNav } from '@/components/ui/floating-navbar';
import { IconUser } from "@tabler/icons-react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { Meteors } from '@/components/ui/meteors'


export default function Page() {
  const items = [
    {
      name: 'Github',
      link: 'https://github.com/TRaya1n',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
    }
  ];

  return (
    <main>
    <div className="relative w-full">
      <FloatingNav navItems={items}/>
    </div>

    <div className="h-[40rem] relative w-full bg-black flex flex col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        <TypewriterEffectSmooth words={[
          { text: 'R' },
          { text: 'a' },
          { text: 'y' },
          { text: 'a' },
          { text: 'a' },
          { text: 'n' }
        ]}/>
      </h1>

      <div className="relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Meteors because they&apos;re cool
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>
 
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>

    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {content.map((item: any, index: number) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>

    </main>
  )
}

const content = [
  {
    title: 'Wookie.',
    description: 'Wookie is a Discord Bot made using Typescipt & DisocrdJS, A general purpose Discord Bot. The code is also open source, view it here: https://github.com/c/c/e'
  },
  {
    title: 'Jon',
    description: 'Jon is a Discord Bot made using Javascript & No Libraries, A multipurpose Discord Bot.'
  }, 
  {
    title: 'Disinvite',
    description: 'Disinvite is a Discord Guild advertiser (like disboard) made using Nextjs.'
  }
]