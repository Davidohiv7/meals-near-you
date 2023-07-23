import { onAuthStateChanged, User, getAuth } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';

type SetUser = Dispatch<SetStateAction<User | null>>;
type SetIsLoading = Dispatch<SetStateAction<boolean>>;

export const validateSession = (setUser: SetUser, setIsLoading: SetIsLoading) =>
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setUser(user);
    }
    setIsLoading(false);
  });
