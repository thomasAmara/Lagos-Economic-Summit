import React from "react";
import "../Styles/BookNow.css";
import Speaker from "../Assets/speaker2.jpeg";
import { Box, Image, Button, SimpleGrid } from "@chakra-ui/react";

export default function Book() {
  const profile = [
    {
      name: "Early Bird Ticket",
      price: "500",
    },
    {
      name: "Early Bird Ticket",
      price: "500",
    },
    {
      name: "Early Bird Ticket",
      price: "500",
    },
  ];

  return (
    <div className="bookContainer">
      <div className="backgroundImage">
        <text
          style={{
            fontSize: "70px",
            fontWeight: "900",
          }}
        >
          LCS 2023
        </text>
        <text fontWeight="500" fontSize="48px">
          Lagos Climate Summit
        </text>
      </div>
      <Box margin='0 auto' className="topContainer">
        <SimpleGrid
          columns={[2, null, 3]}
          width="100%"
          minChildWidth="320px"
          spacing="30px"
        >
          {profile.map((item, index) => (
            <Box
              key={index}
              border="2px"
              borderColor="#0F3879"
              borderTopRadius="35px"
            >
              <div className="profileHeader">{item.name}</div>
              <div className="detailsContainer">
                <div className="priceText">{item.price}</div>
                <div className="vat">Exclude Vat</div>
                <div className="buttonContainer">
                  <Button colorScheme="facebook" variant="outline">
                    Book Now
                  </Button>
                  {/* <button className="bookButton"></button> */}
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box margin='0 auto' className="midContainer">
        <div className="delegateText">
          <text className="delegate">Delegate rate includes:</text>
          {Text.map((item, index) => (
            <li>{item.name}</li>
          ))}
        </div>
      </Box>
      <Box display='flex' margin='0 auto' justifyContent='flex-start' width='100%' maxWidth='1280px'>
      <div className="helpContainer">
        <Box width="300px" height="300px" border="2px">
          <Image src={Speaker} width="100%" height="100%" alt="adanian" />
        </Box>
        <Box border='5px'>
          <Box>NEED HELP?</Box>
          <Box>
            <text>+ 234-900 000 0000</text>
            <text>+ 234-800 000 0000</text>
          </Box>
        </Box>
      </div>
      </Box>
    </div>
  );
}

const Text = [
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
