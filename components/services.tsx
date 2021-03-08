import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { GrCloudSoftware } from "react-icons/gr";
import { GiLunarModule } from "react-icons/gi";
import { GiMovementSensor } from "react-icons/gi";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  desc: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, desc, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"start"} spacing={3}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Stack direction={"column"} align={"start"} spacing={0}>
        <Text fontWeight={600} color="gray.200">
          {text}
        </Text>
        <Text color="gray.200">{desc}</Text>
      </Stack>
    </Stack>
  );
};

export default function Services() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading color="gray.200">Our Services</Heading>
          <Text color={"green.400"} fontSize={"lg"}>
            Optimize the operation of your company's fleet so that you get
            optimal benefits and operating costs
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={GrCloudSoftware} color={"yellow.500"} w={10} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"SOFTWARE"}
              desc={
                "Tracking & Monitoring (real-time), White Label, Customize Report, API server access, Monitoring Sensor, Mobile App"
              }
            />
            <Feature
              icon={
                <Icon as={GiLunarModule} color={"green.500"} w={10} h={5} />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"HARDWARE"}
              desc={
                "BLE capability, 2G/3G/4G/LTE - Iridium/Inmarsat, Information Position and sensor (real-time), Distance calculation"
              }
            />
            <Feature
              icon={
                <Icon as={GiMovementSensor} color={"purple.500"} w={10} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"SENSOR"}
              desc={
                "SOS button, RFID, Weight Sensor, Temperature, Fuel Level, Fuel Consumption"
              }
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://res.cloudinary.com/ddjsyskef/image/upload/v1615191755/samples/jpsdolhdsls1tglovdxk.jpg"
            }
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
