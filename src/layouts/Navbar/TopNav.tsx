import { Box, BoxProps, Flex, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { contactData } from "../data";

const TopNav: FC<BoxProps> = ({ ...rest }) => {
  return (
    <Box hideBelow={"md"} w={"full"} h={"50px"} {...rest}>
      <Flex
        maxW={{
          base: "95dvw",
          sm: "90vw",
          lg: "80vw",
        }}
        w={"1440px"}
        h={"full"}
        mx={"auto"}
        align={"center"}
        justify={"space-between"}
      >
        {contactData
          .filter((item) => item.id !== "address")
          .map((item, index) => (
            <HStack
              key={index}
              color={rest.color ?? "white"}
              fontSize={"16px"}
              className="group"
              asChild
            >
              <Link to={item.link}>
                <item.icon
                  w={"25px"}
                  h={"25px"}
                  color={rest.color ?? "white"}
                />
                <Text
                  _groupHover={{
                    color: "primary.500",
                    textDecor: "underline",
                  }}
                >
                  {item.value}
                </Text>
              </Link>
            </HStack>
          ))}
      </Flex>
    </Box>
  );
};

export default TopNav;
