import Link from "next/link";

const Posts = ({ id, title, body, userId }) => {
  return (
    <div className="flex flex-col mt-10 p-3 shadow-lg shadow-gray-600 border-2 border-gray-500 mx-5 space-y-6 md:p-3 md:mx-5 border-y-sky-200 md:space-y-0 md:border-gray-500 md:grid md:grid-cols-3 md:shadow-lg md:hover:shadow-blue-400 md:hover:opacity-60 hover:cursor-pointer transition-all">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold ">{title}</h1>
        <div className="flex flex-col space-y-2 ">
          <Link href={"#"} className="font-bold text-1xl hover:text-blue-500">
            By {userId}
          </Link>
          <time className="text-gray-500">
            {/* {format(new Date(createdAt), "yyyy-MM-dd HH:mm")} */}
          </time>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-gray-500">{body}</p>
      </div>
    </div>
  );
};

export default Posts;
