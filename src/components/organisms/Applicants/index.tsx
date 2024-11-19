import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  JOB_APPLICANT_COLUMNS,
} from "@/constants";
import React, { FC } from "react";
import ButtonActionTable from "../ButtonActionTable";

interface ApplicantsPageProps {
  applicants: any;
}

const ApplicantsPage: FC<ApplicantsPageProps> = ({ applicants }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANT_COLUMNS.map((items: string, i: number) => {
            return <TableHead key={items + i}>{items}</TableHead>;
          })}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicants &&
          applicants.map((item: any, index: number) => {
            return (
              <TableRow key={item.id + index}>
                <TableCell>{item.user.name}</TableCell>
                <TableCell>
                  <ButtonActionTable url="" />
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default ApplicantsPage;
