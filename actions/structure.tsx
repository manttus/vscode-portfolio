"use server";

import { db } from "@/drizzle";
import { structure } from "@/drizzle/schema";
import { and, asc, eq, isNull, like, sql, ne } from "drizzle-orm";

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
  filename: string;
  extension: string;
}

export async function searchStructure(term: string) {
  return await await db
    .select()
    .from(structure)
    .where(
      and(like(structure.name, `%${term}%`), ne(structure.type, "folder")),
    );
}

export async function setStructure(payload: IStructure) {
  return await db.insert(structure).values(payload);
}

export async function removeStructure(id: string) {
  return await db.delete(structure).where(eq(structure.id, id));
}
