"use client";
import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { SparklesCore } from "@/components/ui/sparkles";
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/ui/navbar-menu';
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { cn } from "@/lib/utils";


export default function Page() {
  return (
    <main>
      <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>

      <div className="h-[40rem] relative w-full bg-black flex col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.4}
          maxSize={2.6}
          particleDensity={50}
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

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-covl space-y-4 text-sm">
            <HoveredLink href="/serv/d">Discord Bot</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Wooki"
              href="https://github.com/TRaya1n/TRaya1n/tree/main/nextjs"
              src="https://cdn.discordapp.com/attachments/713496989555490886/1212574194835922954/a83a2f4d5f1860b404371394b87b75c7.jpg?ex=65f254b8&is=65dfdfb8&hm=c02dfd96012cda7bb80e9d706b5cd15ddd26dd1b03f639738586b984c34a0d4f&"
              description="Wookie is a general purpose Discord Bot."
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}