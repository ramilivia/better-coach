"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { CreateUserDocument, CreateUserMutation } from "@/lib/graphql/generated/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { setSession } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [createUser] = useMutation<CreateUserMutation>(CreateUserDocument, {
    onError: (error) => {
      setError(error.message);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setError(null);
    
    const { data } = await createUser({
      variables: {
        payload: { email, password, provider: "email" }
      }
    });

    if (data?.createUser) {
      setSession(data.createUser.accessToken, data.createUser.authToken);
      router.push('/');
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="mt-8 mx-6 mx-auto max-w-sm pt-6 pb-6 border-white min-w-80">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription className="text-white">
            Enter your details below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                className="w-full p-2 border rounded-md bg-transparent"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className="w-full p-2 border rounded-md bg-transparent"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repeatPassword">Repeat Password</Label>
              <Input
                id="repeatPassword"
                type="password"
                className="w-full p-2 border rounded-md bg-transparent"
                placeholder="Repeat your password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full mt-4" variant="outline">
              Register
            </Button>
          </form>
          <CardDescription className="mt-5">
            By clicking register you agree to our Terms of Service and Privacy Policy
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}