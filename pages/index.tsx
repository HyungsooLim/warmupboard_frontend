import type { NextPage } from "next";
import { useEffect } from "react";
import * as BoardAPI from "../API/Board";

const Home: NextPage = () => {
  let json;

  useEffect(() => {
    json = BoardAPI.get();
    console.log(json);
    console.log("useEffect");
  });

  return (
    <>
      
    </>
  );
};

export default Home;
