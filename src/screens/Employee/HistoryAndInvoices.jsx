import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { CreditCard, DownloadIcon } from "lucide-react";

const HistoryAndInvoices = () => {
  const invoices = [
    {
      id: 1,
      invoice: "INV001",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00"
    },
    {
      id: 2,
      invoice: "INV001",
      status: "Not Paid",
      method: "Credit Card",
      amount: "$250.00"
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
      <div className="mx-auto mt-20">
        <Table className="lg:w-[500px] lg:m-5 border-2 ">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className="hover:bg-none">
            <TableRow>
              <TableHead>S.No</TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={invoice.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell className="flex items-center cursor-pointer" onClick={() => handleClick(invoice)}>
                  {invoice.status === "Paid" ? (
                    <>
                      <CreditCard strokeWidth={1} size={20} />
                      Pay
                    </>
                  ) : (
                    <>
                      <DownloadIcon strokeWidth={1} size={20} />
                      Download Invoice
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

export default HistoryAndInvoices;
