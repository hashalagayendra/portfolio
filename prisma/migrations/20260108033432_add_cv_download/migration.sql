-- CreateTable
CREATE TABLE "CvDownloads" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "downloads" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CvDownloads_pkey" PRIMARY KEY ("id")
);
