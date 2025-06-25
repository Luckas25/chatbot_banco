// src/Provider.jsx
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ChatProvider } from './context/ChatContext';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const Provider = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ChatProvider>
        {children}
      </ChatProvider>
    </ChakraProvider>
  );
};

export default Provider;
