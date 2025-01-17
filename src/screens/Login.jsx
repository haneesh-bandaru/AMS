import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
    }));
  };

  const handleLogin = () => {
    if (
      (loginDetails.email === "admin" || loginDetails.email === "employee") &&
      loginDetails.password === "password"
    ) {
      if (loginDetails.email === "admin") {
        navigate("/admin/dashboard");
      } else if (loginDetails.email === "employee") {
        navigate("/employee");
      }
      setLoginDetails({ email: "", password: "" });
      toast({
        variant: "default",
        title: "Success",
        description: "Logged in successfully",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Oops try again",
        description: "Incorrect email or password",
        action: <ToastAction altText="Try again">Try again</ToastAction>
      });
    }
  };

  return (
    <div>
      <Card className="bg-card text-card-foreground mx-auto max-w-sm translate-y-[25%]">
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
                value={loginDetails.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={loginDetails.password}
                onChange={handleInputChange}
              />
            </div>
            <Button
              type="button"
              className="w-full"
              onClick={handleLogin}
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
