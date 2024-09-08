import { IJobListing } from "../components/JobListings";

// Fetch individual job
export const jobLoader = async (id: string) => {
  // Create a 2-second delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Proceed with the fetch request
  const res = await fetch(`/api/jobs/${id}`);
  const data = await res.json();

  return data;
};

// Delete Job
export const deleteJob = async (id: string) => {
  await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  return;
};

// Add New Job
export const addJob = async (newJob: IJobListing) => {
  await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return;
};
