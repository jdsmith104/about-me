/*
 *  POST: /projects - add project to db
 *  GET: /projects: - get all projects
 *  GET: /projects?id=<id>
 *
 *
 */

import * as functions from "firebase-functions";
import * as express from "express";
import { getProjects, postProject } from "./projectsController";
const cors = require("cors");

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.post("/projects", postProject);
app.get("/projects", getProjects);
app.get("/", (req, res) => res.status(200).send("Hey there!"));
exports.app = functions.https.onRequest(app);
