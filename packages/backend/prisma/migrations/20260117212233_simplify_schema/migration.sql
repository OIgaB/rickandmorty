/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Episode` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Origin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Episode_name_key" ON "Episode"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Origin_name_key" ON "Origin"("name");
