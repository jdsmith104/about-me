import * as admin from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";

admin.initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://jacobdsmith-81e81.firebaseio.com",
});

const db = admin.firestore();
export { admin, db };
