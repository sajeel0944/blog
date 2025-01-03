"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  let [dis, setdis] = useState<boolean>(false);
  // console.log(dis);

  return (
    <>
      <div className="w-full h-24  border-black bg-[#1a1a26] lg:px-24 text-white flex justify-between items-center px-2 sm:px-6">
        <div className="w-32 h-8  flex items-center justify-between">
          <Image src={"/picture/Union.png"} alt={""} width={28} height={28} />
          <h2 className="text-xl">
            SUK<b>Blog</b>{" "}
          </h2>
        </div>

        <div
          className={`border- w-[45%] h-8 flex justify-center items-center md:block  
            ${dis? "[@media(max-width:760px)]:block": "[@media(max-width:760px)]:hidden"} 
            [@media(max-width:760px)]:absolute [@media(max-width:760px)]:left-0 [@media(max-width:760px)]:top-24 [@media(max-width:760px)]:bg-[#242535] [@media(max-width:760px)]:w-full [@media(max-width:760px)]:h-full`}
        >
          <ul className="flex gap-8 [@media(max-width:760px)]:flex-col [@media(max-width:760px)]:text-center [@media(max-width:760px)]:pt-24 sm:justify-center">
            <Link href={"/"}><li className="hover:text-lg hover:font-semibold hover:underline cursor-pointer">Home</li></Link>
            <Link href={"/blog"}><li className="hover:text-lg hover:font-semibold hover:underline cursor-pointer">Blog</li></Link>
            <Link href={"/studio"}><li className="hover:text-lg hover:font-semibold hover:underline cursor-pointer">Create</li></Link>
            <Link href={"/about"}><li className="hover:text-lg hover:font-semibold hover:underline cursor-pointer">About</li></Link>
            <Link href={"/contant"}><li className="hover:text-lg hover:font-semibold hover:underline cursor-pointer">Contant</li></Link>
          </ul>
        </div>

        <div className="border- w-[20%] h-8 bg-whte flex [@media(max-width:760px)]:w-[40%]">
          <input
            type="search"
            name=""
            placeholder="Search"
            className="h-8 rounded pl-1 text-white bg-[#52525B] w-full"
          />
        </div>

        <div
          className="border-2 rounded cursor-pointer [@media(max-width:760px)]:block hidden"
          onClick={() => {
            setdis(!dis);
          }}
        >
          <Image
            src={"/picture/three-removebg-preview-removebg-preview.png"}
            alt={""}
            width={25}
            height={12}
            className="bg-black "
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
