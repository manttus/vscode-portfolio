import { toast, ToastOptions } from "react-toastify";

export default function useToast() {
  const props: ToastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    style: {
      fontSize: "0.8rem",
      background: "#333333",
      fontFamily: "inherit",
      borderRadius: 2,
    },
  };
  function success(message: string) {
    toast.success(message, props);
  }

  function error(message: string) {
    toast.error(message, props);
  }

  function info(message: string) {
    toast.info(message, props);
  }

  return { success, error, info };
}
