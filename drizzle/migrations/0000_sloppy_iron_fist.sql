DO $$ BEGIN
 CREATE TYPE "type" AS ENUM('folder', 'file', 'image');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "structure" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"type" "type",
	"extension" text,
	"icon" text DEFAULT ' ',
	"content" text DEFAULT ' ',
	"parent_id" uuid
);
