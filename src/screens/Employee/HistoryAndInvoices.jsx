import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CreditCard, DownloadIcon, ReceiptText } from "lucide-react";

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
  ];

  const handleClick = invoice => {
    if (invoice.status === "Paid") {
      console.log(`Processing payment for Invoice ${invoice.invoice}`);
    } else {
      console.log(`Downloading Invoice ${invoice.invoice}`);
    }
  };

  return (
    <div className="flex flex-col mt-6 ml-6 lg:flex-row gap-4 ">
      {invoices.map((items, index) => (
        <div key={index} className="  overflow-scroll lg:overflow-auto">
          <Card className="w-56">
            <CardHeader></CardHeader>
            <CardContent>
              <p className="text-xl uppercase flex items-center">
                <ReceiptText />
                {items.invoice}
              </p>
              <div>Status: {items.status}</div>
              <div>Method: {items.method}</div>
              <div>Amount: {items.amount}</div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  handleClick(items);
                }}
              >
                {items.status === "Paid" ? (
                  <>
                    <CreditCard strokeWidth={1} size={20} />
                    Pay Amount
                  </>
                ) : (
                  <>
                    <DownloadIcon strokeWidth={1} size={20} />
                    Download Invoice
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HistoryAndInvoices;
