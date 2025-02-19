import {
  Flex,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Truck } from "@trucking/assets/icons";
import { imageAssets } from "@trucking/assets/images";

const HappyClients = () => {
  return (
    <Flex
      w={"full"}
      bg={`url(${imageAssets.HappyClientBg})`}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      px={"10px"}
      py={10}
    >
      <SimpleGrid
        w={"1440px"}
        maxW={{
          base: "95vw",
          sm: "90vw",
          lg: "80vw",
        }}
        columns={{ base: 1, md: 2 }}
        gap={6}
        mx={"auto"}
      >
        <GridItem colSpan={1} mt={4}>
          <Image src={imageAssets.Truck2} />
        </GridItem>
        <GridItem colSpan={1} mt={{ md: 12, xl: 24 }}>
          <Stack w={"full"} gap={6} maxW={"532px"} mx={"auto"}>
            <HStack>
              <Text
                textStyle={"caption"}
                color={{ base: "#00C0FF", md: "white" }}
              >
                OUR HAPPY CLIENTS
              </Text>
              <Truck boxSize={"46px"} />
            </HStack>
            <Text maxW={"382px"} textStyle={"heading"} color={"#141414"}>
              Cost Efficient Services
              <Text
                fontSize={{
                  base: "15px",
                  md: "20px",
                  xl: "25px",
                }}
                as={"span"}
                ml={{ base: 2, md: 6 }}
              >
                &nbsp; -Brain C.
              </Text>
            </Text>
            <Text
              color={"black"}
              fontSize={{ base: "16px", md: "18px", xl: "20px" }}
              lineHeight={"30px"}
            >
              “I wanted to take this opportunity to express my appreciation for
              the fact that your company takes pride in and understands the
              importance of dispatchers, receptionists, etc. because you never
              get a second chance at a first impression.”
            </Text>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default HappyClients;
