import dotenv from "dotenv"

dotenv.config()

export const MONGO_URI= process.env.MONGO_URI || "htpp:atlas.test"
export const PORT= process.env.PORT || 3001