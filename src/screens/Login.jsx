import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";

import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: ""
  });

  const { toast } = useToast();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    console.log(loginDetails);
    if (loginDetails.userName === "admin" && loginDetails.password === "password") {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [loginDetails]);

  const handleInputChange = e => {
    const { id, value } = e.target;
    setLoginDetails(prevDetails => ({
      ...prevDetails,
      [id]: value
    }));
  };

  return (
    <div>
      <Card className="mx-auto max-w-sm translate-y-[25%]">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required onChange={handleInputChange} />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={() => {
                toast({
                  variant: !success ? "destructive" : "default",
                  title: !success ? "Oops try again" : "Success",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                  action: <ToastAction altText="Try again">Try again</ToastAction>
                });
              }}
            >
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
};

export default Login;
