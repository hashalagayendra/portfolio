import { CvDownloads } from "./../../generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/tracking
export async function GET(req: NextRequest) {
  return NextResponse.json({ status: "Tracking API is running" });
}

// POST /api/tracking
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.methods) {
      return NextResponse.json(
        { error: "Missing 'methods' field" },
        { status: 400 }
      );
    }

    if (data.methods === "VIEW_HOMEPAGE") {
      // Here you can add logic to log the homepage view, e.g., save to database
      console.log("Homepage viewed");
      const res = await prisma.viewLandingPage.create({
        data: {},
      });

      console.log(res);
    }

    if (data.methods === "Cv_download") {
      // Here you can add logic to log the CV download, e.g., save to database
      console.log("CV downloaded");
      const res = await prisma.cvDownloads.create({
        data: {},
      });
      console.log(res);
    }

    if (data.methods === "linkedin") {
      // Here you can add logic to log the CV download, e.g., save to database
      console.log(" linkedin");
      const res = await prisma.linkdn.create({
        data: {},
      });
      console.log(res);
    }

    if (data.methods === "Github") {
      // Here you can add logic to log the CV download, e.g., save to database
      console.log("Github click");
      const res = await prisma.github.create({
        data: {},
      });
      console.log(res);
    }

    if (data.methods === "ProjectViews") {
      // Here you can add logic to log the CV download, e.g., save to database
      const projectName = data.projectName;
      console.log("Project viewed: ", projectName);
      const res = await prisma.viewProject.create({
        data: {
          name: projectName,
        },
      });
      console.log(res);
    }

    return NextResponse.json({
      received: data,
      message: "Tracking data received",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
