import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const FACEBOOK_NAME = process.env.FACEBOOK_NAME;
export const FACEBOOK_ID = process.env.FACEBOOK_ID;
export const COOKIES = JSON.parse(fs.readFileSync('cookies.json', 'utf-8'));