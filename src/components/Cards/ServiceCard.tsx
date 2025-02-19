import {
  Card,
  CardRootProps,
  Link as CLink,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@trucking/routes/navigationRoutes";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import LazyLoadImage from "../Image/LazyLoadImage";

interface IService {
  label: string;
  image: string;
  icon: ReactNode;
}

interface ServiceCardProps {
  service: IService;
  readMore?: boolean;
}

const ServiceCard: FC<ServiceCardProps & CardRootProps> = ({
  service: { label, image, icon },
  readMore,
  ...rest
}) => {
  return (
    <Card.Root border={0} className="group" w={"full"} {...rest}>
      <Card.Header p={4} pos={"relative"}>
        <LazyLoadImage src={image} alt={label} h={"full"} aspectRatio={3 / 2} />
        <Flex
          align={"center"}
          justify={"center"}
          w={"70px"}
          aspectRatio={1}
          outline={"10px solid"}
          outlineColor={"white/70"}
          pos={"absolute"}
          _groupHover={{
            bg: "#00C0FF",
          }}
          bottom={-2}
          bg={"black"}
          rounded={"full"}
          left={"50%"}
          transform={"translateX(-50%)"}
        >
          <Icon asChild color={"white"} boxSize={"30px"}>
            {icon}
          </Icon>
        </Flex>
      </Card.Header>
      <Card.Body p={4} pb={10}>
        <Stack align={"center"} mt={4}>
          <Text
            fontSize={{
              base: "18px",
              md: "20px",
              xl: "22px",
            }}
            lineHeight={"30px"}
            fontFamily={"Viga"}
          >
            {label}
          </Text>
          {readMore ? (
            <CLink
              _groupHover={{
                color: "#00C0FF",
              }}
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight={700}
              asChild
            >
              <Link to={NAVIGATION_ROUTES.SERVICES}>Read More</Link>
            </CLink>
          ) : null}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default ServiceCard;
