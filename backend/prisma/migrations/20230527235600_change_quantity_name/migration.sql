/*
  Warnings:

  - You are about to drop the column `quantity` on the `Ordered_Product` table. All the data in the column will be lost.
  - Added the required column `qty` to the `Ordered_Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ordered_Product" DROP COLUMN "quantity",
ADD COLUMN     "qty" INTEGER NOT NULL;
