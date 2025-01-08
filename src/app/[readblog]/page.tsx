import Image from "next/image";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Information from "@/components/Information";
import Footer from "@/components/Footer";
import CommentSection from "@/components/Comment";
import SeeApiComment from "@/components/seeApiComment";

export const revalidate = 5; // is sy jab change kary gy to 10 second baat change hogi

async function ReadBolg({ params }: { params: { readblog: string } }) {

  // is main sanity sy bata fetch ho rah hai
  const Query = `*[_type == "blog"] `;
  const getApi = await client.fetch(Query);

  let paramiter = params.readblog;
  

  return (
    <>
      <Navbar />
      <div className="space-y-20 mb-28">
        <div className="border- h-auto w-full lg:px-48 md:px-32 sm:px-20 px-5">
          {/* ye blog ka main section hai */}

          <div className="border- h-auto w-full space-y-9 my-16 ">
            <div className=" w-auto h-7 flex items-center ">
              <span className="text-white font-extrabold text-sm rounded-lg  justify-center items-center bg-blue-800 h-7 flex px-2">
                {getApi[paramiter].categories}
              </span>
            </div>

            <p className="md:text-4xl sm:text-2xl text-xl text-white font-semibold ">
              {getApi[paramiter].title}
            </p>

            <div className=" h-9 w-full sm:w-80 flex justify-between items-center border-">
              <div className=" flex items-center justify-between border- w-44">
                <div className=" h-9 w-9 rounded-full border-2">
                  <Image
                    src={`${urlFor(getApi[paramiter].poster.asset._ref)}`}
                    alt={""}
                    width={200}
                    height={100}
                    className="h-9 w-9 rounded-full"
                  />
                </div>
                <span className="text-[#97989F]">{getApi[paramiter].name}</span>
              </div>
              <span className="text-[#97989F]">{getApi[paramiter].Date}</span>
            </div>

            <div className="border- h-96 w-full">
              <Image
                src={`${urlFor(getApi[paramiter].blogimage.asset._ref)}`}
                alt={""}
                width={1000}
                height={1000}
                className="h-96 w-full rounded-xl"
              />
            </div>

            <div className="text-[#97989F] text-justify space-y-8">
              <h2 className="md:text-4xl sm:text-2xl text-xl font-semibold">
                {getApi[paramiter].content[0].children[0].text}
              </h2>
              <div className="space-y-2">
                <h6 className="font-bold text-xl">
                  1: {getApi[paramiter].content[1].children[0].text}
                </h6>
                <p className="font-medium">
                  {getApi[paramiter].content[2].children[0].text}
                </p>
              </div>

              <div className="space-y-2">
                <h6 className="font-bold text-xl ">
                  2: {getApi[paramiter].content[3].children[0].text}
                </h6>
                <p className="font-medium">
                  {getApi[paramiter].content[4].children[0].text}
                </p>
              </div>

              <div className="space-y-2">
                <h6 className="font-bold text-xl ">
                  3: {getApi[paramiter].content[6].children[0].text}
                </h6>
                <p className="font-medium">
                  {getApi[paramiter].content[7].children[0].text}
                </p>
              </div>

              <div className="space-y-2">
                <h6 className="font-bold text-xl ">
                  4: {getApi[paramiter].content[8].children[0].text}
                </h6>
                <p className="font-medium">
                  {getApi[paramiter].content[9].children[0].text}
                </p>
              </div>
            </div>
          </div>

          {/*         ye comment setion hai */}

          <CommentSection
            img={`${urlFor(getApi[paramiter].poster.asset._ref)}`}
          />

          {/* is main comment nazar arahy hai  */}
          <SeeApiComment/>

          {/* ye second last section hai */}
        </div>
        <Information
          facebook={getApi[paramiter].facebook}
          twitter={getApi[paramiter].twitter}
          instagram={getApi[paramiter].instagram}
          youtube={getApi[paramiter].youtube}
          img={`${urlFor(getApi[paramiter].poster.asset._ref)}`}
          name={`${getApi[paramiter].name}`}
        />
      </div>
      <Footer />
    </>
  );
}

export default ReadBolg;


// https://blog-nine-silk-91.vercel.app/