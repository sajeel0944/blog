"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import { useState, ChangeEvent } from "react";

type put = {
  img?: string;
};

export default function CommentSection(props: put) {
  // ye nichy input section ky andar form main use ho raha hai or is ki value route.ts ky POST main ja rahe hai
  const router = useRouter();

  const [name, setName] = useState<string>("");

  const handle = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    router.refresh();
    await res.json();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-[#2F3151] rounded shadow-lg ">
      <div className="flex justify-between ">
        <div className="h-10 w-10 rounded-full">
          <Image
            src={`${props.img}`}
            alt={""}
            width={200}
            height={100}
            className="h-10 w-10 rounded-full"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-white md:pr-64 sm:pr-48 pr-3">
          Comments
        </h2>
      </div>

      {/* Input Section */}
      <form
        onSubmit={handle}
        className="flex flex-col sm:flex-row items-center gap-3 mb-6"
      >
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Write a comment..."
          className="flex-1 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-[#242535] text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all "
        >
          Add
        </button>
      </form>
    </div>
  );
}
