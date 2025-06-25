import { Flex } from '@chakra-ui/react';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      {/* Layout principal vertical: Banner + Contenido */}
      <Flex direction="column" w="100vw" h="100vh" overflow="hidden">
        <Banner />

        {/* Contenido: Sidebar + Main */}
        <Flex
          direction="row"
          flex="1"
          overflow="hidden"
          minH="0"
        >
          {/* Sidebar */}
          <Sidebar
            w={{ base: '70px', md: '70px', lg: '220px' }}
            flexShrink={0}
            h="100%"
          />

          {/* Main area con chat y entrada */}
          <Flex direction="column" flex="1" minH="0" bg="gray.800">
            <ChatWindow flex="1" overflowY="auto" />
            <ChatInput borderTop="1px solid" borderColor="gray.700" p={3} bg="gray.800" />
          </Flex>
        </Flex>
      </Flex>
    </ChatProvider>
  );
}

export default App;
