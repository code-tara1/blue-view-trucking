import { HStack, Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import { FC } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useSwiper } from "swiper/react";

const Navigation: FC<IconButtonProps> = ({ ...rest }) => {
  const swiper = useSwiper();
  return (
    <HStack>
      <IconButton
        onClick={() => swiper.slidePrev()}
        pos={"absolute"}
        left={0}
        top={"50%"}
        borderRadius={"full"}
        transform={"translateY(-50%)"}
        zIndex={99}
        size={{ base: "xs", md: "sm" }}
        {...rest}
      >
        <Icon asChild boxSize={{ base: 4, md: 6 }}>
          <LuChevronLeft fontWeight={"bold"} />
        </Icon>
      </IconButton>
      <IconButton
        onClick={() => swiper.slideNext()}
        pos={"absolute"}
        right={0}
        top={"50%"}
        size={{ base: "xs", md: "sm" }}
        borderRadius={"full"}
        transform={"translateY(-50%)"}
        zIndex={99}
        {...rest}
      >
        <Icon asChild boxSize={{ base: 4, md: 6 }}>
          <LuChevronRight fontWeight="bold" />
        </Icon>
      </IconButton>
    </HStack>
  );
};

export default Navigation;
