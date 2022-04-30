/*
 *  POST: /add-project - add project to db
 *  GET: /all-projects: - get all projects
 *  GET: /project?id=<id>
 *
 *
 */

import * as functions from "firebase-functions";
import * as express from "express";
import { addEntry } from './entryController'

const app = express();

app.post('/entries', addEntry)
app.get("/", (req, res) => res.status(200).send("Hey there!"));
exports.app = functions.https.onRequest(app);
