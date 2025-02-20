import { Flex, SimpleGrid } from "@chakra-ui/react";
import ServiceCard from "@trucking/components/Cards/ServiceCard";
import PageHeader from "@trucking/components/PageHeader";
import { serviceData } from "@trucking/layouts/data";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { inView, ref } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <Flex flexDir={"column"} minH={"60dvh"}>
      <PageHeader title={"Services"} />
      <Flex
        ref={ref}
        transform={inView ? "translateY(0)" : "translateY(50px)"}
        transition={"transform 0.7s ease-in-out"}
        mx={"auto"}
        py={10}
      >
        <SimpleGrid columns={3} gap={10}>
          {serviceData.map((service, index) => (
            <ServiceCard
              _hover={{
                transform: "translateY(-10px)",
                borderColor: "#00C0FF",
                transition: "all 0.5s ease-in-out",
              }}
              service={service}
              key={index}
              border={"2px solid transparent"}
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              maxW={"294px"}
              mx={"auto"}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Services;
