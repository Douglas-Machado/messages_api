/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `messages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "messages_title_key" ON "messages"("title");
