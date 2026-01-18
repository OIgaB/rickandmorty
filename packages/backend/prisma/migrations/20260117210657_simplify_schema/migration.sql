/*
  Warnings:

  - You are about to drop the column `locationId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_originId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "locationId";

-- DropTable
DROP TABLE "Location";

-- CreateTable
CREATE TABLE "Origin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Origin_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Origin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
