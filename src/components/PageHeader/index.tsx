import { Circle, Flex, HStack, Separator, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

interface PageHeaderProps {
  title: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  const { inView, ref } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <Flex bg={"gray.600"} h={"200px"}>
      <Stack
        ref={ref}
        transform={inView ? "scale(1)" : "scale(0)"}
        transition={"all 0.7s ease-in-out"}
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        gap={4}
        w={"full"}
      >
        <Text color={"white"} textAlign={"center"} textStyle={"heading"}>
          {title}
        </Text>
        <HStack>
          <Separator
            borderRadius={5}
            borderColor={"white"}
            w={"50px"}
            borderWidth={"2px"}
          />
          <Circle bg={"white"} size={"10px"} />
          <Separator
            borderRadius={5}
            borderColor={"white"}
            w={"50px"}
            borderWidth={"2px"}
          />
        </HStack>
      </Stack>
    </Flex>
  );
};

export default PageHeader;
