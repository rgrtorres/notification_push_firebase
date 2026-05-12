import { messaging } from "../config/firebase.js";

class notificationService {
  async sendToDevice(token, { title, body, imageURL }) {
    try {
      const payload = {
        notification: {
          title,
          body,
          image: imageURL,
        },
        webpush: {
          headers: {
            Urgency: "high",
          },
          notification: {
            icon: "",
            requireInteraction: true,
            action: [
              {
                action: "open_url",
                title: "Ler noticia",
              },
            ],
          },
        },
        token,
      };
      return await messaging.send(payload);
    } catch (error) {
      console.log("notificationService :: sendToDevice :: error", { error });
      return false;
    }
  }
}

export default new notificationService();
