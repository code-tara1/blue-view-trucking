import {
  Flex,
  GridItem,
  HStack,
  Image,
  Link,
  List,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Envelope2 } from "@trucking/assets/icons";
import { Phone2 } from "@trucking/assets/icons/phone-2";
import { imageAssets } from "@trucking/assets/images";
import { useInView } from "react-intersection-observer";
import { contactData } from "../data";

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Flex bg={"#151515"} w={"full"} flexDir={"column"} pt={"50px"} pb={"20px"}>
      {/* Blue View Trucking */}
      <SimpleGrid
        px={"10px"}
        columns={{ base: 1, md: 3, xl: 4 }}
        w={"1440px"}
        maxW={{
          base: "95vw",
          md: "80vw",
          lg: "80vw",
        }}
        mx={"auto"}
        gap={10}
      >
        <GridItem
          ref={ref}
          opacity={inView ? 1 : 0}
          transform={inView ? "translateX(0)" : "translateX(-50px)"}
          transition={"all 0.7s ease-in-out"}
          colSpan={{ base: 4, md: 2, xl: 3 }}
        >
          <Stack gap={4}>
            <Text
              fontSize={{
                base: "22px",
                md: "26px",
                xl: "30px",
              }}
              lineHeight={"25px"}
              fontWeight={500}
              textAlign={"justify"}
              color={"#00C0FF"}
            >
              Blue{" "}
              <Text as={"span"} color={"white"}>
                View Trucking
              </Text>
            </Text>
            <Text my={2} maxW={"784px"} textStyle={"body"} color={"#fff"}>
              We pride ourselves on the quality of our work as well as our
              commitment to outstanding results. We look forward to building
              lasting relationships with our clients and guarantee your
              satisfaction.
            </Text>

            <HStack
              gap={10}
              flexDir={{
                base: "column",
                sm: "row",
              }}
              align={"start"}
            >
              <Stack gap={4}>
                <Text
                  fontSize={{
                    base: "16px",
                    md: "18px",
                    xl: "20px",
                  }}
                  lineHeight={"25px"}
                  fontWeight={500}
                  textAlign={"justify"}
                  color={"white"}
                  textTransform={"uppercase"}
                >
                  Hours of Operation
                </Text>
                <List.Root
                  fontSize={{
                    base: "14px",
                    md: "16px",
                    xl: "18px",
                  }}
                  gap={2}
                  color={"white"}
                  pl={4}
                >
                  <List.Item
                    _marker={{
                      color: "white",
                    }}
                  >
                    {
                      contactData.find((item) => item.id === "working-hours")
                        ?.value
                    }
                  </List.Item>
                  <List.Item
                    _marker={{
                      color: "white",
                    }}
                  >
                    Sunday:&nbsp;
                    <Text
                      textTransform={"uppercase"}
                      as={"span"}
                      color={"#00C0FF"}
                    >
                      Closed
                    </Text>
                  </List.Item>
                </List.Root>
              </Stack>
              <HStack gap={4} ml={{ sm: 10 }}>
                <Image src={imageAssets.License1} />
                <Image src={imageAssets.License2} />
              </HStack>
            </HStack>
          </Stack>
        </GridItem>

        {/* Contact Us */}

        <GridItem
          opacity={inView ? 1 : 0}
          transform={inView ? "translateX(0)" : "translateX(50px)"}
          transition={"all 0.7s ease-in-out"}
          colSpan={{ base: 4, md: 1, xl: 1 }}
        >
          <Stack gap={4}>
            <Text
              fontSize={{
                base: "16px",
                md: "18px",
                xl: "20px",
              }}
              lineHeight={"25px"}
              fontWeight={500}
              textAlign={"justify"}
              color={"white"}
              textTransform={"uppercase"}
            >
              Contact Us
            </Text>
            {contactData
              .filter((item) => item.id !== "working-hours")
              .map((item, index) => (
                <HStack
                  gap={4}
                  order={
                    item.id === "address" ? 1 : item.id === "phone" ? 2 : 3
                  }
                  key={index}
                >
                  <Flex
                    justify={"center"}
                    align={"center"}
                    bg={"white"}
                    borderRadius={5}
                    w={"37px"}
                    minW={"37px"}
                    aspectRatio={1}
                  >
                    {item.id === "phone" ? (
                      <Phone2 color={"#00C0FF"} boxSize={"20px"} />
                    ) : item.id === "email" ? (
                      <Envelope2 color={"#00C0FF"} boxSize={"20px"} />
                    ) : (
                      <item.icon color={"#00C0FF"} boxSize={"20px"} />
                    )}
                  </Flex>
                  <Stack color={"white"} gap={0}>
                    <Text
                      fontFamily={"Viga"}
                      lineHeight={"25px"}
                      fontSize={{
                        base: "14px",
                        md: "16px",
                      }}
                    >
                      {item.label}
                    </Text>
                    <Link
                      color={"white"}
                      fontWeight={500}
                      href={item.link}
                      target="_blank"
                      lineClamp={1}
                    >
                      {item.value}
                    </Link>
                  </Stack>
                </HStack>
              ))}
          </Stack>
        </GridItem>
        {/* Contact Us */}
      </SimpleGrid>
      {/* Blue View Trucking */}

      <Separator borderColor={"white"} mt={10} mb={4} />

      {/* Copyright Section */}
      <Text
        px={"10px"}
        fontSize={{
          base: "14px",
          md: "16px",
          xl: "18px",
        }}
        lineHeight={"25px"}
        color={"white"}
        textAlign={"center"}
        opacity={inView ? 1 : 0}
        transform={inView ? "translateY(0)" : "translateY(-10px)"}
        transition={"all 0.7s ease-in-out"}
      >
        Copyright © 2025 - Blue Veiw Trucking. All Rights Reserved. Designed
        By:&nbsp;
        <Link href=" https://infowavesolution.com" color={"#00C0FF"}>
          Infowave Solution
        </Link>
      </Text>
      {/* Copyright Section */}
    </Flex>
  );
};

export default Footer;
