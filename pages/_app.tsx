import { ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "../components/Head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
