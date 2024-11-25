"use client";

import { AuthForm } from "@/components/auth-form";
import { useAuth } from "@/lib/auth-context";
import { UserLoginMutation } from "@/lib/graphql/generated/graphql";
import { userLoginDocument } from "@/lib/graphql/mutations/user-login";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { setSession } = useAuth();
  
  const [login] = useMutation<UserLoginMutation>(userLoginDocument, {
    onError: (error) => {
      setError(error.message);
    }
  });

  const handleSubmit = async (email: string, password: string) => {
    setError(null);
    const { data } = await login({
      variables: {
        email, 
        password
      }
    });

    if (data?.userLogin) {
      setSession(data.userLogin.accessToken, data.userLogin.authToken);
      router.push('/');
    }
  };

  return (
    <AuthForm
      title="Login"
      description="Enter your details below to login to your account"
      buttonText="Login"
      error={error}
      onSubmit={handleSubmit}
    />
  );
}
