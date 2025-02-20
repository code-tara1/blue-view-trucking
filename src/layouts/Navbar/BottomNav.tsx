import { HStack, Icon, IconButton, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import { LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data";

const BottomNav: FC<StackProps> = ({ ...rest }) => {
  return (
    <HStack w={"full"} h={"96px"} {...rest}>
      <HStack
        maxW={{
          base: "95dvw",
          sm: "90vw",
          lg: "80vw",
        }}
        w={"1440px"}
        h={"full"}
        mx={"auto"}
        align={"center"}
        justify={"end"}
      >
        <IconButton variant={"surface"} hideFrom={"md"}>
          <Icon boxSize={"30px"} asChild>
            <LuMenu />
          </Icon>
        </IconButton>
        <HStack gap={"50px"} hideBelow={"md"}>
          {navLinks.map((item, index) => (
            <Text
              fontSize={{
                base: "16px",
                md: "18px",
              }}
              fontWeight={600}
              color={rest.color ?? "white"}
              key={index}
              borderBottom={"3px solid transparent"}
              _hover={{
                borderBottomColor: "primary.500",
              }}
              _currentPage={{
                borderBottomColor: "primary.500",
              }}
              asChild
            >
              <NavLink to={item.link}>{item.label}</NavLink>
            </Text>
          ))}
        </HStack>
      </HStack>
    </HStack>
  );
};

export default BottomNav;
