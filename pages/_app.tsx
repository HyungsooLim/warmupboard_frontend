import { ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import Head from "../components/Head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  let store: any = Object;
  return (
    <>
      <Head />
      {/* <Provider store={store}> */}
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      {/* </Provider> */}
    </>
  );
};

export default MyApp;
