import {
  Group,
  Icon,
  Input,
  InputProps,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import { Field } from "@trucking/components/ui/field";
import { InputGroup } from "@trucking/components/ui/input-group";
import { PasswordInput } from "@trucking/components/ui/password-input";
import { FC, ReactNode } from "react";
import { Control, Controller } from "react-hook-form";
interface ITextInputProps {
  name: string;
  control?: Control<any>;
  isControlled?: boolean;
  label?: string;
  helperText?: string;
  backendError?: string[];
  type?: string;
  startElement?: ReactNode;
  endElement?: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

const TextInput: FC<ITextInputProps & InputProps & TextareaProps> = ({
  name,
  control,
  isControlled = true,
  label,
  helperText,
  backendError,
  type,
  startElement,
  endElement,
  leftAddon,
  rightAddon,
  ...rest
}) => {
  return isControlled ? (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Field
          label={label}
          invalid={!!error || !!backendError?.length}
          errorText={backendError?.[0] ?? error?.message}
          helperText={helperText}
          readOnly={rest.readOnly}
          required={rest.required}
          hidden={rest.hidden}
        >
          <InputGroup
            flex={"1"}
            startElement={
              startElement && (
                <Icon boxSize={5} asChild>
                  {startElement}
                </Icon>
              )
            }
            endElement={endElement && endElement}
            w={"full"}
            _autofill={{
              bg: "transparent",
              color: "#000",
            }}
          >
            <Group w={"full"}>
              {leftAddon && leftAddon}
              {type === "textarea" ? (
                <Textarea
                  size={"xl"}
                  colorPalette={"primary"}
                  value={value}
                  onChange={onChange}
                  borderRadius={"4px"}
                  minH={"150px"}
                  borderColor={
                    !!error || !!backendError?.length ? "red.500" : "#A6A6A6"
                  }
                  resize={"none"}
                  focusRing={"inside"}
                  {...rest}
                />
              ) : type === "password" ? (
                <PasswordInput
                  colorPalette={"primary"}
                  value={value}
                  onChange={onChange}
                  borderColor={
                    !!error || !!backendError?.length ? "red.500" : "#A6A6A6"
                  }
                  autoComplete="new-password"
                  borderRadius={"4px"}
                  focusRing={"inside"}
                  {...rest}
                />
              ) : (
                <Input
                  autoComplete="off"
                  colorPalette={"primary"}
                  value={value}
                  type={type}
                  onChange={onChange}
                  borderColor={
                    !!error || !!backendError?.length ? "red.500" : "#A6A6A6"
                  }
                  focusRing={"inside"}
                  onWheel={(e) => {
                    const target = e.target as HTMLInputElement;
                    type == "number" && target.blur();
                  }}
                  borderRadius={"4px"}
                  {...rest}
                />
              )}
              {rightAddon && rightAddon}
            </Group>
          </InputGroup>
        </Field>
      )}
    />
  ) : (
    <Field
      label={label}
      helperText={helperText}
      readOnly={rest.readOnly}
      required={rest.required}
    >
      <InputGroup
        flex={"1"}
        startElement={
          startElement && (
            <Icon boxSize={5} asChild>
              {startElement}
            </Icon>
          )
        }
        endElement={
          endElement && (
            <Icon boxSize={5} asChild>
              {endElement}
            </Icon>
          )
        }
        w={"full"}
      >
        <Input
          size={"lg"}
          colorPalette={"primary"}
          type={type}
          onWheel={(e) => {
            const target = e.target as HTMLInputElement;
            type == "number" && target.blur();
          }}
          {...rest}
        />
      </InputGroup>
    </Field>
  );
};

export default TextInput;
