"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  },
  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
  ];

const createPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    if (body === "" || body === "<p><br></p>") {
      setError("Body cannot be empty");
    } else {
      axios
        .post(`https://jsonplaceholder.typicode.com/posts`, data, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        })
        .then((response) => {
          alert("Post created successfully");
          setError("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="container mx-auto flex flex-col  md:space-y-0 h-screen w-full md:w-3/4">
        <h1 className="text-center font-bold text-3xl mt-10">Create Post</h1>
        <form className="h-fit" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-10 w-full justify-center items-center">
            <input
              className="rounded-md shadow-md shadow-gray-500 py-3 px-3 text-xl w-3/4 my-3 md:focus:border-b-2 md:border-gray-500 md:hover:bg-gray-100 focus:outline-none  md:w-1/2"
              type="text"
              placeholder="Title..."
              required
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              autoFocus
            />
          </div>

          <div className="flex flex-col w-full justify-center items-center h-full md:h-1/2">
            <ReactQuill
              className="rounded-md border-none py-3 h-full text-xl w-3/4 my-3 md:w-1/2 "
              value={body}
              onChange={(newValue) => setBody(newValue)}
              modules={modules}
            />
            {error && <p className="text-red-500 mt-10">{error}</p>}
          </div>

          <div className="flex justify-end items-end space-x-5 mt-10">
            <Link
              href={"/"}
              className="w-1/8 rounded-sm text-gray-500 py-3 px-10 font-bold md:hover:bg-red-300"
            >
              Cancel
            </Link>
            <button
              className="bg-blue-500 w-1/8 rounded-sm text-white py-3 px-10 font-bold md:hover:bg-orange-200"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default createPost;
