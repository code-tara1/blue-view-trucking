import { Flex } from "@chakra-ui/react";
import PageHeader from "@trucking/components/PageHeader";
import { useInView } from "react-intersection-observer";
import AboutUs from "../Home/AboutUs";

const About = () => {
  const { inView, ref } = useInView({ triggerOnce: true });

  return (
    <Flex flexDir={"column"} minH={"60dvh"}>
      <PageHeader title={"About Us"} />
      <Flex
        ref={ref}
        transform={inView ? "translateY(0)" : "translateY(50px)"}
        transition={"transform 1s ease-in-out"}
        mx={"auto"}
        py={20}
      >
        <AboutUs />
      </Flex>
    </Flex>
  );
};

export default About;
