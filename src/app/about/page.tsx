import Footer from "@/components/Footer";
import Information from "@/components/Information";
import MainImg from "@/components/MainImg";
import Navbar from "@/components/Navbar";
import Image from "next/image";

function About() {
  const posts = [
    {
      id: 1,
      image: "/picture/Rectangle 68.png",
      category: "Wood",
      date: "14 Oct 2022",
      title: "Lorem ipsum dolor sit amet",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      id: 2,
      image: "/picture/Rectangle 68 (1).png",
      category: "Handmade",
      date: "14 Oct 2022",
      title: "Lorem ipsum dolor sit amet",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      id: 3,
      image: "/picture/Rectangle 68 (2).png",
      category: "Wood",
      date: "14 Oct 2022",
      title: "Lorem ipsum dolor sit amet",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  return (
    <>
    <Navbar/>
    <MainImg/>
      <div className="space-y-20 py-20">
        {/* frist part */}
        <div className=" py-8 ">
          <div className="container mx-auto px-4 flex justify-between [@media(max-width:640px)]:flex-col [@media(max-width:460px)]:h-[2400px] h-[2200px] sm:h-auto">
            <div className="grid grid-cols-1  gap-12 w-[50%] lg:h-[1320px] md:h-[1600px] sm:h-[1800px] h-[1200px] [@media(max-width:460px)]:h-[1500px] [@media(max-width:640px)]:w-full ">
              <div className="bg-[#2e3044] shadow-md rounded-lg overflow-hidden space-y-24  pt-5 text-white ">
                <div className="space-y-9 px-3 font-medium">
                  <h1 className="lg:text-4xl text-2xl font-bold">
                    Who We Are and What We Do
                  </h1>
                  <p className="text-[#97989F]">
                    Our blog is a space where ideas come alive. From sharing
                    knowledge to connecting with like-minded individuals, this
                    platform is crafted for you. We strive to make learning
                    engaging and inspiration accessible. Every post reflects our
                    commitment to quality and authenticity. Thank you for being
                    part of our story!
                  </p>
                </div>

                <div className="space-y-9 px-3 font-medium">
                  <h1 className="lg:text-4xl text-2xl font-bold ">
                    The Journey Behind the Blog
                  </h1>
                  <p className="text-[#97989F]">
                    Discover the story behind this blog. What started as a small
                    idea has grown into a space for creativity and learning. We
                    aim to deliver value through meaningful content that informs
                    and inspires. This is more than a blog its a journey.
                    Explore, learn, and connect with us!
                  </p>
                </div>

                <div className="space-y-9 px-3 font-medium">
                  <h1 className="lg:text-4xl text-2xl font-bold">
                    Meet the Mind Behind the Words
                  </h1>
                  <p className="text-[#97989F]">
                    This blog is a reflection of our love for words and ideas.
                    Its a platform to share experiences, insights, and
                    creativity. Our mission is to inspire and engage readers
                    through high-quality content. We hope to create a community
                    where curiosity thrives. Thank you for being here!
                  </p>
                </div>

                <div className="space-y-9 px-3 font-medium">
                  <h1 className="lg:text-4xl text-2xl font-bold">
                    Our Vision: Connecting Through Creativity
                  </h1>
                  <p className="text-[#97989F]">
                    Welcome to a world of stories, insights, and creativity. Our
                    blog is built on the belief that words can inspire and
                    connect. We share content that sparks curiosity and drives
                    growth. Join us in exploring diverse topics and meaningful
                    ideas. Together, lets make learning an exciting journey!
                  </p>
                </div>

                {/*  */}
              </div>
            </div>

            <div className="lg:w-[30%] sm:w-[40%] ">
              <div className="bg-[#2e3044] p-6 shadow-md rounded-lg  sm:h-[537px] ">
                {/* Search Bar */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <button className="absolute right-3 top-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.547 3.082l4.338 4.339a1 1 0 11-1.414 1.414l-4.339-4.338A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* Categories Section */}
                <div className="">
                  <h2 className="text-lg font-semibold text-white mb-4">
                    Categories
                  </h2>
                  <ul className="space-y-2 ">
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center text-[#97989F] text-sm py-6 "
                      >
                        <span>{category.name}</span>
                        <span className="text-[#97989F]">{category.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className=" mx-auto p-4 [@media(max-width:630px)]:w-full [@media(max-width:630px)]:mt-5 text-white">
                <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
                <ul className="space-y-6">
                  {posts.map((posts2, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <Image
                        src={posts2.image}
                        alt={posts2.title}
                        width={100}
                        height={100}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-[#97989F]">
                          {posts2.title}
                        </h3>
                        <p className="text-sm text-gray-500">{posts2.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* second part */}

        <div className="border-">
          <div className="border-  h-[700px] sm:h-[620px] md:h-96 lg:px-20 px-5   w-full text-white md:flex md:justify-between">
            <div className="border- md:h-96 sm:h-56 h-[290px] md:w-[48%] w-full flex items-center sm:px-16 md:px-0">
              <p className="text-justify text-lg font-bold text-[#97989F]">
                Welcome to our blog! This platform is designed to inspire,
                inform, and connect through diverse content. From
                thought-provoking articles to creative stories, we aim to spark
                curiosity and provide value to our readers. Our mission is to
                create a space where ideas flourish, and learning never stops.
                Thank you for being a part of this journey - lets explore and
                grow together!
              </p>
            </div>
            <div className="border- h-96 md:w-[48%] w-full">
              <Image
                src={"/picture/images.png"}
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

export default About;
