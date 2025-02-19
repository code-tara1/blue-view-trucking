import { Flex, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Globe, Package, Truck2, UserStars } from "@trucking/assets/icons";
import Counter from "@trucking/utils/Counter";

const stats = [
  {
    label: "LTL Trucking",
    value: "320",
    icon: Package,
  },
  {
    label: "Dry Van Service",
    value: "72",
    icon: Globe,
  },
  {
    label: "Flatbed Service",
    value: "153",
    icon: Truck2,
  },
  {
    label: "Satisfied Customers",
    value: "114",
    icon: UserStars,
  },
];

const Stats = () => {
  return (
    <Flex
      bg={"#34CCFF"}
      w={"full"}
      justify={"center"}
      align={"center"}
      py={"20px"}
      mt={12}
      px={"10px"}
    >
      <SimpleGrid
        w={"1440px"}
        maxW={{
          base: "95dvw",
          sm: "90vw",
          lg: "80vw",
        }}
        columns={{
          base: 1,
          sm: 2,
          lg: 4,
        }}
        gapY={8}
        gapX={4}
      >
        {stats.map((stat, index) => (
          <HStack key={index} gap={4}>
            <stat.icon boxSize={"46px"} color={"white"} />
            <Stack color={"white"} gap={0}>
              <Counter value={parseInt(stat.value)} />
              <Text
                fontSize={{
                  base: "16px",
                  md: "18px",
                }}
                whiteSpace={"nowrap"}
                lineClamp={1}
              >
                {stat.label}
              </Text>
            </Stack>
          </HStack>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Stats;
