"use client";
import Link from "next/link";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userContext } from "@/contexts/userContext";

const PostDetails = ({ params }) => {
  const { userInfo, setUserInfo } = useContext(userContext);
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const id = params.details;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setPost(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div className="flex flex-col container p-5 mt-10 mx-auto ">
            <div className="flex justify-between">
              <div className="flex justify-start items-start">
                <h1 className="text-5xl font-bold text-start">{post.title}</h1>
              </div>
            </div>

            <div className="flex justify-center items-center w-full mt-10">
              <div className="flex w-full space-x-3">
                <h2 className="text-1xl font-bold hover:text-blue-500 hover:cursor-pointer">
                  By {post.userId}
                </h2>
              </div>
            </div>
            <div className="mt-10 shadow-md shadow-gray-400 p-5 ">
              <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
            </div>
          </div>
          {screenWidth > 768 ? (
            <div></div>
          ) : (
            <div>
              <Link
                href={"/createPost"}
                className=" bg-blue-500 text-2xl rounded-full px-6 py-3 text-white font-bold fixed bottom-5 right-5  hover:bg-orange-300"
              >
                +
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostDetails;
