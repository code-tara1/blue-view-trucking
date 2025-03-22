import { For, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import { SelectInput, TextInput } from "@trucking/components/Form/Input";
import { Button } from "@trucking/components/ui/button";
import {
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@trucking/components/ui/dialog";
import { toaster } from "@trucking/components/ui/toaster";
import { contactData } from "@trucking/layouts/data";
import { MAIL_URL } from "@trucking/utils/Constants";
import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const inputForms = [
  {
    label: "Name *",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "Email *",
    name: "email",
    type: "email",
    required: true,
  },
  {
    label: "Phone *",
    name: "phone",
    type: "tel",
    required: true,
  },
  {
    label: "Service *",
    name: "service",
    type: "select",
    required: true,
    options: [
      { label: "Service 1", value: "Service 1" },
      { label: "Service 2", value: "Service 2" },
      { label: "Service 3", value: "Service 3" },
    ],
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    required: true,
  },
];

const BookUsNowForm = () => {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const receiverEmail = contactData.find(
    (item) => item.label === "Email"
  )?.value;

  const contentRef = useRef<HTMLDivElement>(null);
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: typeof defaultValues) => {
    setLoading(true);

    const { name, email, phone, service, message } = data;

    const formattedData = {
      to: receiverEmail,
      subject: "Request for an Appointment",
      message: {
        Name: name,
        Email: email,
        Phone: phone,
        Service: service,
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
        reset();
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
      setOpen(false);
    }
  };

  return (
    <DialogRoot
      closeOnInteractOutside={false}
      size={"lg"}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      motionPreset={"slide-in-top"}
    >
      <DialogTrigger asChild>
        <Button mt={10} w={{ base: "200px", sm: "225px" }} variant={"primary"}>
          Book Us Now
        </Button>
      </DialogTrigger>
      <DialogBackdrop />
      <DialogContent ref={contentRef}>
        <DialogHeader
          py={4}
          borderBottom={"1px solid"}
          borderColor={"gray.200"}
        >
          <DialogTitle lineClamp={1}>Book Us Now</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody py={4}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} asChild>
            <form id="book-now-form" onSubmit={handleSubmit(onSubmit)}>
              <For each={inputForms} fallback={<div>No input forms</div>}>
                {(input, index) =>
                  input.type === "select" ? (
                    <GridItem colSpan={{ base: 2, md: 1 }} key={index}>
                      <SelectInput
                        placeholder={input.label}
                        name={input.name}
                        options={input.options ?? []}
                        control={control}
                        required={input.required}
                      />
                    </GridItem>
                  ) : input.type === "textarea" ? (
                    <GridItem colSpan={2} key={index}>
                      <TextInput
                        placeholder={input.label}
                        name={input.name}
                        control={control}
                        type="textarea"
                        required={input.required}
                      />
                    </GridItem>
                  ) : (
                    <GridItem colSpan={{ base: 2, md: 1 }} key={index}>
                      <TextInput
                        placeholder={input.label}
                        name={input.name}
                        control={control}
                        type={input.type}
                        required={input.required}
                      />
                    </GridItem>
                  )
                }
              </For>
            </form>
          </SimpleGrid>
        </DialogBody>
        <DialogFooter>
          <HStack>
            <DialogActionTrigger asChild>
              <Button variant={"outline"}>Cancel</Button>
            </DialogActionTrigger>
            <Button
              loading={loading}
              loadingText="Submitting..."
              type="submit"
              form="book-now-form"
            >
              Submit
            </Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

export default BookUsNowForm;
