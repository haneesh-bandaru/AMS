import { Card, CardContent, CardHeader } from "@/components/ui/card";
import add from "../../assets/icons/add.svg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FamilyRegistration from "./FamilyRegistration";

const Members = () => {

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
    <div className="flex gap-5 mt-24 mx-5">
      <Card className="w-[300px]">
        <CardHeader></CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <img
              src={`https://avatar.iran.liara.run/public/boy/?username=${details.firstName}`}
              alt={`${details.firstName} view`}
              width={150}
            />
            <p className="text-lg">{details.firstName}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="w-[300px]">
        <CardContent>
          <Dialog >
            <DialogTrigger>
              <img
                src={add}
                width={400}
                className="transform translate-y-[70%] md:translate-y-[5%] lg:translate-y-[5%]"
              />
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
