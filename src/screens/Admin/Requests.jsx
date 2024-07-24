import { DialogContent } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { CreditCard, DownloadIcon, Eye } from "lucide-react";
import FamilyRegistration from "../Employee/FamilyRegistration";

const Requests = () => {
  const invoices = [
    {
      id: 1,
      employee_id: "INV001",
      department: "App Dev"
    },
    {
      id: 2,
      employee_id: "INV001",
      department: "Innovations"
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
    <div className="">
      <Table className="lg:w-[550px] lg:m-5 border-2 ">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="hover:bg-none">
          <TableRow>
            <TableHead>S.No</TableHead>
            <TableHead>Employee ID</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>View</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{invoice.employee_id}</TableCell>
              <TableCell>{invoice.department}</TableCell>
              <TableCell>
                {
                  <Dialog>
                    <DialogTrigger>
                      <Eye strokeWidth={1} size={20} />
                    </DialogTrigger>
                    <DialogContent>
                      <FamilyRegistration />
                    </DialogContent>
                  </Dialog>
                }
              </TableCell>
              <TableCell className="flex items-center" onClick={() => handleClick(invoice)}>
                {
                  <button className="bg-green-500 rounded-[10px] p-2 flex items-center hover:bg-green-600">
                    Accept
                  </button>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Requests;
