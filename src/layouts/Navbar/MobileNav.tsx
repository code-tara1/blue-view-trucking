import { For, HStack, Icon, IconButton, Stack, Text } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "@trucking/components/ui/drawer";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { contactData, navLinks } from "../data";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerTrigger asChild>
        <IconButton variant={"surface"} hideFrom={"md"}>
          <Icon boxSize={"30px"} asChild>
            <LuMenu />
          </Icon>
        </IconButton>
      </DrawerTrigger>
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseTrigger />
        </DrawerHeader>
        <DrawerBody>
          <Stack gap={6}>
            <For each={navLinks}>
              {(links, index) => (
                <Text
                  fontSize={"20px"}
                  w={"max-content"}
                  fontFamily={"Viga"}
                  pb={1}
                  onClick={() => setOpen(false)}
                  borderBottom={"3px solid transparent"}
                  _hover={{
                    borderBottomColor: "primary.500",
                    color: "primary.500",
                  }}
                  _currentPage={{
                    color: "primary.500",
                    borderBottomColor: "primary.500",
                  }}
                  asChild
                  key={index}
                >
                  <NavLink to={links.link}>{links.label}</NavLink>
                </Text>
              )}
            </For>
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <Stack gap={4} w={"full"}>
            <For each={contactData}>
              {(item, index) => (
                <HStack key={index} fontSize={"16px"} className="group" asChild>
                  <Link onClick={() => setOpen(false)} to={item.link}>
                    <item.icon w={"25px"} h={"25px"} color={"white"} />
                    <Text
                      lineClamp={1}
                      _groupHover={{
                        color: "primary.500",
                        textDecor: "underline",
                      }}
                    >
                      {item.value}
                    </Text>
                  </Link>
                </HStack>
              )}
            </For>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileNav;
