-- CreateTable
CREATE TABLE "ViewLandingPage" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ViewLandingPage_pkey" PRIMARY KEY ("id")
);
