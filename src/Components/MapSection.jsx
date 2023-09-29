import {
  Box,
  Button,
  Image,
  Input,
  SimpleGrid,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import lsc from "../Assets/LSC.png";
import Map from "../Assets/Map.png";
import { ColoredLine } from "./Colorline";

export default function MapSection() {
  return (
    <div>
      <Box maxWidth='1280px' p='20px 25px' margin='0 auto'>
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
            Maps
          </Text>
          <ColoredLine color='#0F3879' />
        </Box>
        <Box
          width='100%'
          mt='25px'
          display='flex'
          justifyContent='space-between'
          flexDirection={["column", "row"]}
        >
          <Box width={["100%", "80%"]} maxWodth='220px'>
            <Box width={["100%", "100%"]}>
              <Image width={["100%", "80%"]} src={lsc} alt='' />
            </Box>
            <Box width={["100%", "100%"]} py='20px'>
              <SimpleGrid
                column={2}
                minChildWidth='120px'
                width={["100%", "80%"]}
                spacing='15px'
              >
                <Box>
                  <Wrap>
                    <Text>Name</Text>
                    <Input />
                  </Wrap>
                </Box>
                <Box>
                  <Wrap>
                    <Text>Email</Text>
                    <Input />
                  </Wrap>
                </Box>
              </SimpleGrid>
              <SimpleGrid
                column={2}
                minChildWidth='120px'
                width={["100%", "80%"]}
                spacing='15px'
                mt='20px'
              >
                <Box>
                  <Wrap>
                    <Text>Phone Number</Text>
                    <Input />
                  </Wrap>
                </Box>
                <Box>
                  <Wrap>
                    <Text>Address</Text>
                    <Input />
                  </Wrap>
                </Box>
              </SimpleGrid>
            </Box>
            <Box py='20px'>
              <Button
                width={["100%", "80%"]}
                height='50px'
                colorScheme='facebook'
                variant='solid'
              >
                Attend Submit
              </Button>
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            // justifyContent='flex-end'
            maxWidth='520px'
            // border='2px'
            width={["100%", "80%"]}
            // alignItems='center'
          >
            <Box width='100%'>
              <Image width='100%' src={Map} />
            </Box>
            <Box mt={["20px", "103px"]} pt='20px' margin='0 auto' width='80%'>
              <Button
                width='100%'
                height='50px'
                variant='outline'
                // mt='10px'
                colorScheme='facebook'
              >
                Open in Google Map
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
