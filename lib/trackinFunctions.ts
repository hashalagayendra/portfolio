import axios from "axios";
export async function CvDownloadCounts() {
  const response = await axios.post("/api/tracking", {
    methods: "Cv_download",
  });
  console.log("Tracking API response:", response.data);
}

export async function linkdnClick() {
  const response = await axios.post("/api/tracking", {
    methods: "linkedin",
  });
  // console.log("Tracking API response:", response.data);
}

export async function githubClick() {
  const response = await axios.post("/api/tracking", {
    methods: "Github",
  });
  // console.log("Tracking API response:", response.data);
}

export async function ProjectViews(projectName: string) {
  const response = await axios.post("/api/tracking", {
    methods: "ProjectViews",
    projectName,
  });
  // console.log("Tracking API response:", response.data);
}
