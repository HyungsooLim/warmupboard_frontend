import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "../components/Head";
import * as BoardAPI from "../API/Board";
import { json } from "stream/consumers";

const Home: NextPage = () => {
  let json;

  useEffect(() => {
    json = BoardAPI.get();
    console.log(json);
    console.log("useEffect");
  });

  return (
    <>
      <Head />
    </>
  );
};

export default Home;
