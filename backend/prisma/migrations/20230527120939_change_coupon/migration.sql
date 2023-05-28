/*
  Warnings:

  - The values [PRODUCT] on the enum `CouponTypes` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `_CouponToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CouponTypes_new" AS ENUM ('ALL', 'SHOP');
ALTER TABLE "Coupon" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Coupon" ALTER COLUMN "type" TYPE "CouponTypes_new" USING ("type"::text::"CouponTypes_new");
ALTER TYPE "CouponTypes" RENAME TO "CouponTypes_old";
ALTER TYPE "CouponTypes_new" RENAME TO "CouponTypes";
DROP TYPE "CouponTypes_old";
ALTER TABLE "Coupon" ALTER COLUMN "type" SET DEFAULT 'ALL';
COMMIT;

-- DropForeignKey
ALTER TABLE "_CouponToProduct" DROP CONSTRAINT "_CouponToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_CouponToProduct" DROP CONSTRAINT "_CouponToProduct_B_fkey";

-- DropTable
DROP TABLE "_CouponToProduct";
