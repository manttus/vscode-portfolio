"use server";

import { db } from "@/drizzle";
import { structure } from "@/drizzle/schema";
import { and, asc, eq, isNull, ne } from "drizzle-orm";

export async function getStruture() {
  return await db.query.structure.findMany({
    where: isNull(structure.parent_id),
    with: {
      children: true,
    },
    orderBy: and(asc(structure.name)),
  });
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
