/*
  Warnings:

  - You are about to drop the column `lat` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `lon` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "lat",
DROP COLUMN "lon";
