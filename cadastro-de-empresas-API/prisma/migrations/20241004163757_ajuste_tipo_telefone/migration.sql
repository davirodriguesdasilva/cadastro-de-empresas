/*
  Warnings:

  - You are about to alter the column `telefone` on the `empresas_cadastradas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropIndex
DROP INDEX `empresas_cadastradas_telefone_key` ON `empresas_cadastradas`;

-- AlterTable
ALTER TABLE `empresas_cadastradas` MODIFY `telefone` INTEGER NOT NULL;
