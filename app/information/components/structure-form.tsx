"use client";

import { getHeirarchy, setStructure } from "@/actions/structure";
import {
  FileField,
  SelectField,
  TextArea,
  TextField,
} from "@/app/components/form/form-elements";
import useToast from "@/app/hooks/useToast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

interface FormFields {
  name: string;
  type: string;
  extension: string;
  hierarchy: string;
  content: string | FileList;
  icon: string;
}

export default function StructureForm() {
  const { success, error } = useToast();
  const form = useForm<FormFields>({
    defaultValues: {
      name: "",
      extension: ".folder",
      type: "folder",
      icon: "arrow-right",
    },
  });

  const { data } = useQuery({
    queryKey: ["heirarchy"],
    queryFn: () => getHeirarchy(),
  });

  const { mutate } = useMutation({
    mutationKey: ["create"],
    mutationFn: setStructure,
  });

  function submitHandler(data: FormFields) {
    console.log(data);
    try {
      mutate({
        parent_id: data.hierarchy,
        name: data.name,
        extension: data.type === "folder" ? ".folder" : data.extension,
        type: data.type,
        icon: data.icon,
        content: data.content,
      });
      form.reset();
      success("Added to explorer");
    } catch (err) {
      error("Failed to add");
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(submitHandler)}
      className=" w-96 gap-2 px-10"
    >
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col justify-start bg-activity w-full py-2 px-2 gap-1">
          <p className="flex text-[0.70rem] text-foreground">
            Section: <span className="pl-1 text-white">Name</span>
          </p>
          <p className="flex text-[0.70rem] text-foreground">
            Enter your entity name
          </p>
          <TextField
            className="w-full h-6 px-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.70rem]"
            control={form.control}
            name="name"
            placeholder=".gitignore"
          />
        </div>
        <div className="flex flex-col justify-start bg-activity w-full py-2 px-2 gap-1">
          <p className="flex text-[0.70rem] text-foreground">
            Section: <span className="pl-1 text-white">Icon</span>
          </p>
          <p className="flex text-[0.70rem] text-foreground">Enter file icon</p>
          <TextField
            className="w-full h-6 px-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.70rem]"
            control={form.control}
            name="icon"
            placeholder="arrow-right"
          />
        </div>
        {form.watch("type") !== "folder" && (
          <div className="flex flex-col  justify-start bg-activity w-full py-2 px-2 gap-1">
            <p className="flex text-[0.70rem] text-foreground">
              Section: <span className="pl-1 text-white">Extension</span>
            </p>
            <p className="flex text-[0.70rem] text-foreground">
              Enter file extension
            </p>
            <TextField
              className="w-full h-6 px-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.70rem]"
              control={form.control}
              name="extension"
              placeholder=".json"
            />
          </div>
        )}
        <div className="flex flex-col  justify-start bg-activity w-full py-2 px-2 gap-1">
          <p className="flex text-[0.70rem] text-foreground">
            Section: <span className="pl-1 text-white">Entity Type</span>
          </p>
          <p className="flex text-[0.70rem] text-foreground">
            Select your entity type
          </p>
          <SelectField
            className="w-full h-6 px-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.70rem]"
            control={form.control}
            name="type"
            placeholder=".gitignore"
            options={[
              {
                label: "Folder",
                value: "folder",
              },
              {
                label: "File",
                value: "file",
              },
              {
                label: "Image",
                value: "image",
              },
            ]}
          />
        </div>
        <div className="flex flex-col  justify-start bg-activity w-full py-2 px-2 gap-1">
          <p className="flex text-[0.70rem] text-foreground">
            Section: <span className="pl-1 text-white">Hierarchy</span>
          </p>
          <p className="flex text-[0.70rem] text-foreground">
            Select parent folder
          </p>
          <SelectField
            className="w-full h-6 px-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.70rem]"
            control={form.control}
            name="hierarchy"
            placeholder=".gitignore"
            options={data?.map((entity) => ({
              label: entity.name,
              value: entity.id,
            }))}
          />
        </div>

        {form.watch("type") === "file" && (
          <div className="flex flex-col  justify-start bg-activity w-full py-2 px-2 gap-1">
            <p className="flex text-[0.70rem] text-foreground">
              Section: <span className="pl-1 text-white">Contents</span>
            </p>
            <p className="flex text-[0.70rem] text-foreground">
              Enter file contents
            </p>
            <TextArea
              className="w-full min-h-32 p-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.70rem]"
              control={form.control}
              name="content"
              placeholder=""
            />
          </div>
        )}
        {form.watch("type") === "image" && (
          <div className="flex flex-col  justify-start bg-activity w-full py-2 px-2 gap-1">
            <p className="flex text-[0.70rem] text-foreground">
              Section: <span className="pl-1 text-white">Contents</span>
            </p>
            <p className="flex text-[0.70rem] text-foreground">
              Select a image
            </p>
            <FileField
              className="w-full min-h-10 p-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.70rem]"
              control={form.control}
              name="content"
            />
          </div>
        )}
        <button className="py-1 bg-footer w-full text-white text-[0.70rem]">
          Submit
        </button>
      </div>
    </form>
  );
}
