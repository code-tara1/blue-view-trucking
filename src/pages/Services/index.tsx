import { Flex } from "@chakra-ui/react";
import PageHeader from "@trucking/components/PageHeader";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { inView, ref } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <Flex flexDir={"column"} minH={"60dvh"}>
      <PageHeader title={"Services"} />
      <Flex
        ref={ref}
        transform={inView ? "translateY(0)" : "translateY(50px)"}
        transition={"transform 1s ease-in-out"}
        mx={"auto"}
        py={10}
      >
        <h1>Services</h1>
      </Flex>
    </Flex>
  );
};

export default Services;
