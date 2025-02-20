import {
  Box,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Truck } from "@trucking/assets/icons";
import { imageAssets } from "@trucking/assets/images";
import LazyLoadImage from "@trucking/components/Image/LazyLoadImage";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { inView, ref } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <Flex pb={"50px"} px={"10px"}>
      <Box maxW={"1440px"} mx={"auto"}>
        <SimpleGrid
          w={"full"}
          maxW={{ base: "full", sm: "90dvw", lg: "80vw" }}
          ref={ref}
          columns={{ base: 1, lg: 2 }}
          mx={"auto"}
          gap={4}
        >
          <GridItem
            transform={inView ? "translateY(0)" : "translateY(50px)"}
            opacity={inView ? 1 : 0}
            transition={"all 1s ease-in-out"}
            colSpan={1}
            maxW={"650px"}
          >
            <Stack gap={4}>
              <HStack>
                <Text textStyle={"caption"} color={"#00C0FF"}>
                  Blue View Trucking
                </Text>
                <Truck boxSize={"46px"} />
              </HStack>
              <Text textStyle={"heading"} color={"#141414"}>
                The right transportation solution for you.
              </Text>
              <Text textAlign={"justify"} textStyle={"body"} color={"#141414"}>
                When you call on us, we’ll take a close look at your truckload
                shipment, provide you with a great price and back it up with
                exceptional customer service. That’s what keeps our customers
                coming back. And it’s what gains us new customers when the other
                guy “falls through”. Blue View Trucking serves the needs of
                customers transporting special equipment or material that create
                loads which are wide, over length, over-sized, overweight, or
                any combination thereof but can still legally move on the road.
              </Text>
            </Stack>
          </GridItem>
          <GridItem
            transform={inView ? "scale(1)" : "scale(0)"}
            opacity={inView ? 1 : 0}
            transition={"all 1s ease-in-out"}
            colSpan={1}
          >
            <Flex
              border={"3px solid"}
              borderColor={"primary.500"}
              pos={"relative"}
              w={"full"}
              maxW={"400px"}
              maxH={"456px"}
              minH={"400px"}
              h={"full"}
              mx={"auto"}
            >
              <LazyLoadImage
                w={"full"}
                h={"full"}
                src={imageAssets.AboutImage}
                alt={"About Us"}
                borderRadius={0}
                pos={"absolute"}
                left={{ base: -4, md: -2, xl: -4 }}
                top={4}
              />
              <LazyLoadImage
                src={imageAssets.Truck1}
                alt={"Truck"}
                pos={"absolute"}
                bottom={-10}
                right={-5}
                w={"150px"}
              />
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default AboutUs;
