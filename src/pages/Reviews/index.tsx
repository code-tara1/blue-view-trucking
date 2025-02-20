import { Flex, For, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { TextInput } from "@trucking/components/Form/Input";
import PageHeader from "@trucking/components/PageHeader";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@trucking/components/ui/accordion";
import { Button } from "@trucking/components/ui/button";
import { toaster } from "@trucking/components/ui/toaster";
import { testimonialData } from "@trucking/layouts/data";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";

const Header = ({ title }: { title: string }) => {
  return (
    <Flex justify={"center"} align={"center"} bg={"primary.500"} px={5} py={4}>
      <Text
        color={"white"}
        fontSize={{
          base: "16px",
          md: "18px",
          xl: "20px",
        }}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        {title}
      </Text>
    </Flex>
  );
};

const inputs = [
  {
    label: "Name *",
    name: "name",
    type: "text",
  },
  {
    label: "Email *",
    name: "email",
    type: "email",
  },
  {
    label: "Phone *",
    name: "phone",
    type: "tel",
  },
  {
    label: "Address *",
    name: "address",
    type: "text",
  },
  {
    label: "Message *",
    name: "message",
    type: "textarea",
  },
];

const Reviews = () => {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  };

  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    console.table(data);
    reset(defaultValues);
    toaster.create({
      title: "Success",
      description: "Your review has been submitted successfully.",
      type: "success",
    });
  };

  const [value, setValue] = useState<string[]>([]);

  const { inView, ref } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <Flex flexDir={"column"} minH={"60dvh"}>
      <PageHeader title={"Reviews"} />
      <Flex ref={ref} mx={"auto"} py={10}>
        <SimpleGrid
          w={"1440px"}
          maxW={{
            base: "95dvw",
            sm: "90vw",
            lg: "80vw",
          }}
          mx={"auto"}
          columns={{ base: 1, md: 2, xl: 3 }}
          gap={{ base: 8, md: 6, xl: 10 }}
        >
          {/* Leave a Review */}
          <GridItem
            opacity={inView ? 1 : 0}
            transform={inView ? "translateX(0)" : "translateX(-50px)"}
            transition={"transform 0.7s ease-in-out"}
            colSpan={{ base: 3, md: 1, xl: 1 }}
          >
            <Flex flexDir={"column"}>
              <Header title={"Leave a Review"} />
              <Flex flexDir={"column"} gap={4} p={5} bg={"gray.50"} asChild>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {inputs.map((input, index) =>
                    input.type === "textarea" ? (
                      <TextInput
                        type="textarea"
                        key={index}
                        name={input.name}
                        placeholder={input.label}
                        control={control}
                      />
                    ) : (
                      <TextInput
                        key={index}
                        type={input.type}
                        name={input.name}
                        control={control}
                        placeholder={input.label}
                      />
                    )
                  )}
                  <Button type="submit" w={"full"}>
                    Submit
                  </Button>
                </form>
              </Flex>
            </Flex>
          </GridItem>
          {/* Leave a Review */}

          {/* Reviews  */}
          <GridItem
            opacity={inView ? 1 : 0}
            transform={inView ? "translateX(0)" : "translateX(50px)"}
            transition={"transform 0.7s ease-in-out"}
            colSpan={{ base: 3, md: 1, xl: 2 }}
          >
            <Flex flexDir={"column"} gap={4}>
              <Header title={"What our clients say"} />
              <For
                each={testimonialData}
                fallback={<Text>No reviews found.</Text>}
              >
                {(item, index) => (
                  <AccordionRoot
                    gap={4}
                    variant={"enclosed"}
                    collapsible
                    size={"lg"}
                    key={index}
                    value={value}
                    onValueChange={(e) => setValue(e.value)}
                    borderRadius={0}
                  >
                    <AccordionItem key={index} value={index + ""}>
                      <AccordionItemTrigger
                        py={4}
                        bg={
                          value.includes(index + "")
                            ? "primary.500"
                            : "transparent"
                        }
                        _hover={{
                          bg: "primary.500",
                          color: "white",
                        }}
                        color={
                          value.includes(index + "") ? "white" : "gray.900"
                        }
                        transition={"all 0.1s ease-in-out"}
                        borderRadius={0}
                        fontSize={{
                          base: "16px",
                          md: "18px",
                          xl: "20px",
                        }}
                        cursor={"pointer"}
                      >
                        - {item.name}
                      </AccordionItemTrigger>
                      <AccordionItemContent
                        fontSize={{
                          base: "14px",
                          lg: "16px",
                        }}
                        py={4}
                      >
                        {item.review}
                      </AccordionItemContent>
                    </AccordionItem>
                  </AccordionRoot>
                )}
              </For>
            </Flex>
          </GridItem>
          {/* Reviews  */}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Reviews;
