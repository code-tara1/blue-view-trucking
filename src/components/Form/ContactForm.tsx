import { Card, CardRootProps, GridItem, SimpleGrid } from "@chakra-ui/react";
import { contactData } from "@trucking/layouts/data";
import { MAIL_URL } from "@trucking/utils/Constants";
import axios from "axios";
import { FC, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const receiverEmail = contactData.find(
    (item) => item.label === "Email"
  )?.value;
  const onSubmit = async (data: typeof defaultValues) => {
    setLoading(true);
    const { name, email, phone, address, message } = data;

    const formattedData = {
      to: receiverEmail,
      subject: "Request for an Appointment",
      message: {
        Name: name,
        Email: email,
        Phone: phone,
        Address: address,
        Message: message,
      },
    };
    try {
      const response = await axios.post(MAIL_URL, formattedData);
      if (response.data.status) {
        toaster.create({
          title: "Success",
          description: "Your request has been submitted successfully",
          type: "success",
        });
        reset(defaultValues);
      }
    } catch (error) {
      console.error(error);
      toaster.create({
        title: "Error",
        description: "Something went wrong. Please try again later",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
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
              <Button
                loading={loading}
                loadingText={"Sending..."}
                type="submit"
                w={"full"}
                textTransform={"uppercase"}
              >
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
