import { Box, Card, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { imageAssets } from "@trucking/assets/images";
import { useEffect, useState } from "react";
import BannerNavigation from "./BannerNavigation";

const bannerImages = [
  imageAssets.Banner1,
  imageAssets.Banner2,
  imageAssets.Banner3,
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Flex flexDir={"column"}>
      <Flex
        pos={"relative"}
        w={"full"}
        h={{
          base: "500px",
          sm: "600px",
          lg: "700px",
          "2xl": "750px",
        }}
        align={"center"}
      >
        <Box
          pos={"absolute"}
          zIndex={2}
          bg={"rgba(0, 0, 0, 0.40)"}
          w={"100%"}
          h={"100%"}
          maxH={"750px"}
        />

        {/* Image Container */}
        <Box
          display="flex"
          width="100%"
          overflow="hidden"
          pos="absolute"
          zIndex={1}
          top={0}
          left={0}
          right={0}
          h="100%"
        >
          <Box
            display="flex"
            width={`${bannerImages.length * 100}%`}
            transform={`translateX(-${activeIndex * 100}%)`}
            transition="transform 1s ease-in-out"
          >
            {bannerImages.map((image, index) => (
              <Box key={index} flex="0 0 100%" width="100%">
                <Image
                  src={image}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          maxW={{
            base: "95dvw",
            sm: "90vw",
            lg: "80vw",
          }}
          w={"1440px"}
          mx={"auto"}
          zIndex={3}
        >
          <Card.Root
            maxW={"568px"}
            border={0}
            bg={"primary.500/80"}
            borderRadius={0}
          >
            <Card.Body p={{ base: 8, sm: 10 }}>
              <Stack gap={4} color={"white"}>
                <Text
                  maxW={"384px"}
                  fontSize={{
                    base: "25px",
                    sm: "35px",
                    md: "40px",
                    lg: "45px",
                    xl: "50px",
                  }}
                  borderLeft={"5px solid"}
                  pl={5}
                  borderColor={"#00C0FF"}
                >
                  Commitment to Excellence
                </Text>
                <Text
                  lineHeight={"30px"}
                  fontSize={{
                    base: "14px",
                    sm: "16px",
                    lg: "18px",
                  }}
                  maxW={"418px"}
                >
                  We pledge excellent customer service and attention to detail.
                  We do business the right way.
                </Text>
              </Stack>
            </Card.Body>
          </Card.Root>
        </Box>
      </Flex>
      {/* Navigation Buttons */}
      <BannerNavigation
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </Flex>
  );
};

export default Hero;
