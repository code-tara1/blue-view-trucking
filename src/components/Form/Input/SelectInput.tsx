import {
  For,
  Group,
  Icon,
  NativeSelectFieldProps,
  NativeSelectIndicator,
} from "@chakra-ui/react";
import { Field } from "@trucking/components/ui/field";
import { InputGroup } from "@trucking/components/ui/input-group";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@trucking/components/ui/native-select";
import { FC, ReactNode } from "react";
import { Control, Controller } from "react-hook-form";

interface ISelectInputProps {
  name: string;
  control?: Control<any>;
  label?: string;
  helperText?: string;
  backendError?: string[];
  placeholder?: string;
  startElement?: ReactNode;
  endElement?: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  options: { label: string; value: string }[];
  readOnly?: boolean;
  required?: boolean;
}

const SelectInput: FC<ISelectInputProps & NativeSelectFieldProps> = ({
  name,
  control,
  label,
  placeholder,
  helperText,
  backendError,
  startElement,
  endElement,
  leftAddon,
  rightAddon,
  options,
  readOnly,
  required,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Field
          label={label}
          invalid={!!error || !!backendError?.length}
          errorText={backendError?.[0] ?? error?.message}
          helperText={helperText}
          readOnly={readOnly}
          required={required}
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

              <NativeSelectRoot>
                <NativeSelectField
                  colorPalette={"primary"}
                  borderColor={
                    !!error || !!backendError?.length ? "red.500" : "#A6A6A6"
                  }
                  focusRing={"inside"}
                  borderRadius={"4px"}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                >
                  <For each={options}>
                    {(item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    )}
                  </For>
                </NativeSelectField>
                <NativeSelectIndicator />
              </NativeSelectRoot>
            </Group>
          </InputGroup>
        </Field>
      )}
    />
  );
};

export default SelectInput;
