"use client";

import { useState } from "react";
import { cn } from "../components/lib/utils";
import StructureForm from "./components/structure-form";
import ProjectForm from "./components/project-form";

export default function Home() {
  const [steps, setSteps] = useState<number>(1);
  function handleSteps(step: number) {
    setSteps(step);
  }
  return (
    <main className="flex flex-col min-h-screen flex-1 bg-background pb-10">
      <div className="flex justify-center gap-4 py-10">
        <p
          className={cn("text-foreground cursor-pointer", {
            "border-b-2 border-footer": steps === 1,
          })}
          onClick={() => handleSteps(1)}
        >
          Structure
        </p>
        <p
          className={cn("text-foreground cursor-pointer", {
            "border-b-2 border-footer": steps === 2,
          })}
          onClick={() => handleSteps(2)}
        >
          Projects
        </p>
      </div>
      <div className="flex justify-center flex-grow">
        {steps === 1 ? <StructureForm /> : <ProjectForm />}
      </div>
    </main>
  );
}
