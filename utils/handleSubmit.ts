import { toast } from "react-hot-toast";
import { Dispatch, FormEvent } from "react";

interface HandleSubmitProps {
  event: FormEvent<HTMLFormElement>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}

export const handleSubmit = ({ event, setIsLoading }: HandleSubmitProps) => {
  event.preventDefault();
  setIsLoading(true);

  const target = event.target as typeof event.target & {
    name: { value: string };
    email: { value: string };
    message: { value: string };
  };

  const toastStyle = {
    padding: "16px",
    color: "#FFFAEE",
    background: "#171717",
    boxShadow: "0 0 40px #1b1b1c",
  };

  fetch("https://formsubmit.co/ajax/1c113f43fb782db607c85f9f9df7f0a8", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setIsLoading(false);
      target.name.value = "";
      target.email.value = "";
      target.message.value = "";
      toast.success("Message sent successfully!", { style: toastStyle });
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
      toast.error("Oops! Message MIA. Try again!", { style: toastStyle });
    });
};
