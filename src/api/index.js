import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req, res) => {
  return res.json({ message: "this works" });
};