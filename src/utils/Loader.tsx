import { Center, CenterProps, Spinner } from "@chakra-ui/react";
import { FC } from "react";

const Loader: FC<CenterProps> = ({ ...rest }) => {
  return (
    <Center h={"70dvh"} w={"100dvw"} {...rest}>
      <Spinner
        color={"primary.500"}
        boxSize={"40px"}
        css={{ "--spinner-track-color": "colors.gray.200" }}
        borderWidth="4px"
        animationDuration="0.7s"
      />
    </Center>
  );
};

export default Loader;
