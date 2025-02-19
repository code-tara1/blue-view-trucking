import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const Navbar = () => {
  const pathname = useLocation().pathname;

  return (
    <Flex flexDir={"column"} zIndex={3}>
      {pathname !== "/" ? (
        <>
          <TopNav color={"gray.900"} boxShadow={"md"} />
          <BottomNav boxShadow={"sm"} color={"gray.900"} />
        </>
      ) : (
        <Box zIndex={2} pos={"absolute"} top={0} left={0} w={"full"}>
          <TopNav boxShadow={"md"} bg={"#183650"} opacity={0.85} />
          <BottomNav
            opacity={0.85}
            bgImage={
              "linear-gradient(180deg, #183650 0%, rgba(24, 54, 80, 0.00) 100%)"
            }
          />
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
