import { UserAuthentication } from "../../../server/controller/Users";
import cookie from "cookie";

export default async function handler(req, res) {
  const { username, password } = req.body;

  const data = await UserAuthentication({ username, password });
   
  if (data.status === "SUCCESS") {
    res.status(200).json(data);
    
  } else if (data.status === "ERROR") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token",data.token , {
        httpOnly:true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 24 * 7,
        sameSite:"strict",
        path:"/"
      })
    )
    res.status(400).json(data);
  }
}
