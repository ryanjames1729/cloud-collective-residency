import React from "react";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'
import logo from '../img/brb-logo.svg'
import { motion, useViewportScroll, AnimatePresence, useCycle } from "framer-motion";

const Footer = () => {
  
  return (
    <>
    
    <footer className="bg-slate-200 text-slate-800 invisible h-0 lg:visible lg:h-auto">
      <div
        className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        
        <div
          className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div className="mx-auto my-6 text-center md:hidden">
            Copyright &copy; 2024, All Rights Reserved
          </div>
        
          <div>
            Cloud Collective Residency
          </div>
          
          <div className="flex justify-center space-x-4">
            <Link href="https://www.instagram.com">
                <Image src="/icon-instagram.svg" alt="" width={50} height={50} className="h-8 w-8" /><span>Find us on Instagram</span>
            </Link>
          </div>
        </div>
       
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 ">
            <a href="#" className="hover:text-brightRed">Vision</a>
            <a href="#" className="hover:text-brightRed">Your Work</a>
            <a href="#" className="hover:text-brightRed">Our Work</a>
            <a href="#" className="hover:text-brightRed">Location</a>
          </div>
          <div className="flex flex-col space-y-3 ">
            <a href="#" className="hover:text-brightRed">Your Stay</a>
            <a href="#" className="hover:text-brightRed">Cost</a>
            <a href="#" className="hover:text-brightRed">Apply</a>
          </div>
        </div>
        
        <div className="flex flex-col justify-between">
          <div className="hidden md:block">
            Copyright &copy; 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
    </> 
  );
}



export default Footer


