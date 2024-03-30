"use client";

import { sendEmail } from "@/actions/email";
import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import {
  SelectField,
  TextArea,
  TextField,
} from "@/app/components/form/form-elements";
import useToast from "@/app/hooks/useToast";
import { useForm } from "react-hook-form";

interface FormFields {
  name: string;
  email: string;
  message: string;
  honey: string;
}

export default function SettingsForm() {
  const { success, error, info } = useToast();

  async function handleSubmit(data: FormFields) {
    if (!data.honey) {
      const response = await sendEmail({
        ...data,
      });
      if (response.status === 200) {
        success("Message has been sent");
      } else {
        error("Failed to send message");
      }
    }
  }

  const form = useForm<FormFields>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honey: "",
    },
  });
  return (
    <>
      <div className="flex flex-col items-start flex-grow">
        <div className="flex w-full h-8 justify-between items-center text-[0.60rem] text-foreground px-2">
          <p>MESSAGE</p>
          <SpriteIcon
            name="kebab"
            size={20}
            className="fill-foreground cursor-pointer pb-1"
          />
        </div>
        <form
          className="flex flex-col w-full gap-2 px-2"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="flex flex-col  justify-start bg-activity w-full py-2 px-2 gap-1">
            <p className="flex text-[0.60rem] text-foreground">
              Section: <span className="pl-1 text-white">Email</span>
            </p>
            <p className="flex text-[0.60rem] text-foreground">
              Enter your email address
            </p>
            <TextField
              className="w-full h-6 px-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.60rem]"
              control={form.control}
              name="email"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="flex flex-col  justify-start bg-activity w-full py-2 px-2 gap-1">
            <p className="flex text-[0.60rem] text-foreground">
              Section: <span className="pl-1 text-white">Name</span>
            </p>
            <p className="flex text-[0.60rem] text-foreground">
              Enter your fullname
            </p>
            <TextField
              className="w-full h-6 px-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.60rem]"
              control={form.control}
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col  justify-start bg-activity w-full py-2 px-2 gap-1">
            <p className="flex text-[0.60rem] text-foreground">
              Section: <span className="pl-1 text-white">Message</span>
            </p>
            <p className="flex text-[0.60rem] text-foreground">
              Enter your message
            </p>
            <TextArea
              className="w-full min-h-10 p-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.60rem]"
              control={form.control}
              name="message"
              placeholder="How are you my friend"

            />
            <TextField
              className="hidden"
              control={form.control}
              name="honey"
              placeholder="John Doe"
            />
          </div>
          <button className="py-1 bg-footer w-full text-white text-[0.60rem]">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
