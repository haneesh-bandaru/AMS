import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { endOfDay } from "date-fns";
import { CircleOff, CreditCard, DownloadIcon, BellRing } from "lucide-react";

const Payments = () => {
  const invoices = [
    {
      id: 1,
      employee_id: "6056",
      status: "Paid",
      amount: "$0",
      end_date: "07/10/2024"
    },
    {
      id: 2,
      employee_id: "6062",
      status: "Not Paid",
      amount: "$250.00",
      end_date: "07/10/2024"
    }

    // Add more invoices as needed
  ];

  const handleClick = invoice => {
    if (invoice.status === "Paid") {
      console.log(`Processing payment for Invoice ${invoice.invoice}`);
    } else {
      console.log(`Downloading Invoice ${invoice.invoice}`);
    }
  };

  return (
    <div className="flex justify-center flex-wrap mx-auto  items-center">
     <div className="w-[570px]">
     <Table className="lg:w-[550px] lg:m-5 border-2  w-[550px]">
        <TableCaption>A list of payment status.</TableCaption>
        <TableHeader className="hover:bg-none">
          <TableRow>
            <TableHead>S.No</TableHead>
            <TableHead>Employee ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{invoice.employee_id}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{invoice.end_date}</TableCell>
              <TableCell className="flex items-center" onClick={() => handleClick(invoice)}>
                {invoice.status === "Paid" ? (
                  <>
                    <CircleOff strokeWidth={1} size={20} />
                    {"  "}No Action
                  </>
                ) : (
                  <>
                    <>
                    <BellRing strokeWidth={1} size={20} />
                    {"  "}Notify
                  </>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </div>
    </div>
  );
};

export default Payments;
