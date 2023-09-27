import React from "react";
import "../Styles/BookNow.css";
import Speaker from "../Assets/ladySpeaker.jpeg";
import { Box, Image, Button, SimpleGrid, Text } from "@chakra-ui/react";
import Footer from "../Components/Footer";

export default function Book() {
  const profile = [
    {
      name: "Early Bird Ticket",
      price: "350",
    },
    {
      name: "3 Ticket for the price of 2",
      price: "700",
    },
    {
      name: "5 Ticket for the price of 3",
      price: "1050",
    },
  ];

  return (
    <div className='bookContainer'>
      <Box>
        <div className='backgroundImage'>
          <text
            style={{
              fontSize: "128px",
              fontWeight: "900",
            }}
          >
            LCS 2023
          </text>
          <Text textTransform='uppercase' fontWeight='500' fontSize='48px'>
            Lagos Climate Summit
          </Text>
        </div>
        <Box margin='0 auto' className='topContainer'>
          <Box py='30px' width='100%'>
            <SimpleGrid
              columns={[2, null, 3]}
              width='100%'
              minChildWidth='320px'
              spacing='30px'
            >
              {profile.map((item, index) => (
                <Box
                  key={index}
                  border='2px'
                  borderColor='#3E5F93 '
                  borderTopRadius='32px'
                  borderBottomRadius='28px'
                >
                  <div className='profileHeader'>{item.name}</div>
                  <div className='detailsContainer'>
                    <div className='priceText'>{item.price}</div>
                    <div className='vat'>Exclude Vat</div>
                    <div className='buttonContainer'>
                      <Button
                        colorScheme='facebook'
                        border='2px'
                        maxWidth='130px'
                        width='100%'
                        variant='outline'
                      >
                        Book Now
                      </Button>
                      {/* <button className="bookButton"></button> */}
                    </div>
                  </div>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
        <Box margin='0 auto' className='midContainer'>
          <div className='delegateText'>
            <text className='delegate'>Delegate rate includes:</text>
            {Pext.map((item, index) => (
              <li>{item.name}</li>
            ))}
          </div>
        </Box>
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
            <Image width='100%' height='100%' src={Speaker} alt='' />
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
        <Footer />
      </Box>
    </div>
  );
}

const Pext = [
  {
    name: "Access to all conference sessions",
  },
  {
    name: " Lunch and light refreshments",
  },
  {
    name: "Opportunities to network with 100’s of attendees from across the industry",
  },
  {
    name: "List of all attendees post-event (without contact details and with attendee permission)",
  },
  {
    name: "Copy of all presentations post-event",
  },
  {
    name: "Three months complimentary subscription to businesspost.ie",
  },
];
