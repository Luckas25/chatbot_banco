# Chatbot Banco - Backend en Python con FastAPI

Crear cuenta - API para Wit.ai

## Estructura del Proyecto


chatbot_banco/
├── app/
│   ├── adapters/
│   │   ├── api/                 # Adaptador de entrada (FastAPI)
│   │   │   └── routes.py
│   │   └── witai/               # Adaptador de salida (Wit.ai)
│   │       └── witai_client.py
│   ├── core/
│   │   ├── domain/              # Entidades y lógica de negocio
│   │   │   └── account.py
│   │   └── services/            # Casos de uso
│   │       └── account_service.py
│   └── ports/
│       ├── input/               # Puertos de entrada (interfaces de casos de uso)
│       │   └── create_account_port.py
│       └── output/              # Puertos de salida (interfaces de integración)
│           └── witai_port.py
├── main.py
├── requirements.txt
└── tests/

API token wit.ai = QKUN3T3W6S63FLJNRPB6C42XMUI7RQCR
