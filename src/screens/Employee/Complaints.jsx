import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const Complaints = () => {
  const [complaintData, setComplaintData] = useState({
    problemType: "",
    complaintTitle: "",
    complaintDescription: "",
    complaintImage: []
  });

  const handleInputChange = e => {
    const { id, value } = e.target;
    setComplaintData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFileChange = e => {
    const files = Array.from(e.target.files);
    setComplaintData(prevData => ({
      ...prevData,
      complaintImages: files
    }));
  };

  const handleSelectChange = value => {
    setComplaintData(prevData => ({
      ...prevData,
      problemType: value
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", complaintData);
    // Add code here to handle form submission
  };

  return (
    <div className="mx-6 mt-8">
      <Card className="bg-card text-card-foreground mx-auto max-w-sm lg:translate-y-[10%]">
        <CardHeader>
          <h1 className="text-2xl">Complaints</h1>
          <CardDescription>
            <span className="">Enter your complaints below</span>
          </CardDescription>
          <Separator />
        </CardHeader>

        <CardContent className="">
          <div className="mb-5">
            <Label className="mb-[-15px]">Problem Type</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Select your problem type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="water">Water Issue</SelectItem>
                  <SelectItem value="power">Power Issue</SelectItem>
                  <SelectItem value="power">Payment issues</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Label htmlFor="complaintTitle">Complaint Title</Label>
          <Input
            type="text"
            className="mb-5"
            id="complaintTitle"
            placeholder="Enter your complaint title"
            value={complaintData.complaintTitle}
            onChange={handleInputChange}
          />

          <Label className="mt-5" htmlFor="complaintDescription">
            Complaint Description
          </Label>
          <Textarea
            placeholder="Enter your complaints here"
            id="complaintDescription"
            className="mb-5"
            value={complaintData.complaintDescription}
            onChange={handleInputChange}
          />

          <Label className="mt-5" htmlFor="complaintImage">
            Upload Image
          </Label>
          <Input
            type="file"
            accept=".jpg, .png, .jpeg"
            multiple
            id="complaintImage"
            onChange={handleFileChange}
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="justify-end" onClick={handleSubmit}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Complaints;
