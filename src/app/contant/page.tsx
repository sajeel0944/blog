"use client";

import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Information from "@/components/Information";
import MainImg from "@/components/MainImg";

function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("Form submitted!");
  };

  let [sub, setsub] = useState<boolean>(false);
  console.log(sub);

  useEffect(() => {
    if (sub == true) {
      alert("From has been submitted");
    }
  }, [sub]);
  return (
    <>
      <Navbar />
      <MainImg />

      <div className="h-auto  w-full py-20 border- my-5 space-y-20">
        {/* frist part */}
        <div className="border-  h-[790px] sm:h-[680px] md:h-96 lg:px-20 px-5   w-full text-white md:flex md:justify-between">
          <div className="border- h-96 md:w-[48%] w-full">
            <Image
              src={"/picture/contant.png"}
              alt={""}
              width={1500}
              height={1000}
              className="w-full h-96 rounded-xl"
            />
          </div>
          <div className="border- md:h-96 sm:h-72 h-[390px] md:w-[48%] w-full flex items-center sm:px-16 md:px-0">
            <p className="text-justify text-lg font-bold text-[#97989F]">
              Here, you find all the articles, stories, and resources
              organized for easy access. Explore diverse topics, from insightful
              guides to creative narratives, all designed to inform and inspire.
              Navigate through categories, discover new perspectives, and dive
              into content curated just for you. Start exploring and enjoy your
              reading journey!
            </p>
          </div>
        </div>

        {/* second part */}
        <div className="min-h-screen flex items-center justify-center px-4 text-white">
          <div className=" shadow-lg rounded-lg p-8 max-w-5xl w-full bg-[#2e3044]">
            {/* Header Section */}
            <h1 className="text-3xl  font-bold text-center mb-2">Contant Us</h1>
            <p className="text-center text-[#97989F] mb-8 text-sm">
              Heyo! We are located in Washington and Texas. Feel free to use the
              contact form to the right to reach out to us, or write us the old
              fashion
            </p>
            <div className="md:flex md:justify-around">
              {/* Information Section */}
              <div className="grid grid-cols-1  gap-6 mb-8 md:w-[22%]">
                <div>
                  <Image
                    src={"/picture/location.png"}
                    alt={"location"}
                    width={20}
                    height={20}
                    className="absolute"
                  />
                  <div className="text-lg font-semibold pl-6">SNAIL MAIL</div>
                  <p className="text-[#97989F] text-sm pl-6">
                    Beardbrand PO Box 13124 Austin, TX 78711
                  </p>
                </div>
                <div>
                  <Image
                    src={"/picture/bxs_phone.png"}
                    alt={"phone"}
                    width={20}
                    height={20}
                    className="absolute"
                  />
                  <div className="text-lg font-semibold pl-6">Email Mail</div>
                  <p className="text-[#97989F] text-sm pl-6">
                    support@beardbrand.com
                  </p>
                </div>
                <div>
                  <Image
                    src={"/picture/bi_clock-fill.png"}
                    alt={"clock"}
                    width={20}
                    height={20}
                    className="absolute"
                  />
                  <div className="text-lg font-semibold pl-6">
                    PHONE SUPPORT
                  </div>
                  <p className="text-[#97989F] text-sm pl-6">
                    Hours: 9am-5pm (CST), Monday - Friday 844-662-3273
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="space-y-6  md:w-[50%]">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#97989F]"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Abc"
                    className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#97989F]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Abc@def.com"
                    className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#97989F]"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="This is an optional"
                    className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#97989F] "
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Hi! I'd like to ask about"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-">
                  <button
                    type="submit"
                    className="w-[40%] text-white font-semibold py-2 rounded-md transition bg-[#4B6BFB] cursor-pointer hover:bg-[#0935FD]"
                    onClick={() => {
                      setsub(!sub);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* thrid part */}
        <div className="border-">
          <div className="border-  h-[700px] sm:h-[620px] md:h-96 lg:px-20 px-5   w-full text-white md:flex md:justify-between">
            <div className="border- md:h-96 sm:h-56 h-[290px] md:w-[48%] w-full flex items-center sm:px-16 md:px-0">
              <p className="text-justify text-lg font-bold text-[#97989F]">
                Explore the heart of our blog on the Content Page! From
                informative articles to engaging stories, everything is neatly
                organized for your convenience. Discover diverse topics and find
                the inspiration youre looking for in just a few clicks.
              </p>
            </div>
            <div className="border- h-96 md:w-[48%] w-full">
              <Image
                src={"/picture/contant1.png"}
                alt={""}
                width={1500}
                height={1000}
                className="w-full h-96 rounded-xl"
              />
            </div>
          </div>
        </div>
        <Information facebook="https://www.facebook.com/people/Sajeel-Khan/pfbid0JLYdnnw4M8naVU5UbXacUZST253YLbgdUxur4SW6w1QXM7AZ1EJhNbDGAC6Yv9g3l/" twitter="https://en.wikipedia.org/wiki/Twitter" instagram="https://www.instagram.com/sajeelullahkhan/" youtube="https://www.youtube.com/@PIAIC" img="/picture/personal.png" name="	Michael Kyle"/>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
