import { Center, CenterProps, Spinner } from "@chakra-ui/react";
import { FC } from "react";

const Loader: FC<CenterProps> = ({ ...rest }) => {
  return (
    <Center h={"70dvh"} w={"100dvw"} {...rest}>
      <Spinner colorPalette={"primary"} />
    </Center>
  );
};

export default Loader;
