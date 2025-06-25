import { Box, Text } from '@chakra-ui/react';
import { useChat } from '../context/ChatContext';

const ChatWindow = (props) => {
  const { messages } = useChat();

  return (
    <Box
      flex="1"
      overflowY="auto"
      px={6}
      py={6}
      display="flex"
      flexDirection="column"
      color="gray.300"
      bg="gray.800" // <-- Fondo oscuro aplicado aquí
      minH="0"

      {...props}
    >
      {!messages.length && (
        <Text fontSize="lg" opacity={0.8} textAlign="center" mt="auto" mb="auto">
            BancoIA tu asistente IA 
        </Text>
      )}

      {messages.map((msg) => (
        <Box
          key={msg.id}
          bg={
            msg.sender === 'user'
              ? 'purple.600'
              : msg.sender === 'banco-ia'
              ? 'gray.700'
              : '#3A3A3C'
          }   
          color="gray.200"
          p={4}
          borderRadius="md"
          maxW="70%"
          mb={2}
          alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
        >
          <Text>{msg.text}</Text>
          <Text fontSize="xs" color="gray.500" textAlign="right">
            {msg.timestamp}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default ChatWindow;
