import { UserCredential, User, AuthError } from 'firebase/auth';
import { capitalize } from 'lodash';
import React, { useState, ReactNode, createContext, useEffect } from 'react';
import { signIn } from 'services/authentication';

type Props = {
  children: ReactNode;
};

type AuthContextValue = {
  user?: User | null;
  isLoading: boolean;
  error?: string | null;
  onSignIn: (email: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  isLoading: false,
  error: null,
  onSignIn: async (_email: string, _password: string) => {},
});

export const AuthContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSignIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError('');
    try {
      const response: UserCredential = await signIn(email, password);
      setUser(response.user);
    } catch (e: any) {
      const error =
        `Error: ${capitalize(e.code?.split('/')?.[1]?.replaceAll('-', ' '))}` ||
        '';
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        error,
        onSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
