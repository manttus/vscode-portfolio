"use server";

import config from "@/config";
import { Resend } from "resend";

const resend = new Resend(config.resend_secret_key);

export async function sendEmail(payload: {
  email: string;
  name: string;
  message: string;
}) {
  const { data, error } = await resend.emails.send({
    from: "portfolio <onboarding@resend.dev>",
    to: ["basnetraymonn@gmail.com"],
    subject: `Let's Talk from ${payload.email}`,
    html: `<p>${payload.message} from ${payload.name} </p>`,
  });
  if (error) {
    console.log(err);
    return { message: "Failed to Send", status: 400 };
  }
  return { message: "Message Sent", status: 200 };
}
