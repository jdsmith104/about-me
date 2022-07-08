import { Response } from "express";
import { db } from "./config/firebase";

type ProjectType = {
  title: string;
  icon: string;
  technology: Array<string>;
  tagline: string;
  href: string;
};

type Request = {
  body: ProjectType;
  params: { entryId: string };
};

const postProject = async (req: Request, res: Response) => {
  const { title, icon, technology, tagline, href } = req.body;
  try {
    const project = db.collection("projects").doc();
    const projectObject = {
      id: project.id,
      title,
      icon,
      technology,
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
};

const getProjects = async (req: any, res: Response) => {
  try {
    const snapshot = await db.collection("projects").get();

    const projectID: string = req.query?.id;
    let data;
    if (projectID) {
      console.log("Hiya", projectID);
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
};

export { postProject, getProjects };
