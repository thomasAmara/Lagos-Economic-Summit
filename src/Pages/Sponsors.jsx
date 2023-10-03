import React from "react";
import { Box, Text, Image, Button, SimpleGrid } from "@chakra-ui/react";
import Bolt from "../Assets/Bolts.png";
import Lady from "../Assets/speaker3.jpeg";
import { ColoredLine } from "../Components/Colorline";

export default function Sponsors() {
  return (
    <Box>
      <Box bg='#DBDBDB'>
        <Box width='100%' maxWidth='1280px' margin='0 auto'>
          <Box
            display='flex'
            flexDirection='column'
            width='100%'
            py='20px'
            px='25px'
            justifyContent='center'
          >
            <Box
              width='50%'
              display='flex'
              flexDirection='column'
              justifyContent='center'
              p='10px'
              mb='20px'
              alignItems='center'
              margin='0 auto'
            >
              <Text alignItems='center' fontSize='20px'>
                Sponsors
              </Text>
              <ColoredLine color='#0F3879' />
            </Box>

            <SimpleGrid
              minChildWidth={["120px", "150px"]}
              mt='20px'
              spacing='30px'
            >
              {Sponsor.map((item, index) => (
                <Box
                  key={index}
                  minHeight='150px'
                  maxWidth='150px'
                  width='100%'
                  display='flex'
                  alignItems='center'
                  backgroundColor='#F2F2F2F'
                  borderRadius='6px'
                  bg='#FFF'
                  boxShadow='2px 3px 5px 0px rgba(0,0,0,0.75)'
                  p='30px'
                  color='#FFF'
                  justifyContent='center'
                  style={{
                    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${item.imageURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    src={item.imageURL}
                    width={["90%", "95%", "99%"]}
                    height='100%'
                    alt=''
                  />
                </Box>
              ))}
            </SimpleGrid>

            <Box
              width='50%'
              display='flex'
              justifyContent='center'
              p='10px'
              mb='20px'
              alignItems='center'
              margin='0 auto'
              mt='2%'
            >
              <Button
                maxWidth='240px'
                height='50px'
                minWidth='200px'
                width='100%'
                p='10px'
                colorScheme='facebook'
              >
                Become A Sponsor
              </Button>
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            width='100%'
            py='20px'
            px='25px'
            justifyContent='center'
          >
            <Box
              width='50%'
              display='flex'
              justifyContent='center'
              flexDirection='column'
              p='10px'
              mb='20px'
              alignItems='center'
              margin='0 auto'
            >
              <Text alignItems='center' fontSize='20px'>
                Exhibitor
              </Text>
              <ColoredLine color='#0F3879' />
            </Box>

            <SimpleGrid
              minChildWidth={["120px", "150px"]}
              mt='20px'
              spacing='30px'
            >
              {Sponsor.map((item, index) => (
                <Box
                  key={index}
                  minHeight='150px'
                  maxWidth='150px'
                  width='100%'
                  display='flex'
                  alignItems='center'
                  backgroundColor='#F2F2F2F'
                  borderRadius='6px'
                  bg='#FFF'
                  boxShadow='2px 3px 5px 0px rgba(0,0,0,0.75)'
                  p='30px'
                  color='#FFF'
                  justifyContent='center'
                  style={{
                    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${item.imageURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    src={item.imageURL}
                    width={["90%", "95%", "99%"]}
                    height='100%'
                    alt=''
                  />
                </Box>
              ))}
            </SimpleGrid>

            <Box
              width='50%'
              display='flex'
              justifyContent='center'
              p='10px'
              mb='20px'
              alignItems='center'
              margin='0 auto'
              mt='2%'
            >
              <Button
                maxWidth='240px'
                height='50px'
                minWidth='200px'
                width='100%'
                p='10px'
                colorScheme='facebook'
              >
                Become A Exhibitor
              </Button>
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            width='100%'
            py='20px'
            px='25px'
            justifyContent='center'
          >
            <Box
              width='50%'
              display='flex'
              justifyContent='center'
              flexDirection='column'
              p='10px'
              py='10px'
              mb='40px'
              alignItems='center'
              margin='0 auto'
            >
              <Text alignItems='center' fontSize='20px'>
                Partner
              </Text>
              <ColoredLine color='#0F3879' />
            </Box>

            <SimpleGrid
              minChildWidth={["120px", "150px"]}
              mt='20px'
              spacing='30px'
            >
              {Sponsor.map((item, index) => (
                <Box
                  key={index}
                  minHeight='150px'
                  maxWidth='150px'
                  width='100%'
                  display='flex'
                  alignItems='center'
                  backgroundColor='#F2F2F2F'
                  borderRadius='6px'
                  bg='#FFF'
                  boxShadow='2px 3px 5px 0px rgba(0,0,0,0.75)'
                  p='30px'
                  color='#FFF'
                  justifyContent='center'
                  style={{
                    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${item.imageURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    src={item.imageURL}
                    width={["90%", "95%", "99%"]}
                    height='100%'
                    alt=''
                  />
                </Box>
              ))}
            </SimpleGrid>

            <Box
              width='50%'
              display='flex'
              justifyContent='center'
              p='10px'
              mb='20px'
              alignItems='center'
              margin='0 auto'
              mt='2%'
            >
              <Button
                maxWidth='240px'
                height='50px'
                minWidth='200px'
                width='100%'
                p='10px'
                colorScheme='facebook'
              >
                Become A Partner
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>{" "}
      <Box
        py='30px'
        px='20px'
        display='flex'
        flexDirection={["column", "row"]}
        alignItems='center'
        className='helpSection'
        width='100%'
        margin='0 auto'
        maxWidth='1280px'
      >
        <Box
          width='100%'
          maxWidth='300px'
          border='2px solid #0F3879'
          height='300px'
        >
          <Image width='100%' height='100%' src={Lady} alt='' />
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='flex-start
        '
        >
          <Box px={["0px", "20px"]} py='10px'>
            <Text fontStyle='600' fontSize='20px'>
              Need help for Sponsorship Opportunities Contact
            </Text>
          </Box>

          <Box
            px={["0px", "20px"]}
            py='10px'
            display='flex'
            flexDirection='column'
            color='#0F3879'
            justifyContent='flex-start'
          >
            <Text fontWeight='400' fontSize='18px'>
              + 234-900 000 0000
            </Text>
            <Text fontWeight='400' fontSize='18px'>
              + 234-800 000 0000
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const Sponsor = [
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: Bolt,
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: Bolt,
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: Bolt,
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: Bolt,
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: Bolt,
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: Bolt,
  },
];
