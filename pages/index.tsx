import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import * as BoardAPI from "../API/Board";

const Home: NextPage = () => {
  let json;

  // useEffect(() => {
  //   json = BoardAPI.get();
  //   console.log(json);
  //   console.log("useEffect");
  // });

  return (
    <>
      <Box m={"5%"}>
        <Link href={"/todo_react_redux"}>TODO</Link>
      </Box>
    </>
  );
};

export default Home;
