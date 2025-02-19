import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutWrapper = () => {
  return (
    <Flex flexDir={"column"} pos={"relative"}>
      <Navbar />
      <Outlet />
    </Flex>
  );
};

export default LayoutWrapper;
