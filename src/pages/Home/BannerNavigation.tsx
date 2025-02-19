import { Flex, HStack, Separator, Text } from "@chakra-ui/react";
import { BoxVan } from "@trucking/assets/icons";
import { Dispatch, FC, SetStateAction } from "react";

interface BannerNavigationProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const BannerNavigation: FC<BannerNavigationProps> = ({
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <Flex
      flexDir={"column"}
      w={"full"}
      transform={{ base: "translateY(-60px)", sm: "translateY(-125px)" }}
      zIndex={10}
    >
      <Flex justify={"space-between"}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Flex
            key={index}
            flexDir={"column"}
            h={"full"}
            w={"33.33%"}
            justify={"center"}
            align={"center"}
            onClick={() => setActiveIndex(index)}
            bg={"transparent"}
          >
            <BoxVan
              h={"max-content"}
              w={{ base: "50px", sm: "80px", md: "120px" }}
              aspectRatio={1}
            />
            <Separator
              maxW={"370px"}
              w={"full"}
              mx={"auto"}
              transition={"border-color 0.3s"}
              borderColor={activeIndex === index ? "#D9D9D9" : "transparent"}
              borderRadius={"5px"}
              borderWidth={"2px"}
            />
            <HStack
              justify={"center"}
              w={"full"}
              bg={"primary.500"}
              color={index === activeIndex ? "primary.100" : "white"}
              h={"65px"}
            >
              <Text
                fontSize={{
                  base: "14px",
                  sm: "16px",
                  lg: "20px",
                }}
                textTransform={"uppercase"}
                fontWeight={600}
                lineHeight={"30px"}
              >
                Box 1
              </Text>
            </HStack>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default BannerNavigation;
