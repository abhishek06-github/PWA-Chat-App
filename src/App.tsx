import React, { useEffect, useState, useRef } from 'react';
import { ArrowBackIcon, AttachmentIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Container, Input, HStack, IconButton, VStack, Text, Image } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from '@chakra-ui/react'
import {Message} from "./Components/Message";
import { Camera } from "./assets/Camera";
import { Document } from "./assets/Document";
import { Video } from "./assets/Video";
import { Send } from "./assets/Send";
import { Messages } from "./Components/Messages";

interface ChatMessage {
  chats: object;
  id: number;
  message: string;
  sender: {
    self: boolean;
    image: string;
    is_kyc_verified: boolean;
  };
}

function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const fetchMessages = async (page: number) => {
    try {
      setIsLoading(true);
      const data = await Messages(page);
      if (Array.isArray(data)) {
        setMessages((prevMessages) => [...prevMessages, ...data]);
        setIsLoading(false);
      } else {
        throw new Error("Invalid data format received from the server.");
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };
  
  const handleScroll = () => {
    const threshold = 200; // You can adjust this threshold as needed
    if (
      !isLoading &&
      containerRef.current &&
      containerRef.current.scrollTop <= threshold
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  
  useEffect(() => {
    fetchMessages(currentPage);
  }, [currentPage]);
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      return () => {
        containerRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // const [messages, setMessages] = useState<ChatMessage[]>([]);

  // const fetchData = async () => {
  //   try {
  //     const data = await Messages();
  //     if (Array.isArray(data)) {
  //       setMessages(data);
  //     } else {
  //       throw new Error("Invalid data format received from the server.");
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message);
  //     } else {
  //       alert("An unknown error occurred.");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [])

  return (
    <Box bg={"gray.800"}>
      <Container
        h={"100vh"}
        p={"0"}
        css={{
          background: "#FAF9F4"
        }}
      >
        <VStack h={"full"}>
          <Box
            pt={"20px"}
            pr={"16px"}
            pl={"16px"}
            pb={"16px"}
            w={"full"}
            css={{
              borderBottom: "1px solid #E5E5E0"
            }}
          >
            <VStack gap={"16px"}>
              {/* Header Part 1 */}
              <HStack css={{
                color: "#141E0D"
              }}
                gap={"12px"}
                w={'full'}
                alignItems={"center"}
              >
                <IconButton
                  fontSize={"24px"}
                  aria-label="Go Back"
                  icon={<ArrowBackIcon />}
                  justifyContent={"flex-start"}
                  variant={"outline"}
                  css={{
                    border: "none",
                    ':hover': {
                      background: "none"
                    }
                  }}
                />
                <Text
                  fontSize={"24px"}
                  fontWeight={"700"}
                  flexGrow={"1"}
                >
                  Trip 1
                </Text>
                <IconButton
                  fontSize={"20px"}
                  aria-label="Go Back"
                  icon={<EditIcon />}
                  variant={"outline"}
                  css={{
                    border: "none",
                    ':hover': {
                      background: "none"
                    }
                  }}
                />
              </HStack>
              {/* Header Part 2 */}
              <HStack gap={"12px"} w={"full"}>

                <HStack gap={"16px"} w={"full"}>
                  <Box
                    w={"48px"}
                    h={"48px"}
                    css={{
                      borderRadius: "48px",
                      border: "1px solid #FFF",
                      background: "#FFF",
                    }}
                    pos={"relative"}
                    overflow={"hidden"}
                  >
                    <Image
                      w={"24px"}
                      h={"22px"}
                      left={"0"}
                      top={"0"}
                      pos={"absolute"}
                      objectFit={"cover"}
                      alt="Rectangle"
                      src="https://generation-sessions.s3.amazonaws.com/2248797079ba1a7f8d019d6410c7e323/img/rectangle-12-3@2x.png"
                    />
                    <Image
                      w={"24px"}
                      h={"26px"}
                      left={"0"}
                      top={"22px"}
                      pos={"absolute"}
                      objectFit={"cover"}
                      alt="Rectangle"
                      src="https://generation-sessions.s3.amazonaws.com/2248797079ba1a7f8d019d6410c7e323/img/rectangle-14@2x.png"
                    />
                    <Image
                      w={"24px"}
                      h={"22px"}
                      left={"24px"}
                      top={"0"}
                      pos={"absolute"}
                      objectFit={"cover"}
                      alt="Rectangle"
                      src="https://generation-sessions.s3.amazonaws.com/2248797079ba1a7f8d019d6410c7e323/img/rectangle-13@2x.png"
                    />
                    <Image
                      w={"24px"}
                      h={"26px"}
                      left={"24px"}
                      top={"22px"}
                      pos={"absolute"}
                      objectFit={"cover"}
                      alt="Rectangle"
                      src="https://generation-sessions.s3.amazonaws.com/2248797079ba1a7f8d019d6410c7e323/img/rectangle-15@2x.png"
                    />
                  </Box>
                  <VStack flexGrow={"1"} gap={"0px"} alignItems={"flex-start"}>
                    <HStack>
                      <Text fontSize={"16px"} fontWeight={"500"} css={{ color: "#606060" }}>From</Text>
                      <Text fontSize={"18px"} fontWeight={"700"} css={{ color: "#141E0D" }}>IGI Airport, T3</Text>
                    </HStack>
                    <HStack>
                      <Text fontSize={"16px"} fontWeight={"500"} css={{ color: "#606060" }}>To</Text>
                      <Text fontSize={"18px"} fontWeight={"700"} css={{ color: "#141E0D" }}>Sector 28</Text>
                    </HStack>
                  </VStack>
                </HStack>
                <Image alt="Dot" boxSize={"24px"} src="https://generation-sessions.s3.amazonaws.com/2248797079ba1a7f8d019d6410c7e323/img/dots-vertical.svg"
                />
              </HStack>
            </VStack>
          </Box>
          {/* Messages */}
          <VStack
            h={"full"}
            w={"full"}
            gap={"20px"}
            pb={"20px"}
            flexGrow={"1"}
            overflowY={"auto"}
            css={{
              "&::-webkit-scrollbar": {
                display: "none"
              }
            }}
          >
            {
              messages.map((item) => (
                <Message
                  key={item.id}
                  self={item.sender.self}
                  message={item.message}
                  image={item.sender.image}
                  tick={item.sender.is_kyc_verified}
                />
              ))
            }

          </VStack>

          {/* Send Messages */}
          <form
            style={{ width: "100%" }}
          >
            <Box
              px={"16px"}
              py={"8px"}
              mb={"16px"}
            >
              <HStack
                px={"12px"}
                py={"11px"}
                alignItems={"center"}
                gap={"16px"}
                css={{
                  borderRadius: "8px",
                  background: "#FFF"
                }}
              >
                <Input
                  justifyContent={"flex-start"}
                  placeholder="Reply to @Rohit Yadav"
                  p={"0"}
                  border="none"
                  focusBorderColor="transparent" 
                  _focus={{
                    boxShadow: "none" 
                  }}
                />
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      aria-label='Attachment'
                      fontSize={"20px"}
                      icon={<AttachmentIcon />}
                      variant={"outline"}
                      css={{
                        border: "none",
                        ':hover': {
                          background: "none"
                        }
                      }}
                    />
                  </PopoverTrigger>
                  <PopoverContent
                    w={"fit-content"}
                    css={{
                      borderRadius: "999px",
                      background: "#008000",
                      boxShadow: "0px -1px 8px 0px rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <PopoverArrow alignSelf={"center"} bg={"#008000"} />
                    <HStack
                      px={"16px"}
                      py={"12px"}
                      gap={"16px"}
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      css={{
                        borderRadius: "999px",
                        background: "#008000",
                        boxShadow: "0px -1px 8px 0px rgba(0, 0, 0, 0.05)"
                      }}
                    >
                      <Camera />
                      <Video />
                      <Document />
                    </HStack>
                  </PopoverContent>
                </Popover>
                <Send />
              </HStack>
            </Box>
          </form>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
