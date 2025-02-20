import {
  Box,
  Circle,
  Flex,
  Float,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  DashedArrow,
  Service1,
  Service2,
  Service3,
  Truck,
} from "@trucking/assets/icons";
import React from "react";
import { useInView } from "react-intersection-observer";
import BookUsNowForm from "./BookUsNowForm";

const howWeWork = [
  {
    label: "Request A Quote",
    description:
      "With the details of your order, including pick up, delivery address and the size of the item.",
    icon: Service1,
  },
  {
    label: "We Process Your Item",
    description:
      "Our experienced delivery drivers will pick up and drop off your package to it’s destination.",
    icon: Service2,
  },
  {
    label: "Delivery Confirmation",
    description:
      "Your order is tracked in real time and you receive delivery confirmation and signature.",
    icon: Service3,
  },
];

const HowWeWork = () => {
  const { ref, inView } = useInView({ threshold: 0.8, triggerOnce: true });

  return (
    <Flex py={"80px"} px={"10px"} maxW={"1440px"} mx={"auto"} w={"full"}>
      <Flex
        flexDir={"column"}
        w={"full"}
        maxW={{
          base: "100vw",
          md: "90vw",
          lg: "80vw",
        }}
        justify={"center"}
        align={"center"}
        gap={6}
        mx={"auto"}
      >
        <Stack
          justify={"center"}
          align={"center"}
          gap={6}
          opacity={inView ? 1 : 0}
          transform={inView ? "translateY(0)" : "translateY(-50px)"}
          transition={"all 0.7s ease-in-out"}
        >
          <HStack>
            <Text textStyle={"caption"} color={"#00C0FF"}>
              OUR PROCESS
            </Text>
            <Truck boxSize={"46px"} />
          </HStack>
          <Text maxW={"382px"} textStyle={"heading"} color={"#141414"}>
            How We Work
          </Text>
          <Text textAlign={"center"} textStyle={"body"}>
            Our process is simple, yet through.
          </Text>
        </Stack>
        <Box w={0} h={0} ref={ref} />
        <SimpleGrid
          columns={{
            base: 1,
            sm: 3,
            lg: 5,
          }}
          gapX={{ base: 5, md: 10 }}
          gapY={10}
          mt={10}
          alignItems={"start"}
          justifyItems={"center"}
          w={"full"}
          opacity={inView ? 1 : 0}
          transform={inView ? "scale(1)" : "scale(0)"}
          transition={"all 0.7s ease-in-out"}
        >
          {howWeWork.map((item, index) => (
            <React.Fragment key={index}>
              <Stack
                key={index}
                align={"center"}
                minW={{ base: "150px", lg: "200px" }}
              >
                <Flex
                  boxShadow={"0px 5px 15px 0px rgba(149, 157, 165, 0.20)"}
                  borderRadius={"10px"}
                  justify={"center"}
                  align={"center"}
                  w={"130px"}
                  aspectRatio={1}
                  position="relative"
                >
                  <Float>
                    <Circle bg={"#00C0FF"} size={"30px"} color={"white"}>
                      {index + 1}
                    </Circle>
                  </Float>
                  <item.icon boxSize={"60px"} />
                </Flex>
                <Text
                  fontSize={{
                    base: "16px",
                    md: "18px",
                    xl: "20px",
                  }}
                  fontWeight={500}
                  lineHeight={"30px"}
                  color={"#141414"}
                  textAlign={"center"}
                >
                  {item.label}
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={{
                    base: "14px",
                    md: "16px",
                  }}
                  lineHeight={"30px"}
                >
                  {item.description}
                </Text>
              </Stack>
              <DashedArrow
                display={index === howWeWork.length - 1 ? "none" : "flex"}
                maxW={{ base: "130px", sm: "150px" }}
                transform={{
                  base: "rotate(90deg)",
                  sm: "rotate(0deg)",
                }}
              />
            </React.Fragment>
          ))}
        </SimpleGrid>
        <BookUsNowForm />
      </Flex>
    </Flex>
  );
};

export default HowWeWork;
