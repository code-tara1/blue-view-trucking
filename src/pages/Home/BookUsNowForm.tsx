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
      { label: "Service 1", value: "service1" },
      { label: "Service 2", value: "service2" },
      { label: "Service 3", value: "service3" },
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
  const contentRef = useRef<HTMLDivElement>(null);
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (data: any) => {
    console.table(data);
    toaster.create({
      title: "Form submitted",
      description: "Your form has been submitted successfully",
      type: "success",
    });
    reset(defaultValues);
    setOpen(false);
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
            <Button type="submit" form="book-now-form">
              Submit
            </Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

export default BookUsNowForm;
