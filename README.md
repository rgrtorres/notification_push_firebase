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
```

### ⚙️ Frontend

Para que o frontend funcione, você deve configurar suas credenciais do Firebase em **ambos** os arquivos (`index.html` e `firebase-messaging-sw.js`):

1.  Acesse o [Firebase Console](https://console.firebase.google.com/).
2.  No seu projeto, vá em **Configurações do Projeto > Geral > Seus aplicativos**.
3.  Copie o objeto `firebaseConfig` e substitua nos arquivos:
    * `apiKey`
    * `projectId`
    * `messagingSenderId`
    * `appId`
4.  No `index.html`, substitua a `SUA_VAPIDKEY` pela chave gerada em **Configurações do Projeto > Cloud Messaging > Configuração da Web**.

## 🚀 Como Executar

> [!IMPORTANT]
> **Atenção:** Devido a restrições de segurança do navegador (CORS e Service Workers), você **DEVE utilizar o Live Server** ou outro servidor local. Abrir o arquivo `index.html` diretamente (via `file://`) impedirá a geração do token.

1.  Abra a pasta `frontend` no VS Code.
2.  Clique com o botão direito no arquivo `index.html`.
3.  Selecione **Open with Live Server**.
4.  No navegador, aceite a permissão para exibir notificações.
5.  Pressione **F12** para abrir o Console do Desenvolvedor.
6.  Copie o **Token** exibido no log para utilizar no disparo via backend.

## 💡 Observações
* Certifique-se de que o arquivo `firebase-messaging-sw.js` está no mesmo nível do `index.html` na raiz do seu servidor local para que o registro do Service Worker ocorra com sucesso.