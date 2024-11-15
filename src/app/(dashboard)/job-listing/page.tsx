import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from "@/constants";
import { Badge } from "@/components/ui/badge";
import ButtonActionTable from "@/components/organisms/ButtonActionTable";

interface JobListingPageProps {}

const JobListingPage: FC<JobListingPageProps> = ({}) => {
  return (
    <div>
      <div className="font-semibold text-3xl">Job Listings</div>
      <div className="mt-10">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_LISTING_COLUMNS.map((items: string, i: number) => {
                return <TableHead key={items + i}>{items}</TableHead>;
              })}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {JOB_LISTING_DATA.map((item: any, index: number) => {
              return (
                <TableRow key={item.roles + index}>
                  <TableCell>{item.roles}</TableCell>
                  <TableCell>
                    <Badge>{item.status}</Badge>
                  </TableCell>
                  <TableCell>{item.datePosted}</TableCell>
                  <TableCell>{item.dueDate}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.jobType}</Badge>
                  </TableCell>
                  <TableCell>
                    {item.applicants}/{item.needs}
                  </TableCell>
                  <TableCell>
                    <ButtonActionTable url="/job-detail/1" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default JobListingPage;
