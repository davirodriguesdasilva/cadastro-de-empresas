/*
  Warnings:

  - A unique constraint covering the columns `[telefone]` on the table `empresas_cadastradas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `empresas_cadastradas_telefone_key` ON `empresas_cadastradas`(`telefone`);
