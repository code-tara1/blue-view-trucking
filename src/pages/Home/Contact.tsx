import {
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Truck } from "@trucking/assets/icons";
import { imageAssets } from "@trucking/assets/images";
import ContactForm from "@trucking/components/Form/ContactForm";
import { Button } from "@trucking/components/ui/button";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Flex
      w={"full"}
      px={"10px"}
      pt={{ base: "0px", md: "80px" }}
      pos={"relative"}
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
        <SimpleGrid
          ref={ref}
          columns={{ base: 1, md: 2 }}
          gap={4}
          w={"full"}
          mt={10}
        >
          <Stack
            mx={{ md: "auto" }}
            maxW={"452px"}
            pos={"relative"}
            transform={{
              base: inView ? "translate(0, -30%)" : "translate(-20%, -30%)",
              md: inView ? "translate(0, -50%)" : "translate(-20%, -50%)",
            }}
            opacity={inView ? 1 : 0}
            transition={"all 0.7s ease-in-out"}
          >
            <Image src={imageAssets.Truck1} w={"70%"} />
            <HStack mt={10}>
              <Text textStyle={"caption"} color={"#00C0FF"}>
                GET IN TOUCH
              </Text>
              <Truck boxSize={"46px"} />
            </HStack>
            <Text textStyle={"heading"}>Contact Form</Text>
            <Text textStyle={"body"}>
              Fill out the form and one of our experts will be in touch
              immediately to assist you with your project.
            </Text>
            <Button
              w={"160px"}
              border={"1px solid"}
              textTransform={"uppercase"}
              borderRadius={"50px"}
              colorPalette={"gray"}
              variant={"outline"}
            >
              Visit Us
            </Button>
          </Stack>
          <Box
            opacity={inView ? 1 : 0}
            transform={{
              base: inView ? "translate(0,-20%)" : "translate(30%, -20%)",
              md: inView ? "translate(0,0)" : "translate(30%, 0)",
            }}
            transition={"all 0.7s ease-in-out"}
            maxW={"620px"}
          >
            <ContactForm boxShadow={"0px 8px 24px 0px rgba(0, 0, 0, 0.20)"} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Contact;
