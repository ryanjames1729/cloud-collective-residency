import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Header />
    <div className="object-cover">
      
    </div>
    {/* FEATURED POSTS */}
    <div className="flex flex-col items-center" id="featured">
      <h1 className="py-2 text-5xl">Featured Routes</h1>
        <div className="mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 items-center">

            
            </div>
        </div>
    {/* PICTURED BUTTONS */}
    <section>
      <div className="max-w-6xl px-2 mx-auto m-6 py-4 text-2xl lg:text-4xl">
        <div className= "flex flex-col md:flex-row md:space-x-20 space-y-5 md:space-y-0">
          
          <Link href="/waterfalls">
            <div className="bg-btn-waterfall bg-cover text-shadow flex flex-col items-center p-3 rounded-lg lg:w-full md:w-1/3 h-20 cursor-pointer ">
              <div className="py-2 text-white hover:underline">Waterfalls</div>
            </div>
          </Link>

          <Link href="/views">
            <div className="bg-btn-views bg-cover flex flex-col items-center p-3 rounded-lg lg:w-full md:w-1/3 h-13 cursor-pointer">
            <div className="py-2 text-white hover:underline">Epic Views</div>
            </div>
          </Link>

          <Link href="/towers">
            <div className="bg-btn-firetower bg-cover flex flex-col items-center p-3 rounded-lg lg:w-full md:w-1/3 h-13 cursor-pointer">
            <div className="py-2 text-white hover:underline">Firetowers</div>
            </div>
          </Link>

          <Link href="/ultras">
            <div className="bg-btn-ultras bg-cover flex flex-col items-center p-3 rounded-lg lg:w-full md:w-1/3 h-13cursor-pointer">
            <div className="py-2 text-white hover:underline">Multi-Day</div>
            </div>
          </Link>

        </div>
      </div>
    </section>




    <Footer />
    
    </>
    
    
  );
}
