import notificationService from "../services/notification.service.js";

class DisparoController {
  async mensagem(req, res) {
    try {
      const { token, title, body, imageURL } = req.body;
      const response = await notificationService.sendToDevice(token, {
        title,
        body,
        imageURL,
      });

      return res.status(200).json({ title, sucesso: true, messageId: response });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new DisparoController();
