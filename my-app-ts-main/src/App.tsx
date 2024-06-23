import { useState } from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Layout } from "./components/Layout/Layout";
import { Card } from "./components/Card/Card";

const theme = extendTheme({
  fonts: {
    body: 'Helvetica, Arial, sans-serif',
    heading: 'Helvetica, Arial, sans-serif',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout >
        <Card/>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
