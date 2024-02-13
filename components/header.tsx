import React from "react";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'
import logo from '../img/brb-logo.svg'
import { motion, useViewportScroll, AnimatePresence, useCycle } from "framer-motion";

const Header = () => {
  
  return (
    
    <div className="flex items-center justify-between px-8 py-8">
      <div className="lg:text-3xl hidden lg:block font-amatic-sc -mt-1">
          <Link href="/">Cloud Collective Residency</Link>
      </div>
      <nav>
        <section className="MOBILE-MENU flex hidden">
                <div className="space-y-2 px-2 hamburger open block">
                    <span className="animate-pulse hamburger-top"></span>
                    <span className="animate-pulse hamburger-middle"></span>
                    <span className="animate-pulse hamburger-bottom"></span>
                </div>
                <div className="bg-logoLightBlue h-screen -mx-4 max-w-[200px]">
                <ul className="flex flex-col items-right justify-between min-h-[300px] px-2">
                    <li className="border-b border-gray-400 my-2 uppercase hover:animate-pulse">
                        <Link href="/waterfalls">Waterfalls</Link>
                    </li>
                    <li className="border-b border-gray-400 my-2 uppercase hover:animate-pulse">
                        <Link href="/views">Epic Views</Link>
                     </li>
                    <li className="border-b border-gray-400 my-2 uppercase hover:animate-pulse">
                        <Link href="/towers">Firetowers</Link>
                    </li>
                    <li className="border-b border-gray-400 my-2 uppercase hover:animate-pulse">
                        <Link href="/ultras">Multi-Day/Ultras</Link>
                    </li>
                    <li className="border-b border-gray-400 my-2 uppercase hover:animate-pulse">
                        <Link href="#">Find Us</Link>
                    </li>
                </ul>
                </div>
        </section>

        <ul className="DESKTOP-MENU hidden uppercase space-x-8 xl:flex lg:text-md">
          <li className="p-2 hover:border-b">
            <Link href="/vision">Vision</Link>
          </li>
          <li className="p-2 hover:border-b">
            <Link href="/your-work">Your Work</Link>
          </li>
          <li className="p-2 hover:border-b">
            <Link href="/our-work">Our Work</Link>
          </li>
          <li className="p-2 hover:border-b">
            <Link href="/location">Location</Link>
          </li>
          <li className="p-2 hover:border-b">
            <Link href="/your-stay">Your Stay</Link>
          </li>
          <li className="p-2 hover:border-b">
            <Link href="/cost">Cost</Link>
          </li>
          <li className="p-2 hover:border-b">
            <Link href="/apply">Apply</Link>
          </li>

        </ul>
        
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 18vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>

  );
}



export default Header


