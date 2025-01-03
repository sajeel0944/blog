"use client";

import Image from "next/image";
import { useState, ChangeEvent } from "react";

type put = {
  img?: string;
};

export default function CommentSection(props: put) {
  // State to store comments
  const [comments, setComments] = useState<string[]>([]);
  // State for the new comment input
  const [newComment, setNewComment] = useState<string>("");

  // Function to handle adding a new comment
  const handleAddComment = (): void => {
    if (newComment.trim() === "") return; // Prevent adding empty comments
    setComments([...comments, newComment]); // Add new comment to the comments array
    setNewComment(""); // Clear the input field
  };

  // Function to handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewComment(e.target.value);
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

        <h2 className="text-2xl font-bold mb-6 text-center text-white pr-64">
          Comments
        </h2>
      </div>

      {/* Input Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          placeholder="Write a comment..."
          className="flex-1 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-[#242535] text-white"
        />
        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all "
        >
          Add
        </button>
      </div>

      {/* Comments Display Section */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="p-3 text-white border rounded-lg shadow-sm bg-[#242535]"
            >
              {comment}
            </div>
          ))
        ) : (
          <p className="text-[#97989F] text-center">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
}
