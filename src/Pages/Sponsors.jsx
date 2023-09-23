import React from "react";
import { Box, Text, Image, Button, SimpleGrid } from "@chakra-ui/react";
import Bolt from "../Assets/Bolts.png";

export default function Sponsors() {
  return (
    <Box>
      <Box>
        <Box display="flex" flexDirection="column" width='100%' py='20px'  px='25px' justifyContent="center">
          <Box width='50%' display='flex' justifyContent='center' p='10px' mb='20px' alignItems='center' margin='0 auto' >
            <Text alignItems="center" fontSize="20px">
              Sponsors
            </Text>
          </Box>

          <SimpleGrid minChildWidth="150px">
            {Sponsor.map((item, index) => (
              <Box
                key={index}
                backgroundImage={`url(${process.env.PUBLIC_URL}${item.imageURL})`}
                backgroundSize="cover"
                backgroundPosition="center"
                minHeight="150px"
                maxWidth="150px"
                width="100%"
                display="flex"
                alignItems="center"
                backgroundColor="#383838"
                color="#FFF"
                border="2px"
                justifyContent="center"
              >
                {item.name}
              </Box>
            ))}
          </SimpleGrid>

          <Box width='50%' display='flex' justifyContent='center' p='10px' mb='20px' alignItems='center' margin='0 auto'>
            <Button size="lg" maxWidth="300px" colorScheme="facebook">
              Become A Sponsor
            </Button>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" width='100%' py='20px'  px='25px' justifyContent="center">
          <Box width='50%' display='flex' justifyContent='center' p='10px' mb='20px' alignItems='center' margin='0 auto' >
            <Text alignItems="center" fontSize="20px">
              Sponsors
            </Text>
          </Box>

          <SimpleGrid minChildWidth="150px">
            {Sponsor.map((item, index) => (
              <Box
                key={index}
                backgroundImage={`url(${process.env.PUBLIC_URL}${item.imageURL})`}
                backgroundSize="cover"
                backgroundPosition="center"
                minHeight="150px"
                maxWidth="150px"
                width="100%"
                display="flex"
                alignItems="center"
                backgroundColor="#383838"
                color="#FFF"
                border="2px"
                justifyContent="center"
              >
                {item.name}
              </Box>
            ))}
          </SimpleGrid>

          <Box width='50%' display='flex' justifyContent='center' p='10px' mb='20px' alignItems='center' margin='0 auto'>
            <Button size="lg" maxWidth="300px" colorScheme="facebook">
              Become A  Exhibitor
            </Button>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" width='100%' py='20px'  px='25px' justifyContent="center">
          <Box width='50%' display='flex' justifyContent='center' p='10px' mb='20px' alignItems='center' margin='0 auto' >
            <Text alignItems="center" fontSize="20px">
             Partner
            </Text>
          </Box>

          <SimpleGrid minChildWidth="150px">
            {Sponsor.map((item, index) => (
              <Box
                key={index}
                backgroundImage={`url(${process.env.PUBLIC_URL}${item.imageURL})`}
                backgroundSize="cover"
                backgroundPosition="center"
                minHeight="150px"
                maxWidth="150px"
                width="100%"
                display="flex"
                alignItems="center"
                backgroundColor="#383838"
                color="#FFF"
                border="2px"
                justifyContent="center"
              >
                {item.name}
              </Box>
            ))}
          </SimpleGrid>

          <Box width='50%' display='flex' justifyContent='center' p='10px' mb='20px' alignItems='center' margin='0 auto'>
            <Button size="lg" maxWidth="300px" colorScheme="facebook">
              Become A Partner
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="helpSection">
        <Box>1</Box>
        <Box>2</Box>
      </Box>
    </Box>
  );
}

const Sponsor = [
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: "/Assets/Bolts.png",
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: "/Assets/Bolts.png",
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: "/Assets/Bolts.png",
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: "/Assets/Bolts.png",
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: "/Assets/Bolts.png",
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: "/Assets/Bolts.png",
  },
];
