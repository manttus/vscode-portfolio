"use client";

import { ToastContainer } from "react-toastify";
import SettingsForm from "./setting-form";

export default function Settings() {
  return (
    <div className="flex w-full flex-grow">
      <SettingsForm />
    </div>
  );
}
