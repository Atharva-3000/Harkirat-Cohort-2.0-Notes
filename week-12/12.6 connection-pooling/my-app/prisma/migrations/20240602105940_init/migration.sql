-- CreateEnum
CREATE TYPE "Level" AS ENUM ('INFO', 'WARN', 'ERROR');

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "level" "Level" NOT NULL,
    "message" TEXT NOT NULL,
    "meta" JSONB NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);
