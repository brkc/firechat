import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

export function signup(email: string, password: string) {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export function login(email: string, password: string) {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}
