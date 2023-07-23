import { UserCredential, User } from 'firebase/auth';
import { capitalize } from 'lodash';
import React, { useState, ReactNode, createContext, useEffect } from 'react';
import {
  signIn,
  signOut,
  signUp,
  validateSession,
} from 'services/authentication';

type Props = {
  children: ReactNode;
};

type AuthContextValue = {
  user?: User | null;
  isLoading: boolean;
  signInError?: string | null;
  signUpError?: string | null;
  onSignIn: (email: string, password: string) => Promise<void>;
  onSignUp: (
    email: string,
    password: string,
    repeatedPassword: string
  ) => Promise<void>;
  onSignOut: () => void;
};

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  isLoading: false,
  signInError: null,
  signUpError: null,
  onSignIn: async (_email: string, _password: string) => {},
  onSignUp: async (
    _email: string,
    _password: string,
    _repeatedPassword: string
  ) => {},
  onSignOut: async () => {},
});

export const AuthContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [signInError, setSignInError] = useState<string | null>(null);
  const [signUpError, setSignUpError] = useState<string | null>(null);

  useEffect(() => {
    validateSession(setUser, setIsLoading);
  }, []);

  const onSignIn = async (email: string, password: string) => {
    setIsLoading(true);
    setSignInError('');
    try {
      const response: UserCredential = await signIn(email, password);
      setUser(response.user);
    } catch (e: any) {
      const error =
        `Error: ${capitalize(e.code?.split('/')?.[1]?.replaceAll('-', ' '))}` ||
        '';
      setSignInError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSignUp = async (
    email: string,
    password: string,
    repeatedPassword: string
  ) => {
    setSignUpError('');
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setSignUpError('Error: Passwords do not match');
      return;
    }
    try {
      const response: UserCredential = await signUp(email, password);
      setUser(response.user);
    } catch (e: any) {
      const error =
        `Error: ${capitalize(e.code?.split('/')?.[1]?.replaceAll('-', ' '))}` ||
        '';
      setSignUpError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSignOut = () => {
    signOut(setUser);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        signInError,
        signUpError,
        onSignIn,
        onSignUp,
        onSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
