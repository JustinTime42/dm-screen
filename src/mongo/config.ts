import * as Realm from "realm-web";
const {
  BSON: { ObjectId },
} = Realm;
const REALM_APP_ID = "application-0-xeiof"; 
export const app = new Realm.App({ id: REALM_APP_ID });

