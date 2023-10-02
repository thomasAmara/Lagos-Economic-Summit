import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Lady from "../Assets/speaker3.jpeg";
import Guest from "../Assets/speaker4.jpeg";
import maleSpeaker from "../Assets/maleSpeaker.jpeg";
import ladySpeaker from "../Assets/ladySpeaker.jpeg";
import Killian from "../Assets/Killian.svg";
import { ColoredLine } from "../Components/Colorline";
import Map from "../Components/MapSection";
import "../Styles/speakerCss.css";

export default function Speaker() {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (i) => {
    setIsHovered(i);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  return (
    <div>
      <Box maxWidth='1280px' p='20px 25px' margin='0 auto'>
        <Box
          justifyContent='center'
          display='flex'
          alignItems='center'
          p='20px'
          alignContent='center'
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
            cursor='pointer'
          >
            <Text fontSize='20px' alignItems='center' fontWeight='600'>
              Speakers
            </Text>
            <ColoredLine color='#0F3879' />
          </Box>
        </Box>
        <SimpleGrid minChildWidth='200px' spacing='20px'>
          {peakers.map((item, index) => (
            <Box
              key={index}
              minHeight='150px'
              // maxWidth='250px'
              width='100%'
              display='flex'
              alignItems='center'
              backgroundColor='#F2F2F2F'
              // borderRadius='50%'
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`imageContainer ${isHovered === index ? "hover" : ""}`}
            >
              <Image
                width='100%'
                height='100%'
                borderRadius='100%'
                src={item.imageURL}
                alt=''
              />
              <div
                className={`overlay ${
                  isHovered === index ? "overlay-visible" : ""
                }`}
              />
              <div
                className={`caption ${
                  isHovered === index ? "caption-visible" : ""
                }`}
              >
                {item.caption}
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Map />
    </div>
  );
}
const peakers = [
  {
    imageURL: Lady,
    caption: "Guest Speaker",
  },
  {
    imageURL: Killian,
    caption: "Killian",
  },
  {
    imageURL: Guest,
    caption: "Guest Speaker",
  },
  {
    imageURL: maleSpeaker,
    caption: "Developer",
  },
  {
    imageURL: Guest,
    caption: "Guest Speaker",
  },
  {
    imageURL: Lady,
    caption: "Intern",
  },
  {
    imageURL: ladySpeaker,
    caption: "Guest Speaker",
  },
  {
    imageURL: Lady,
    caption: "Intern",
  },
  {
    imageURL: Killian,
    caption: "Killian",
  },
  {
    imageURL: Guest,
  },
];
