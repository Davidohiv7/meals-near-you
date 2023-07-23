import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const signUp = (email: string, password: string) =>
  createUserWithEmailAndPassword(getAuth(), email, password);

export default signUp;
