import {
  Card,
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
import { TextInput } from "@trucking/components/Form/Input";
import { Button } from "@trucking/components/ui/button";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";

const inputs = [
  {
    label: "Name:",
    name: "name",
    type: "text",
    isRequired: true,
  },
  {
    label: "Email:",
    name: "email",
    type: "email",
    isRequired: true,
  },
  {
    label: "Phone:",
    name: "phone",
    type: "tel",
    isRequired: true,
  },
  {
    label: "Address:",
    name: "address",
    type: "text",
    isRequired: true,
  },
  {
    label: "Message:",
    name: "message",
    type: "textarea",
    isRequired: true,
  },
];

const Contact = () => {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  };

  const { ref, inView } = useInView({ triggerOnce: true });
  const { control } = useForm({ defaultValues });

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
          <Card.Root
            opacity={inView ? 1 : 0}
            transform={{
              base: inView ? "translate(0,-20%)" : "translate(30%, -20%)",
              md: inView ? "translate(0,0)" : "translate(30%, 0)",
            }}
            transition={"all 0.7s ease-in-out"}
            maxW={"620px"}
            w={"full"}
            h={"max-content"}
          >
            <Card.Body
              py={16}
              boxShadow={"0px 8px 24px 0px rgba(0, 0, 0, 0.20)"}
              borderRadius={0}
              borderLeft={"4px solid"}
              borderColor={"#13B4E8"}
            >
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
                {inputs.map((input, index) =>
                  input.type === "textarea" ? (
                    <GridItem colSpan={2} key={index}>
                      <TextInput
                        placeholder={input.label}
                        name={input.name}
                        control={control}
                        required={input.isRequired}
                        type={input.type}
                        _placeholder={{
                          color: "black",
                        }}
                      />
                    </GridItem>
                  ) : (
                    <GridItem colSpan={{ base: 2, sm: 1 }} key={index}>
                      <TextInput
                        placeholder={input.label}
                        name={input.name}
                        _placeholder={{
                          color: "black",
                        }}
                        control={control}
                        required={input.isRequired}
                        type={input.type}
                      />
                    </GridItem>
                  )
                )}
                <GridItem colSpan={2}>
                  <Button w={"full"} textTransform={"uppercase"}>
                    Send Now
                  </Button>
                </GridItem>
              </SimpleGrid>
            </Card.Body>
          </Card.Root>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Contact;
