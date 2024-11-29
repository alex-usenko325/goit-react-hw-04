import { toast } from "react-hot-toast";

const ErrorMessage = (message) => {
  toast.error(message); // Викликаємо toast для відображення помилки
};

export default ErrorMessage;
