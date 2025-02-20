import { Flex, For, HStack, Image, Separator, Text } from "@chakra-ui/react";
import { imageAssets } from "@trucking/assets/images";
import { Dispatch, FC, SetStateAction } from "react";

interface BannerNavigationProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const navigation = [
  {
    label: "Box Van",
    image: imageAssets.BoxVan,
    imageActive: imageAssets.BoxVanActive,
  },
  {
    label: "Cargo Van",
    image: imageAssets.CargoVan,
    imageActive: imageAssets.CargoVanActive,
  },
  {
    label: "Sprinter Van",
    image: imageAssets.SprinterVan,
    imageActive: imageAssets.SprinterVanActive,
  },
];

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
        <For each={navigation}>
          {(item, index) => (
            <Flex
              key={index}
              flexDir={"column"}
              h={"full"}
              w={"33.33%"}
              justify={"center"}
              align={"center"}
              onClick={() => setActiveIndex(index)}
              bg={"transparent"}
              cursor={"pointer"}
            >
              <Image
                src={activeIndex === index ? item.imageActive : item.image}
                w={{ base: "50px", sm: "80px", md: "120px" }}
                aspectRatio={1}
                objectFit={"contain"}
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
                  lineClamp={1}
                >
                  {item.label}
                </Text>
              </HStack>
            </Flex>
          )}
        </For>
      </Flex>
    </Flex>
  );
};

export default BannerNavigation;
