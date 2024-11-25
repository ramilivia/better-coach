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
import { useState } from "react";

type AuthFormProps = {
  title: string;
  description: string;
  buttonText: string;
  error?: string | null;
  onSubmit: (email: string, password: string) => Promise<void>;
  footer?: React.ReactNode;
}

export function AuthForm({
  title,
  description,
  buttonText,
  error,
  onSubmit,
  footer,
}: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="mt-8 mx-6 mx-auto max-w-sm pt-6 pb-6 border-white min-w-80">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-white">
            {description}
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
            <Button type="submit" className="w-full mt-4" variant="outline">
              {buttonText}
            </Button>
          </form>
          {footer && (
            <CardDescription className="mt-10">
              {footer}
            </CardDescription>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 