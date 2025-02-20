import { Card, CardRootProps, GridItem, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { toaster } from "../ui/toaster";
import { TextInput } from "./Input";

export const contactInputs = [
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

const ContactForm: FC<CardRootProps> = ({ ...rest }) => {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  };
  const { control, handleSubmit, reset } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    console.table(data);
    toaster.create({
      title: "Form Submitted",
      description: "We will get back to you soon.",
      type: "success",
    });
    reset(defaultValues);
  };

  return (
    <Card.Root
      w={"full"}
      h={"max-content"}
      borderRadius={0}
      borderLeft={"4px solid"}
      borderColor={"#13B4E8"}
      {...rest}
    >
      <Card.Body py={16}>
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4} asChild>
          <form onSubmit={handleSubmit(onSubmit)}>
            {contactInputs.map((input, index) =>
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
              <Button type="submit" w={"full"} textTransform={"uppercase"}>
                Send Now
              </Button>
            </GridItem>
          </form>
        </SimpleGrid>
      </Card.Body>
    </Card.Root>
  );
};

export default ContactForm;
