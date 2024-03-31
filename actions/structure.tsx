"use server";

import { db } from "@/drizzle";
import { structure } from "@/drizzle/schema";
import { and, asc, eq, isNull, like, ne } from "drizzle-orm";

export async function getStruture() {
  return await db.query.structure.findMany({
    where: isNull(structure.parent_id),
    with: {
      children: {
        with: {
          children: true,
        },
      },
    },
    orderBy: and(asc(structure.name)),
  });
}

interface IStructure {
  name: string;
  extension: string;
  parent_id: string;
  type: folder;
  icon: string;
  content: string;
}

export async function searchStructure(term: string) {
  return await db
    .select()
    .from(structure)
    .where(
      and(like(structure.name, `%${term}%`), ne(structure.type, "folder")),
    );
}

export async function getHeirarchy() {
  return await db.query.structure.findMany({
    where: eq(structure.type, "folder"),
  });
}

export async function setStructure(payload: IStructure) {
  return await db.insert(structure).values(payload);
}

export async function removeStructure(id: string) {
  return await db.delete(structure).where(eq(structure.id, id));
}
