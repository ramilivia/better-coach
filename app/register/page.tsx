"use client";

import { AuthForm } from "@/components/auth-form";
import { useAuth } from "@/lib/auth-context";
import { CreateUserDocument, CreateUserMutation } from "@/lib/graphql/generated/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { setSession } = useAuth();
  
  const [createUser] = useMutation<CreateUserMutation>(CreateUserDocument, {
    onError: (error) => {
      setError(error.message);
    }
  });

  const handleSubmit = async (email: string, password: string) => {
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
    <AuthForm
      title="Register"
      description="Enter your details below to create an account"
      buttonText="Register"
      error={error}
      onSubmit={handleSubmit}
      footer="By clicking register you agree to our Terms of Service and Privacy Policy"
    />
  );
}