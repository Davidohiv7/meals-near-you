import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(getAuth(), email, password);

export default signIn;
