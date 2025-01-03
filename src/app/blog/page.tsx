import Footer from "@/components/Footer";
import Information from "@/components/Information";
import MainImg from "@/components/MainImg";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const Query=`*[_type == "blog"] `;
    const getApi=await client.fetch(Query);
  return (
    <>
      <Navbar />
      <MainImg />

      {/* friest part */}
      <div className="h-auto  w-full py-20 border- my-5 space-y-20">
       
        {/* second part */}
        <div className="space-y-8">
          <h4 className="lg:px-20 px-5 text-4xl font-bold text-white  border- ">
            BLOGS
          </h4>
          <div className="border- h-auto w-full lg:px-16 md:px-5 sm:px-4 px-5 flex flex-wrap justify-between items-center space-y-5">
            {/* main */}
            {getApi.map((blog:any,index:any)=>{
            return<>
             <div className=" rounded-xl shadow-2xl shadow-[rgb(26,26,38)] h-[465px] md:w-[32%] sm:w-[48%]  space-y-4 text-white ">
             <Link href={`${index}`}>
              <div className=" rounded-xl w-full h-[240px]">
                <Image
                  src={`${urlFor(blog.blogimage.asset._ref)}`}
                  alt={""}
                  width={1000}
                  height={1000}
                  className="h-[237px] w-full rounded-xl"
                />
              </div>

              <div className=" w-full h-[200px] lg:px-3 md:px-1 sm:px-3 px-3 space-y-7 ">
                <div className=" w-auto flex">
                  <span className="text-[#4B6BFB] font-extrabold text-sm rounded-lg flex justify-center items-center bg-[#434563] px-2">
                  {blog.categories}
                  </span>
                </div>
                <p className="lg:text-lg md:text-base sm:text-lg font-semibold text-lg">
                {blog.title}
                </p>

                <div className=" h-9 w-full flex justify-between items-center ">
                  <div className=" flex items-center justify-between lg:w-36 md:w-32 sm:w-40 w-36">
                    <div className=" h-9 w-9 rounded-full border-2"><Image src={`${urlFor(blog.poster.asset._ref)}`} alt={""} width={200} height={100} className="h-9 w-9 rounded-full"/></div>
                    <span className="text-[#97989F]">{blog.name}</span>
                  </div>
                  <span className="text-[#97989F]">{blog.Date}</span>
                </div>
              </div>
              </Link>
            </div>
            </>
          })}
          </div>
        </div>

        {/* four part */}

        <Information facebook="https://www.facebook.com/people/Sajeel-Khan/pfbid0JLYdnnw4M8naVU5UbXacUZST253YLbgdUxur4SW6w1QXM7AZ1EJhNbDGAC6Yv9g3l/" twitter="https://en.wikipedia.org/wiki/Twitter" instagram="https://www.instagram.com/sajeelullahkhan/" youtube="https://www.youtube.com/@PIAIC" img="/picture/personal.png" name="	Michael Kyle"/>
      </div>
      <Footer />
    </>
  );
}
