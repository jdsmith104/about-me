/*
 *  POST: /addProject - add project to db
 *  GET: /getProjects: - get all projects
 *  GET: /getProjects?id=<id>
 *
 *
 */

import * as functions from "firebase-functions";
import { db } from "./config/firebase";
const cors = require("cors")({ origin: true });

exports.getProjects = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const snapshot = await db.collection("projects").get();

      const projectID: any = req.query?.id;
      let data;
      if (projectID) {
        const filteredQuery = snapshot.query.where("id", "==", projectID);
        const querySnapshot = await filteredQuery.get();
        data = querySnapshot.docs[0].data();
        console.log(querySnapshot.size, data);
      } else {
        data = snapshot.docs.map((doc) => doc.data());
      }

      res.status(200).send({
        status: "success",
        data: data,
      });
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  });
});

exports.addProject = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const { title, icon, technologies, tagline, href } = req.body;
      const project = db.collection("projects").doc();
      const projectObject = {
        id: project.id,
        title,
        icon,
        technologies,
        tagline,
        href,
      };

      project.set(projectObject);

      res.status(200).send({
        status: "success",
        message: "project added successfully",
        data: projectObject,
      });
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  });
});

exports.testConnection = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    res.status(200).send("Connected to firebase!");
  });
});
