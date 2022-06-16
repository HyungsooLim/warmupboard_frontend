import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "../components/Head";
import * as BoardAPI from "../API/Board";
import { Button, chakra } from "@chakra-ui/react";

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
      <Button
      backgroundColor={"teal.500"}
      borderColor={"red"}
      borderWidth={"medium"}
      >
        Test Button
      </Button>
    </>
  );
};

export default Home;
