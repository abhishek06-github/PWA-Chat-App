import axios from "axios";

const url = 'https://qa.corider.in/assignment/chat?page=';

interface Message {
  id: number;
  chats: object;
  message: string;
  sender: {
    self: boolean;
    image: string;
    is_kyc_verified: boolean;
  };
}

export const Messages = async (page: number): Promise<Message[]> => {
  const { data } = await axios.get(`${url}${page}`);
  return data.chats as Message[];
};
