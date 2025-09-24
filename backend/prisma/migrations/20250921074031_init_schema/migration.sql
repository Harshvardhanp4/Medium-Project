-- DropIndex
DROP INDEX "public"."User_name_key";

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "name" DROP NOT NULL;
