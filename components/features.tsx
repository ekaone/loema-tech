import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { GiCargoShip, GiMineTruck, GiTruck } from "react-icons/gi";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Box
        bg="gray.600"
        p={6}
        color="white"
        opacity="0.5"
        borderRadius="lg"
        h={220}
      >
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
        >
          {icon}
        </Flex>
        <Text fontWeight={600} color="green.300">
          {title}
        </Text>
        <Text color={"gray.300"}>{text}</Text>
      </Box>
    </Stack>
  );
};

export default function Features() {
  return (
    <VStack>
      <Heading
        fontWeight={400}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        color={"gray.200"}
        lineHeight={"110%"}
      >
        FIELDS
      </Heading>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={GiCargoShip} w={10} h={10} color="red.400" />}
            title={"MARITIME"}
            text={
              "Vessel and Fuel Monitoring System, Palka's Temperature, Broadband Satellite, Automatic Identification System (AIS), Satellite Phone"
            }
          />
          <Feature
            icon={<Icon as={GiMineTruck} w={10} h={10} color="green.400" />}
            title={"MINING"}
            text={
              "Load and Weight sensor, Radio communication, Crew attendance"
            }
          />
          <Feature
            icon={<Icon as={GiTruck} w={10} h={10} color="blue.400" />}
            title={"LOGISTIC"}
            text={"Fleet Management, Activity report, Tracking (real-time)"}
          />
        </SimpleGrid>
      </Box>
    </VStack>
  );
}
