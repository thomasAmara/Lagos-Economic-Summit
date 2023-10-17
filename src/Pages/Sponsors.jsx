import React from "react";
import { Box, Text, Image, Button, SimpleGrid } from "@chakra-ui/react";
// import Bolt from "../Assets/Bolts.png";
import US from "../Assets/USMission.png";
import Agra from "../Assets/AGRA.png";
import Aice from "../Assets/AICE.png";
import Eco from "../Assets/ECO.jpeg";
import Afya from "../Assets/AfyaRekod.jpeg";
import { ColoredLine } from "../Components/Colorline";

export default function Sponsors() {
  return (
    <Box>
      <Box>
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
              justifyContent='center'
              flexDirection='column'
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
                  // backgroundColor='#F2F2F2F'
                  // borderRadius='6px'
                  // bg='#FFF'
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
                    // height='100%'
                    alt=''
                  />
                </Box>
              ))}
            </SimpleGrid>
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
    imageURL: Agra,
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: Aice,
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: US,
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: Eco,
  },
  {
    name: "Early Bird Ticket",
    price: "500",
    imageURL: Afya,
  },
];
