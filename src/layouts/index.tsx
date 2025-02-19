import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LayoutWrapper = () => {
  return (
    <Flex
      flexDir={"column"}
      pos={"relative"}
      maxW={"100dvw"}
      overflowX={"hidden"}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Flex>
  );
};

export default LayoutWrapper;
