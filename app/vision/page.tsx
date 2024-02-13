import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import heroImg from '../img/hero-img.jpg'
import { Metadata } from 'next'
import Header from '../../components/header'

import Layout from '../layout'

export const metadata: Metadata = {
    title: "Clould Collective Residency | Vision",
    description: "Generated by create next app",
  };
  

export default function Vision() {

  return (
    <>
    <Header/>
    <div className="w-cover bg-btn-firetower flex flex-col items-center h-64">
        <div className="py-20 items-center text-6xl flex flex-row text-white">
            <div>Vision</div>
        </div>
    </div>

    <div className="flex flex-col items-center">
        <div className="mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 items-center">

            
              



            </div>
        </div>
    </>
  )
}
