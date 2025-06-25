import { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  IconButton,
  Button,
  Text,
  Tooltip,
  Divider,
  Flex,
} from '@chakra-ui/react';
import {
  AddIcon,
  StarIcon,
  InfoIcon,
  SettingsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
} from '@chakra-ui/react';
import { InfoModalContent, ConfigModalContent } from '../components/Modal';
import { useChat } from '../context/ChatContext';

const Sidebar = () => {
  const { clearMessages } = useChat();
  const {
    isOpen: isInfoOpen,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure();
  
  const {
    isOpen: isConfigOpen,
    onOpen: onOpenConfig,
    onClose: onCloseConfig,
  } = useDisclosure();
  
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <Box
      w={isExpanded ? '220px' : '70px'}
      bg="#202123"
      color="gray.200"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      py={4}
      borderRight="1px solid"
      borderColor="gray.700"
      overflow="hidden"
      height="100%"
    >
      {/* Parte superior */}
      <VStack spacing={4} align="stretch">
        {/* Expandir/colapsar */}
        <Tooltip label={isExpanded ? 'Colapsar' : 'Expandir'} placement="right">
          <IconButton
            aria-label="Expandir"
            icon={
              isExpanded ? (
                <ChevronLeftIcon boxSize={6} />
              ) : (
                <ChevronRightIcon boxSize={6} />
              )
            }
            variant="ghost"
            color="gray.300"
            _hover={{ bg: '#3A3A3C' }}
            onClick={toggleExpand}
            alignSelf={isExpanded ? 'flex-end' : 'center'}
          />
        </Tooltip>

        {/* Nuevo Chat */}
        <Tooltip label="Nuevo Chat" placement="right" isDisabled={isExpanded}>
          <Button
            onClick={clearMessages}
            variant="ghost"
            justifyContent={isExpanded ? 'flex-start' : 'center'}
            color="gray.300"
            size="md"
            px={isExpanded ? 3 : 2}
            _hover={{ bg: '#3A3A3C' }}
          >
            <HStack spacing={2}>
              <AddIcon boxSize={5} />
              {isExpanded && <Text>Nuevo Chat</Text>}
            </HStack>
          </Button>
        </Tooltip>

        {/* Historial */}
        {isExpanded && (
          <Box px={4} pt={2}>
            <Divider borderColor="gray.600" mb={2} />
            <Text fontSize="sm" fontWeight="bold" color="gray.400" mb={2}>
              Historial
            </Text>
            {/* Aquí se agregarán las conversaciones */}
            <Text fontSize="sm" color="gray.500" fontStyle="italic">
              (Sin conversaciones aún)
            </Text>
          </Box>
        )}
      </VStack>
      {/* Parte inferior: íconos secundarios */}
      <VStack spacing={4} align="stretch" px={isExpanded ? 2 : 0}>
        <Tooltip label="Información" placement="right" isDisabled={isExpanded}>
          <Button
            onClick={onOpenInfo}
            variant="ghost"
            color="gray.300"
            justifyContent={isExpanded ? 'flex-start' : 'center'}
            leftIcon={<InfoIcon boxSize={5} />}
            size="md"
            px={isExpanded ? 3 : 2}
            _hover={{ bg: '#3A3A3C' }}
          >
            {isExpanded && <Text>Información</Text>}
          </Button>
        </Tooltip>

        <Tooltip label="Configuración" placement="right" isDisabled={isExpanded}>
          <Button
            onClick={onOpenConfig}
            variant="ghost"
            color="gray.300"
            justifyContent={isExpanded ? 'flex-start' : 'center'}
            leftIcon={<SettingsIcon boxSize={5} />}
            size="md"
            px={isExpanded ? 3 : 2}
            _hover={{ bg: '#3A3A3C' }}
          >
            {isExpanded && <Text>Configuración</Text>}
          </Button>
        </Tooltip>
      </VStack>

      <Modal isOpen={isInfoOpen} onClose={onCloseInfo} isCentered>
        <ModalOverlay />
        <InfoModalContent onClose={onCloseInfo} />
      </Modal>

      <Modal isOpen={isConfigOpen} onClose={onCloseConfig} isCentered>
        <ModalOverlay />
        <ConfigModalContent onClose={onCloseConfig} />
      </Modal>


    </Box>
  );
};

export default Sidebar;
