import { FC, useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

export interface Company {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

export interface IJobListing {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: Company;
}

type JobListingsProps = {
  isHome?: boolean;
};

const JobListings: FC<JobListingsProps> = ({ isHome }) => {
  const [fetchedJobs, setFetchedJobs] = useState<IJobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

  useEffect(() => {
    // get jobs data
    const fetchJobs = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFetchedJobs(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchJobs();
    }, 2000);
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fetchedJobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
