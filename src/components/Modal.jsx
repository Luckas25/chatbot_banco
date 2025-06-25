import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
  } from '@chakra-ui/react';
  
  export const InfoModalContent = ({ onClose }) => (
    <ModalContent>
      <ModalHeader>Banco IA v1 - Proyecto de Gobierno de Datos</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        Este asistente fue desarrollado como parte del proyecto de Banco IA por Luckas Barahona
        <br /><br />
        Para más información, contactar a:
        <br />
        <strong>Luckas Barahona:</strong> luckasbarahona@gmail.com  
        <br />
        <strong></strong> 
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose} colorScheme="blue">
          Cerrar
        </Button>
      </ModalFooter>
    </ModalContent>
  );
  
  export const ConfigModalContent = ({ onClose }) => (
    <ModalContent>
      <ModalHeader>Configuración</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        Esta sección estará disponible próximamente.
        <br />
        <strong>¡Proximamente...!</strong>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose} colorScheme="gray">
          Cerrar
        </Button>
      </ModalFooter>
    </ModalContent>
  );
  