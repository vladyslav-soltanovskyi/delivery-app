/*
  Warnings:

  - Added the required column `lat` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lon` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `Shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lon` to the `Shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lon" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Shop" ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lon" DOUBLE PRECISION NOT NULL;
