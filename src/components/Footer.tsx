"use client"

import Image from "next/image";
import Link from "next/link";

function Footer() {
    const reload=(e: { preventDefault: () => void })=>{
        // const handleSubmit = (e: { preventDefault: () => void }) => {
            e.preventDefault();
            // console.log("Form submitted");
          // };
    }
  return (
    <>
      <div className="border-2 border-[#242535] w-full h-[500px] lg:px-24 bg-[#1a1a26] text-white md:px-6 px-2 [@media(max-width:767px)]:h-[1070px]">
        <div className=" w-full h-[250px] mt-12 [@media(max-width:767px)]:h-[1010px]">
          <div className="flex [@media(max-width:767px)]:flex-col [@media(max-width:767px)]:space-y-7">
            <div className=" md:w-[25%] h-[250px] md:space-y-6 [@media(max-width:767px)]:space-y-4 [@media(max-width:767px)]:h-[200px] [@media(max-width:767px)]:w-full ">
              <h3 className="font-semibold">About</h3>
              <p className="text-xs text-justify text-[#97989F]  md:h-28 h-[70px]">
                Our blog is dedicated to providing you with valuable and
                insightful content such as travel, technology, lifestyle,
                health, etc. Our mission is to offer tips, guides, and resources
                that will help enhance your life and keep you informed.
              </p>
              <div className=" h-[52px] w-full">
                <div className=" flex items-center">
                  <h5 className="font-semibold">Email : &nbsp; </h5>
                  <span className="text-[#97989F] lg:text-sm md:text-xs">
                    SUKBlog@gmailcom
                  </span>
                </div>
                <div className=" flex items-center">
                  <h5 className="font-semibold">Phone : &nbsp; </h5>
                  <span className="text-[#97989F] text-sm">03223377210</span>
                </div>
              </div>
            </div>

            <div className=" w-full md:w-[45%] h-[250px] flex justify-between lg:px-28 md:px-16">
              <div className=" w-[40%] h-[250px]">
                <h4 className="font-semibold mb-5">Quick Link</h4>
                <ul className="text-[#97989F] text-base space-y-2">
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                  <Link href={"/about"}>About</Link>
                  </li>
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                  <Link href={"/blog"}>Bolg</Link> 
                  </li>
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                    Archived
                  </li>
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                    Author
                  </li>
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                  <Link href={"/contant"}>Contant</Link>
                  </li>
                </ul>
              </div>
              <div className=" w-[40%] h-[250px]">
                <h4 className="font-semibold mb-5">Category</h4>
                <ul className="text-[#97989F] text-base space-y-2">
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                    Lifestyle
                  </li>
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                    Technology
                  </li>
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                    Travel
                  </li>
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                    Business
                  </li>
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                    Economy
                  </li>
                  <li className="cursor-pointer hover:text-lg hover:underline hover:font-medium">
                    Sports
                  </li>
                </ul>
              </div>
            </div>

            <div className=" w-full md:w-[30%] h-[250px] rounded-xl bg-[#2F3151] py-6 ">
              <h3 className="text-lg font-bold text-center">
                Weekly Newsletter
              </h3>
              <p className="text-[#97989F] text-center">
                Get blog articles and offers via email
              </p>
              <form onSubmit={reload} className=" h-[104px] space-y-3 mt-9 text-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#242535]  h-11 rounded w-[80%] pl-3 "
                />
                <input
                  type="submit"
                  className="bg-[#4B6BFB] h-11 w-[80%] cursor-pointer rounded hover:bg-[#0935FD]"
                />
              </form>
            </div>
          </div>

          <hr className="mt-16 border-[#97989F] mb-5" />

          <div className=" [@media(max-width:767px)]:flex-col md:flex h-36 md:h-28 w-full items-center ">
            <div className=" h-14 w-full md:w-[50%] flex">
              <div className=" h-14 w-14">
                <Image
                  src={"/picture/Union.png"}
                  alt={""}
                  width={50}
                  height={50}
                />
              </div>
              <div className=" h-14 w-[305px] ml-2">
                <h3 className="text-lg">
                  SUK<b>Blog</b>
                </h3>
                <p className="text-sm text-[#97989F] pt-1 ">
                  © Blog WebSite 2024. All Rights Reserved.
                </p>
              </div>
            </div>

            <div className=" md:w-[50%] h-14 [@media(max-width:767px)]:mt-8">
              <ul className="flex lg:gap-11 md:gap-6  text-[#97989F] items-end h-14 justify-center md:justify-end [@media(max-width:767px)]:gap-8 ">
                <li className="cursor-pointer">Terms of Use</li>
                <li className="cursor-pointer">Privacy Policy</li>
                <li className="cursor-pointer">Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
