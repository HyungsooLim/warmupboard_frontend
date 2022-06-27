import { ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import Head from "../components/Head";
import counterStore from "../stores/Counter_react_redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  return (
    <>
      <Head />
      <Provider store={counterStore}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      </Provider>
    </>
  );
};

export default MyApp;
