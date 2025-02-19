import { Flex, Heading } from "@chakra-ui/react";
import PageHeader from "@trucking/components/PageHeader";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { inView, ref } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <Flex flexDir={"column"} minH={"60dvh"}>
      <PageHeader title={"Contact"} />
      <Flex
        ref={ref}
        transform={inView ? "translateY(0)" : "translateY(50px)"}
        transition={"transform 0.7s ease-in-out"}
        mx={"auto"}
        py={10}
      >
        <Heading>Contact</Heading>
      </Flex>
    </Flex>
  );
};

export default Contact;
