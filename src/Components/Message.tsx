import React from 'react';
import { HStack, Avatar, Text, Box } from '@chakra-ui/react';
import { Tick } from '../assets/Tick';

interface MessageProps {
  tick: boolean;
  message: string;
  image: string;
  self: boolean;
}

export const Message: React.FC<MessageProps> = ({ tick, message, image, self }) => {
  const removeBrTags = (message: string) => {
    return message.replace(/<br>Page \d+<br>/g, '');
  };
  return (
    <>
      {self ? (
        <HStack
          alignSelf={"flex-end"}
          w={"fit-content"}
          p={"8px"}
          mr={"20px"}
          ml={"68px"}
          // gap={"16px"}
          justifyContent={"center"}
          alignItems={"center"}
          css={{
            borderRadius: "12px 12px 0px 12px",
            background: "#1C63D5",
            boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Text
            w={"full"}
            h={"fit-content"}
            color={"white"}
            fontSize={"14px"}
            fontWeight={"500"}
            fontStyle={"normal"}
          >
            {removeBrTags(message)}
          </Text>
        </HStack>
      ) : (
        <HStack
          alignSelf={"flex-start"}
          ml={"16px"}
          mr={"40px"}
          w={"fit-content"}
          gap={"8px"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          {tick ? (
            <Box position="relative">
              <Avatar alignSelf="flex-start" w="26px" h="26px" src={image} />
              <Box position="absolute" bottom="-3px" right="-3px" w="8px" h="8px" zIndex="1">
                <Tick />
              </Box>
            </Box>
          ) : (
            <Avatar alignSelf={"flex-start"} w={"26px"} h={"26px"} src={image} />
          )}

          <Text
            color={"#606060"}
            fontSize={"14px"}
            fontWeight={"500"}
            fontStyle={"normal"}
            borderRadius={"12px"}
            p={"8px"}
            css={{
              borderRadius: "0px 12px 12px 12px",
              background: "#FFF",
              boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {removeBrTags(message)}
          </Text>
        </HStack>
      )}
    </>
  );
};


