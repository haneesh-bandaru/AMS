import { Card, CardContent } from "@/components/ui/card";
import add from "../../assets/icons/add.svg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FamilyRegistration from "./FamilyRegistration";
import { useState } from "react";

function Skeleton() {
  return (
    <>
    </>
  )
}

const Members = () => {
  const [loading, setLoading] = useState(false);

  const details = {
    firstName: "John",
    lastName: "Doe",
    middleName: "Michael",
    mobileNumber: "+1234567890",
    altMobileNumber: "+0987654321",
    maritalStatus: "Single",
    picture: "path/to/picture.jpg",
    dateOfBirth: "1990-01-01",
    dateOfBirth2: "1990-01-01",
    address: "123 Main Street, Anytown, Anycountry"
  };

  return (
    <div className="flex gap-5 m-6">
      <Card className="w-[200px] h-[250px]">
        <CardContent>
          <div className="flex flex-col items-center m-auto transform translate-y-[10%]">
            <img
              src={`https://avatar.iran.liara.run/public/boy/?username=${details.firstName}`}
              alt={`${details.firstName} view`}
              width={150}
            />
            <p className="text-lg">{details.firstName}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="w-[200px] h-[250px]">
        <CardContent>
          <Dialog>
            <DialogTrigger>
              <div className="flex flex-col items-center m-auto transform translate-y-[10%]">
                <img src={add} width={400} />
                <p className="text-lg">Add Member</p>
              </div>
            </DialogTrigger>
            <DialogContent className="border-2 rounded-lg p-10 m-5 lg:w-[600px] flex flex-col gap-5">
              <FamilyRegistration />
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default Members;
