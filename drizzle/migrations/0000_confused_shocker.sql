CREATE TABLE IF NOT EXISTS "structure" (
	"id" uuid DEFAULT gen_random_uuid(),
	"filename" text,
	"extension" text
);
