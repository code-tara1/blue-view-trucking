import {
  Flex,
  For,
  GridItem,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Envelope2 } from "@trucking/assets/icons";
import { Phone2 } from "@trucking/assets/icons/phone-2";
import ContactForm from "@trucking/components/Form/ContactForm";
import PageHeader from "@trucking/components/PageHeader";
import { useWindowSize } from "@trucking/hooks";
import { contactData } from "@trucking/layouts/data";
import { useInView } from "react-intersection-observer";
import { Fragment } from "react/jsx-runtime";

const Contact = () => {
  const { width } = useWindowSize();
  const { inView, ref } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <Flex flexDir={"column"} minH={"60dvh"}>
      <PageHeader title={"Contact"} />
      <Flex mx={"auto"} p={10}>
        <SimpleGrid
          w={"1440px"}
          maxW={{ base: "95vw", sm: "90vw", lg: "80vw" }}
          columns={width < 930 ? 1 : 2}
          gap={4}
          ref={ref}
        >
          {/* Get In Touch */}
          <GridItem
            opacity={inView ? 1 : 0}
            transform={inView ? "translateX(0)" : "translateX(-50px)"}
            transition={"transform 0.7s ease-in-out"}
            colSpan={1}
          >
            <Stack w={"full"} maxW={"487px"}>
              <Text
                color={"primary.500"}
                borderBottom={"2px solid"}
                borderBottomColor={"primary.500"}
                pb={2}
                textStyle={"caption"}
                w={"max-content"}
              >
                Get In Touch
              </Text>
              <Text
                fontSize={{
                  base: "30px",
                  sm: "36px",
                  lg: "40px",
                  "2xl": "48px",
                }}
                fontFamily={"Viga"}
                mt={4}
              >
                We'd love to{" "}
                <Text color={"primary.500"} as={"span"}>
                  hear
                </Text>{" "}
                from you.
              </Text>
              <Text textStyle={"body"}>
                Please fill out the form, and we will get back to you as soon as
                possible during regular business hours to confirm your preferred
                dates & times. Or contact us through:
              </Text>
              <For each={contactData}>
                {(item, index) =>
                  item.id === "working-hours" ? null : (
                    <Fragment key={index}>
                      <HStack mb={2} gap={4}>
                        <Flex
                          justify={"center"}
                          align={"center"}
                          bg={"white"}
                          borderRadius={5}
                          w={"37px"}
                          minW={"37px"}
                          aspectRatio={1}
                          boxShadow={"sm"}
                        >
                          {item.id === "phone" ? (
                            <Phone2 color={"#00C0FF"} boxSize={"20px"} />
                          ) : item.id === "email" ? (
                            <Envelope2 color={"#00C0FF"} boxSize={"20px"} />
                          ) : (
                            <item.icon color={"#00C0FF"} boxSize={"20px"} />
                          )}
                        </Flex>
                        <Stack gap={0}>
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
                            fontWeight={500}
                            href={item.link}
                            target="_blank"
                            lineClamp={1}
                          >
                            {item.value}
                          </Link>
                        </Stack>
                      </HStack>
                    </Fragment>
                  )
                }
              </For>
            </Stack>
          </GridItem>
          {/* Get In Touch */}

          {/* Contact Form */}
          <GridItem
            opacity={inView ? 1 : 0}
            transform={inView ? "translateX(0)" : "translateX(50px)"}
            transition={"transform 0.7s ease-in-out"}
            colSpan={1}
          >
            <Stack gap={6} w={"full"} maxW={"100%"}>
              <Text
                color={"primary.500"}
                borderBottom={"2px solid"}
                borderBottomColor={"primary.500"}
                pb={2}
                textStyle={"caption"}
                w={"max-content"}
              >
                Fill out the form
              </Text>
              <ContactForm maxW={"100%"} />
            </Stack>
          </GridItem>
          {/* Contact Form */}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Contact;
