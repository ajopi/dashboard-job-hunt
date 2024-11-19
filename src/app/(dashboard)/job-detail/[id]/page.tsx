import ApplicantsPage from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import prisma from "../../../../../lib/prisma";

type paramsType = {
  id: string;
};

interface JobDetailPageProps {
  params: paramsType;
}

async function getDetailJob(id: string) {
  return await prisma.job.findFirst({
    where: {
      id: id,
    },
    include: {
      Applicant: {
        include: {
          user: true,
        },
      },
      CategoryJob: true,
    },
  });
}

const JobDetailPage: FC<JobDetailPageProps> = async ({ params }) => {
  const job = await getDetailJob(params.id);
  console.log(job);

  return (
    <div>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href={"/job-listing"}>
            <ArrowLeftIcon className="w-9 h-9" />
          </Link>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-1">{job?.roles}</div>
          <div>
            {job?.CategoryJob?.name} . {job?.jobType} . {job?.applicants}/
            {job?.needs} Hired
          </div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
        </TabsList>

        <TabsContent value="applicants">
          <ApplicantsPage applicants={job?.Applicant} />
        </TabsContent>

        <TabsContent value="jobDetails">
          <JobDetail detail={job} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobDetailPage;
