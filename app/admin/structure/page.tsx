"use client";

import { removeStructure, setStructure } from "@/actions/structure";

export default function Structure() {
  async function insertStructure() {
    await setStructure({
      extension: ".json",
      filename: "_user",
    });
  }

  async function deleteStructure(id: number) {
    const response = await removeStructure(id);
    console.log(response);
  }

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center">
      <div className="flex w-9/12">
        <button onClick={() => insertStructure()}>Insert</button>
      </div>
    </div>
  );
}
