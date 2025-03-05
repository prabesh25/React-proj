import React, { useEffect } from "react";
import { resolvePath } from "react-router-dom";
import { useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/dev-Prabesh")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center flex flex-col items-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img className="mt-5 rounded-lg" src={data.avatar_url} alt="git-picture" width={300} />
    </div>
  );
};

export default Github;
