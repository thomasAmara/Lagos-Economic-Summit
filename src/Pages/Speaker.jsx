import { Box, SimpleGrid, Image, Divider, Text } from "@chakra-ui/react";
import React from "react";
import Lady from "../Assets/speaker3.jpeg";
import Guest from "../Assets/speaker4.jpeg";

export default function Speaker() {
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
          <Text fontSize='20px' alignItems='center' fontWeight='600'>
            Speakers
          </Text>
          <Divider color='#0F3879' />
        </Box>
        <SimpleGrid minChildWidth='200px' spacing='20px'>
          {peakers.map((item, index) => (
            <Box
              key={index}
              minHeight='150px'
              maxWidth='250px'
              width='100%'
              display='flex'
              alignItems='center'
              backgroundColor='#F2F2F2F'
              borderRadius='50%'
            >
              <Image
                width='100%'
                borderRadius='100%'
                src={item.imageURL}
                alt=''
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}
const peakers = [
  {
    imageURL: Lady,
  },
  {
    imageURL: Guest,
  },
  {
    imageURL: Guest,
  },
  {
    imageURL: Lady,
  },
  {
    imageURL: Guest,
  },
  {
    imageURL: Lady,
  },
  {
    imageURL: Lady,
  },
  {
    imageURL: Lady,
  },
  {
    imageURL: Guest,
  },
  {
    imageURL: Guest,
  },
];
