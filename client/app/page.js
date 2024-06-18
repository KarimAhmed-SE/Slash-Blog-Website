"use client";

import Image from "next/image";
import Link from "next/link";
import Posts from "@/components/posts/posts";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setLoading(false);
        setPosts(response.data);
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
        <div className="text-3xl text-center">Loading...</div>
      ) : (
        <div>
          {" "}
          {posts.length > 0 &&
            posts.map((post) => (
              <Link href={`/${post.id}`}>
                <Posts {...post} />
              </Link>
            ))}
          {screenWidth > 768 ? (
            <div></div>
          ) : (
            <div>
              <Link
                href={"/createPost"}
                className=" bg-blue-500 rounded-full text-2xl px-6 py-3 text-white font-bold fixed bottom-5 right-5  hover:bg-orange-300"
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

export default Home;
