import {app} from './config'
import * as Realm from "realm-web";

const login = async (email, password) => {
  const credentials = Realm.Credentials.emailPassword(email, password);
  try {
    const user = await app.logIn(credentials);
    return user
  } catch (err) {
    return null
  }
}

const signup = async (email, password) => {
  try {
    const user = await app.emailPasswordAuth.registerUser({ email, password });
    return user
  } catch (err) {
    return null
  }
}

const logout = async () => {
  if (!app.currentUser) return false;
  try {
    await app.currentUser.logOut();
  } catch (err) {
    alert("Failed to log out", err);
  }
}

const confirmEmail = async (token, tokenId) => {
  try {
    await app.emailPasswordAuth.confirmUser({ token, tokenId });
    return true
  } catch (err) {
    alert("Failed to confirm email", err);
  }
} 

export { login, signup, logout, confirmEmail }