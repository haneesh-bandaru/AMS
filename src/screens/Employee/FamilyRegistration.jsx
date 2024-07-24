import { useForm } from "react-hook-form";
import DatePicker from "@/components/Date";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";

const FamilyRegistration = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 border-2 rounded-lg p-4 overflow-y-scroll overflow-x-hidden lg:w-[450px] h-[500px] ">
      <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5">
        <div className="grid w-fit max-w-sm items-center gap-1.5">
          <Label htmlFor="firstName">First name</Label>
          <Input type="text" id="firstName" placeholder="First name" {...register("firstName")} />
        </div>
        <div className="grid w-fit  max-w-sm items-center gap-1.5">
          <Label htmlFor="lastName">Last Name</Label>
          <Input type="text" id="lastName" placeholder="Last Name" {...register("lastName")} />
        </div>
        <div className="grid w-fit max-w-sm items-center gap-1.5">
          <Label htmlFor="middleName">Middle Name</Label>
          <Input type="text" id="middleName" placeholder="Middle Name" {...register("middleName")} />
        </div>
      </div>

      <div className="NUMBERS flex flex-col lg:flex-row gap-5">
        <div className="grid w-fit max-w-sm items-center gap-1.5">
          <Label htmlFor="mobileNumber">Mobile Number</Label>
          <Input type="tel" id="mobileNumber" placeholder="Mobile Number" required {...register("mobileNumber")} />
        </div>
        <div className="grid w-fit max-w-sm items-center gap-1.5">
          <Label htmlFor="altMobileNumber">Alternative Mobile Number</Label>
          <Input type="tel" id="altMobileNumber" placeholder="Alternative Mobile Number" {...register("altMobileNumber")} />
        </div>
      </div>

      <div>
        <Label className="mb-[-15px]">Relation</Label>
        <Select {...register("relation")}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Relation" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Father">Father</SelectItem>
              <SelectItem value="Mother">Mother</SelectItem>
              <SelectItem value="Spouse">Spouse</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-fit max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" {...register("picture")} />
      </div>

      <div className="flex flex-col lg:flex-row gap-3">
        <div className="gap-1 w-fit">
          <Label>Date of Birth</Label>
          <input type="date" className="border-2 rounded-lg p-1" {...register("dateOfBirth")} />
        </div>
        <div className=" flex-col gap-1 w-fit">
          <Label>Date of Birth 2</Label>
          <input type="date" className="border-2 rounded-lg p-1" {...register("dateOfBirth2")} />
        </div>
      </div>

      <div className="flex flex-col w-fit  lg:w-full  gap-1 ">
        <Label htmlFor="address">Address</Label>
        <Textarea placeholder="Enter your address here." id="address" rows="4" cols="50" {...register("address")} />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FamilyRegistration;
