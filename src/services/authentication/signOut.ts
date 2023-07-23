import { User, getAuth, signOut as firebaseSignOut } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';

type SetUser = Dispatch<SetStateAction<User | null>>;

export const signOut = (setUser: SetUser) => {
  setUser(null);
  firebaseSignOut(getAuth());
};
