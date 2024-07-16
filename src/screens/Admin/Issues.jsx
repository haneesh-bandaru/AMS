import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Eye } from "lucide-react";

const Issues = () => {
  const invoices = [
    {
      id: 1,
      employee_id: "6054",
      flat_no: "101"
    },
    {
      id: 2,
      employee_id: "6056",
      flat_no: "102"
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
    <div className="flex justify-center mx-auto ">
      <center>
        <Table className="lg:w-[550px] lg:m-5 border-2 ">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className="hover:bg-none">
            <TableRow>
              <TableHead>S.No</TableHead>
              <TableHead>Employee ID</TableHead>
              <TableHead>Flat No.</TableHead>
              <TableHead>Images</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={invoice.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{invoice.employee_id}</TableCell>
                <TableCell>{invoice.flat_no}</TableCell>
                <TableCell>
                  {
                    <Dialog>
                      <DialogTrigger>
                        <Eye strokeWidth={1} size={20} />
                      </DialogTrigger>
                      <DialogContent>
                        <img></img>
                      </DialogContent>
                    </Dialog>
                  }
                </TableCell>
                <TableCell className="flex items-center" onClick={() => handleClick(invoice)}>
                  {
                    <button className="bg-green-500 rounded-[10px] p-2 flex items-center hover:bg-green-600">
                      Resolved
                    </button>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </center>
    </div>
  );
};

export default Issues;
