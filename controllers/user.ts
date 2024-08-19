import { Request, Response } from "express";
import UserModel, { User } from "../models/user";

function checkNameAndAge(name?: any, age?: any): string | null {
  // Name check
  if (!name) return "Name is required";
  if (typeof name !== "string") return "Name must be a string";
  if (name.length < 2) return "Name must be at least 2 characters";
  if (name.length >= 25) return "Name must be less than 25 characters";
  // Age check
  if (!age) return "Age is required";
  if (typeof age !== "number" || !Number.isInteger(age)) {
    return "Age must be an integer";
  }
  if (age < 0) return "Age must be greater than 0";
  if (age > 120) return "Age must be less than 120";
  return null;
}

async function getAll(req: Request, res: Response): Promise<void> {
  try {
    const users: User[] = await UserModel.getAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function add(req: Request, res: Response): Promise<void> {
  try {
    const { name, age } = req.body;
    let errorMessage: string | null = checkNameAndAge(name, age);
    if (errorMessage) {
      res.status(400).json({ message: errorMessage });
      return;
    }
    const newUser: User = await UserModel.add(name, age);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default { getAll, add };
