# Firebase Push Notification 🚀

Este projeto é uma implementação prática de notificações push utilizando **Firebase Cloud Messaging (FCM)**. Ele inclui um backend em Node.js para o disparo das mensagens e um frontend simples para a geração do token de dispositivo.

## 🛠️ Tecnologias

* **Backend:** Node.js, Express, Firebase Admin SDK.
* **Frontend:** HTML5, JavaScript (Firebase Web SDK 10.8.0).
* **Protocolo:** FCM (Firebase Cloud Messaging).

## 📂 Estrutura de Pastas

* `/frontend`: Contém o `index.html` e o Service Worker para receber as notificações.
* `/src`: Lógica do servidor (Controllers, Routes, Services).
* `server.js`: Ponto de entrada da API.
* `firebase-key.json`: Credenciais da conta de serviço (Admin).

## ⚙️ Configuração

### 1. Firebase Admin (Backend)
1. Vá ao [Firebase Console](https://console.firebase.google.com/).
2. Em **Configurações do Projeto > Contas de Serviço**, clique em **Gerar nova chave privada**.
3. Renomeie o arquivo baixado para `firebase-key.json` e coloque-o na raiz do projeto.

### 2. Firebase Web Config (Frontend)
No arquivo `frontend/index.html` e `frontend/firebase-messaging-sw.js`, substitua o objeto `firebaseConfig` pelas suas credenciais:
* `apiKey`, `projectId`, `messagingSenderId`, `appId`.
* No `index.html`, adicione também sua **VAPID Key** (encontrada na aba Cloud Messaging do console).

## 🚀 Como Executar

### Backend
```bash
# Instalar dependências
npm install

# Rodar o servidor (porta 3001)
node server.js

# Firebase Push Notification - Frontend 🚀

Este diretório contém a implementação do cliente para registro e recebimento de notificações push utilizando o **Firebase Cloud Messaging (FCM)**.

## 📂 Arquivos

* `index.html`: Interface principal que solicita permissão de notificação e gera o token do dispositivo.
* `firebase-messaging-sw.js`: Service Worker responsável por processar as mensagens em segundo plano.