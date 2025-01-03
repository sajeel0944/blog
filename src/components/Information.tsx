import Image from "next/image";
import Link from "next/link";

type link={
  facebook:string;
  twitter:string;
  instagram:string;
  youtube:string;
  img?:string;
  name?:string;
}

function Information(props?:link) {
  return (
    <>
      <div className="border- w-full sm:h-[344px] h-[370px] bg-[#2e3044] flex justify-center items-center">
        <div className="border- sm:w-[41.6rem] w-[90%] sm:h-[248px] h-[320px] space-y-5">
          <div className="flex justify-center w-full">
            <div className="border- w-[224px] h-16 flex justify-between">
              <div className="border- w-12 h-12 rounded-full">
                {" "}
                <Image
                  src={`${props?.img}`}
                  alt={""}
                  width={50}
                  height={20}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h6 className="text-white font-medium">{props?.name}</h6>
                <span className="text-sm text-[#BABABF]">
                  Collaborator & Editor
                </span>
              </div>
            </div>
          </div>
          <p className="text-[#BABABF] font-bold text-justify">
            Meet {props?.name}, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
          <div className="border- w-full h-10 flex justify-center items-center">
            <div className="border- h-10 w-[11rem]">
              <ul className="flex justify-between items-center">
                <Link
                  href={
                      `${props?.facebook}`
                  }
                  target="_blank"
                >
                  <li className="w-[35px] rounded-md h-9 bg-[#696A75] flex justify-center items-center">
                    <Image
                      src={"/picture/logo-facebook.png"}
                      alt={""}
                      width={100}
                      height={50}
                      className="h-6 w-6"
                    />
                  </li>
                </Link>
                <Link
                  href={`${props?.twitter}`}
                  target="_blank"
                >
                  {" "}
                  <li className="w-[35px] rounded-md h-9 bg-[#696A75] flex justify-center items-center">
                    <Image
                      src={"/picture/logo-twitter.png"}
                      alt={""}
                      width={100}
                      height={50}
                      className="h-6 w-6"
                    />
                  </li>
                </Link>
                <Link
                  href={`${props?.instagram}`}
                  target="_blank"
                >
                  <li className="w-[35px] rounded-md h-9 bg-[#696A75] flex justify-center items-center">
                    <Image
                      src={"/picture/logo-instagram.png"}
                      alt={""}
                      width={100}
                      height={50}
                      className="h-6 w-6"
                    />
                  </li>
                </Link>
                <Link href={`${props?.youtube}`} target="_blank">
                  <li className="w-[35px] rounded-md h-9 bg-[#696A75] flex justify-center items-center">
                    <Image
                      src={"/picture/logo-youtube.png"}
                      alt={""}
                      width={100}
                      height={50}
                      className="h-6 w-6"
                    />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
