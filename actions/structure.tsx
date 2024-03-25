"use server";

import { db } from "@/drizzle";
import { structure } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getStruture() {
  return await db.select().from(structure);
}

interface IStructure {
  filename: string;
  extension: string;
}

export async function setStructure(payload: IStructure) {
  return await db.insert(structure).values(payload);
}

export async function removeStructure(id: string) {
  return await db.delete(structure).where(eq(structure.id, id));
}
