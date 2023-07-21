import axios, { AxiosResponse } from "axios";

const url = 'https://qa.corider.in/assignment/chat?page=';

interface Message {
  // Add types for the properties of the Message object here
  id: number;
  chats: object;
  message: string;
  sender: {
    self: boolean;
    image: string;
    is_kyc_verified: boolean;
  };
}

export const Messages = async (pageNumber: Number): Promise<Message[]> => {
  const { data } = await axios.get(url + pageNumber);
  console.log(data);
  return data.chats as Message[];
};
