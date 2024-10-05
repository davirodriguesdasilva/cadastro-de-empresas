-- CreateTable
CREATE TABLE `empresas_cadastradas` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cnpj` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `empresas_cadastradas_nome_key`(`nome`),
    UNIQUE INDEX `empresas_cadastradas_cnpj_key`(`cnpj`),
    UNIQUE INDEX `empresas_cadastradas_email_key`(`email`),
    UNIQUE INDEX `empresas_cadastradas_endereco_key`(`endereco`),
    UNIQUE INDEX `empresas_cadastradas_telefone_key`(`telefone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
