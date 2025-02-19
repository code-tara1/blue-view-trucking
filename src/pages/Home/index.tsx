import { Flex } from "@chakra-ui/react";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import HappyClients from "./HappyClients";
import Hero from "./Hero";
import HowWeWork from "./HowWeWork";
import Services from "./Services";
import Stats from "./Stats";

const Home = () => {
  return (
    <Flex flexDir={"column"} maxW={"100dvw"} overflowX={"hidden"}>
      <Hero />
      <AboutUs />
      <Stats />
      <Services />
      <Contact />
      <HappyClients />
      <HowWeWork />
    </Flex>
  );
};

export default Home;
