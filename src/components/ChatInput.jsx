import { Flex, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useChat } from '../context/ChatContext';
import { enviarPreguntaBancaIA } from "../services/bancaApi";

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const { addMessage } = useChat();
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const pregunta = message.trim();
    if (pregunta === '') return;

    // Mostrar mensaje del usuario
    addMessage(pregunta, 'user');
    setMessage('');
    setLoading(true);

    try {
      const respuesta = await enviarPreguntaBancaIA(pregunta);

      // Si la API devuelve un objeto con 'respuesta', extraerla
      const textoRespuesta =
        typeof respuesta === 'string'
          ? respuesta
          : respuesta?.respuesta ?? 'BancaIA no respondió 😢';

      addMessage(textoRespuesta, 'banca-ia');
    } catch (error) {
      console.error("Error al obtener respuesta:", error);
      addMessage("Ocurrió un error al conectar con el Servicio de BancaIA 😢", 'banca-ia');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Flex
      p={4}
      bg="gray.900"
      align="center"
      borderTop="1px solid"
      borderColor="gray.700"
    >
      <Input
        placeholder="Escribe tu mensaje..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        variant="filled"
        bg="gray.700"
        borderRadius="full"
        mr={4}
        color="white"
        _placeholder={{ color: 'gray.400' }}
        isDisabled={loading}
      />
      <Button
        onClick={handleSend}
        colorScheme="purple"
        size="md"
        borderRadius="full"
        px={6}
        boxShadow="md"
        isLoading={loading}
        loadingText="Enviando"
      >
        Enviar
      </Button>
    </Flex>
  );
};

export default ChatInput;
