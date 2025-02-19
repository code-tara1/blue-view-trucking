import { Box, Card, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { Truck } from "@trucking/assets/icons";
import { imageAssets } from "@trucking/assets/images";
import LazyLoadImage from "@trucking/components/Image/LazyLoadImage";
import { Button } from "@trucking/components/ui/button";
import { serviceData } from "@trucking/layouts/data";
import { Swiper, SwiperSlide } from "swiper/react";

const Services = () => {
  return (
    <Flex
      py={"80px"}
      w={"full"}
      px={"10px"}
      bg={`url(${imageAssets.ServicesBg})`}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      mb={10}
      pb={{ base: "170px", sm: "150px" }}
    >
      <Flex
        justify={"center"}
        align={"center"}
        w={"1440px"}
        maxW={{ base: "95vw", sm: "90vw", lg: "80vw" }}
        mx={"auto"}
        flexDir={"column"}
        gap={4}
      >
        <HStack>
          <Text textStyle={"caption"} color={"#00C0FF"}>
            OUR SERVICES
          </Text>
          <Truck boxSize={"46px"} />
        </HStack>
        <Text
          textAlign={"center"}
          textStyle={"heading"}
          maxW={"405px"}
          color={"#141414"}
        >
          Services We're Offering
        </Text>
        <Text
          textStyle={"body"}
          color={"#141414"}
          textAlign={"center"}
          maxW={"1140px"}
          mt={5}
        >
          We facilitate success for our clients by providing and executing world
          class logistical solutions. We offer package delivery, hotshot
          delivery and more. We also offer personal loans services. For more
          information check our services page or call us directly.
        </Text>
        <Box w={"full"} maxW={"calc(350px * 3)"} mt={5}>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              780: {
                slidesPerView: 3,
              },
            }}
            loop
            autoplay={{
              delay: 5000,
            }}
            speed={1000}
          >
            {[...serviceData, ...serviceData, ...serviceData].map(
              (service, index) => (
                <SwiperSlide key={index}>
                  <Card.Root
                    border={0}
                    className="group"
                    maxW={"294px"}
                    w={"full"}
                    mx={"auto"}
                  >
                    <Card.Header p={4} pos={"relative"}>
                      <LazyLoadImage
                        src={service.image}
                        alt={service.label}
                        h={"full"}
                        aspectRatio={3 / 2}
                      />
                      <Flex
                        align={"center"}
                        justify={"center"}
                        w={"70px"}
                        aspectRatio={1}
                        outline={"10px solid"}
                        outlineColor={"white/70"}
                        pos={"absolute"}
                        _groupHover={{
                          bg: "#00C0FF",
                        }}
                        bottom={-2}
                        bg={"black"}
                        rounded={"full"}
                        left={"50%"}
                        transform={"translateX(-50%)"}
                      >
                        <service.icon boxSize={"40px"} color={"white"} />
                      </Flex>
                    </Card.Header>
                    <Card.Body p={4} pb={10}>
                      <Stack align={"center"} mt={4}>
                        <Text
                          fontSize={{
                            base: "18px",
                            md: "20px",
                            xl: "22px",
                          }}
                          lineHeight={"30px"}
                          fontFamily={"Viga"}
                        >
                          {service.label}
                        </Text>
                        <Link
                          href={"#services"}
                          _groupHover={{
                            color: "#00C0FF",
                          }}
                          fontSize={{ base: "14px", md: "16px" }}
                          fontWeight={700}
                        >
                          Read More
                        </Link>
                      </Stack>
                    </Card.Body>
                  </Card.Root>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </Box>
        <Button mt={10} w={"232px"} variant={"primary"}>
          View All Services
        </Button>
      </Flex>
    </Flex>
  );
};

export default Services;
