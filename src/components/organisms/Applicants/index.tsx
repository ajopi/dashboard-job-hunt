import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  JOB_APPLICANT_COLUMNS,
  JOB_APPLICANT_DATA,
  JOB_LISTING_DATA,
} from "@/constants";
import React, { FC } from "react";
import ButtonActionTable from "../ButtonActionTable";

interface ApplicantsPageProps {}

const ApplicantsPage: FC<ApplicantsPageProps> = ({}) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANT_COLUMNS.map((items: string, i: number) => {
            return <TableHead key={items + i}>{items}</TableHead>;
          })}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {JOB_APPLICANT_DATA.map((item: any, index: number) => {
          return (
            <TableRow key={item.name + index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.appliedDate}</TableCell>
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
