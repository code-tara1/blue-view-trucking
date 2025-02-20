import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Truck } from "@trucking/assets/icons";
import { imageAssets } from "@trucking/assets/images";
import ServiceCard from "@trucking/components/Cards/ServiceCard";
import { SwiperNavigation } from "@trucking/components/Swiper";
import { Button } from "@trucking/components/ui/button";
import { serviceData } from "@trucking/layouts/data";
import { NAVIGATION_ROUTES } from "@trucking/routes/navigationRoutes";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

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
        ref={ref}
      >
        <Stack
          gap={4}
          opacity={inView ? 1 : 0}
          transform={inView ? "translateY(0)" : "translateY(-50px)"}
          transition={"all 0.7s ease-in-out"}
          mx={"auto"}
          justify={"center"}
          align={"center"}
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
            We facilitate success for our clients by providing and executing
            world class logistical solutions. We offer package delivery, hotshot
            delivery and more. We also offer personal loans services. For more
            information check our services page or call us directly.
          </Text>
        </Stack>
        <Box
          opacity={inView ? 1 : 0}
          transform={inView ? "translateY(0)" : "translateY(50px)"}
          transition={"all 0.7s ease-in-out"}
          w={"full"}
          maxW={"calc(350px * 3)"}
          mt={5}
        >
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
                  <ServiceCard
                    service={service}
                    readMore
                    maxW={"294px"}
                    mx={"auto"}
                  />
                </SwiperSlide>
              )
            )}
            <SwiperNavigation />
          </Swiper>
        </Box>
        <Button asChild mt={10} w={"232px"} variant={"primary"}>
          <Link to={NAVIGATION_ROUTES.SERVICES}>View All Services</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Services;
