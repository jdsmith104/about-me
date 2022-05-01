import { Response } from "express";
import { db } from "./config/firebase";

type EntryType = {
  title: string;
  text: string;
  coverImageUrl: string;
};

type Request = {
  body: EntryType;
  params: { entryId: string };
};

db.collection("entries")
    .doc()
    .create({ title: "", text: "", coverImageUrl: "" });

const addEntry = async (req: Request, res: Response) => {
  const { title, text } = req.body;
  try {
    const entry = db.collection("entries").doc();
    const entryObject = {
      id: entry.id,
      title,
      text,
    };

    entry.set(entryObject);

    res.status(200).send({
      status: "success",
      message: "entry added successfully",
      data: entryObject,
    });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

const getAllEntries = async (req: Request, res: Response) => {
  try {
    const allEntries = await db.collection("entries").get();
    return res.status(200).json(allEntries.docs);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export { addEntry, getAllEntries };
