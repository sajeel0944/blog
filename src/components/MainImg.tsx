"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function MainImg() {
  // const Img=["/picture/Image (1).png","/picture/Image (2).png","/picture/Rectangle 9.png","/picture/Image.png"]

  type slider = {
    title: string;
    img: string;
    discribtion: string;
  };

  const manage: Record<number, slider> = [
    {
      title: "Discover Stories, Ideas, and Insights Daily",
      img: "/picture/Image (1).png",
      discribtion:
        "Explore engaging stories, creative ideas, and valuable insights updated daily to inspire and inform readers.",
    },
    {
      title: "Explore the World Through Words ",
      img: "/picture/Image (2).png",
      discribtion:
        "Delve into diverse topics, creative insights, and inspiring stories that broaden perspectives and spark curiosity.",
    },
    {
      title: "A Platform for Ideas, Stories, and Growth",
      img: "/picture/Rectangle 9.png",
      discribtion:
        "An engaging platform to share ideas, explore stories, and foster personal and community growth together.",
    },
    {
      title: "Explore and Share Ideas with the World",
      img: "/picture/Image.png",
      discribtion:
        "A platform to explore, create, and share innovative ideas, fostering creativity and global connections.",
    },
  ];

  let [change, setchange] = useState<number>(0);

  //   is sy value useeffect main ja rahe hai
  const incre = () => {
    setchange(change++);
    if (change === 4) {
      change = 0;
    }
  };

  //   is useeffect ky zayeya hum auto img waga ra change kar rahy hai
  useEffect(() => {
    const internal = setInterval(() => {
      incre();
    }, 3000);

    return () => clearInterval(internal);
  },[]);

  return (
    <>
      <div className=" border-black h-[500px] w-full">
        <Image
          src={manage[change].img}
          alt={""}
          width={1200}
          height={1200}
          className="h-[500px] w-full"
        />
      </div>

      <div className=" ml-4 -mt-60 sm:ml-11">
      <div className="  h-44 sm:w-96 w-[90%] rounded-lg  text-white space-y-5">
        <div className="w-[78px] h-[24px] rounded-lg bg-gray-400 flex items-center justify-center">
          <h4 className="font-bold text-xs text-white ">ADVENTURE</h4>
        </div>

        <p className="font-bold text-lg">{manage[change].title}</p>

        <div className="flex">
          <span className="text-sm text-[#E5E5E5]">27.12.2024 </span>
          <hr className=" border-[#E5E5E5] w-9 mt-2 mx-2" />
          <p className="text-xs text-[#E5E5E5]">{manage[change].discribtion}</p>
        </div>
      </div>

      {/* is par click kar img waga la chamge hogi */}
      <div className="  w-24 h-6 mt-6 flex items-center justify-around">
        <div
          className={`h-4 w-4 rounded-full cursor-pointer  border ${
            change == 0 ? "bg-white" : ""
          }`}
          onClick={() => {
            setchange((change = 0));
          }}
        ></div>
        <div
          className={`h-4 w-4 rounded-full cursor-pointer  border ${
            change == 1 ? "bg-white" : ""
          }`}
          onClick={() => {
            setchange((change = 1));
          }}
        ></div>
        <div
          className={`h-4 w-4 rounded-full cursor-pointer  border ${
            change == 2 ? "bg-white" : ""
          }`}
          onClick={() => {
            setchange((change = 2));
          }}
        ></div>
        <div
          className={`h-4 w-4 rounded-full cursor-pointer  border ${
            change == 3 ? "bg-white" : ""
          }`}
          onClick={() => {
            setchange((change = 3));
          }}
        ></div>
      </div>    </div>
    </>
  );
}

export default MainImg;
