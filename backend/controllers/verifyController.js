import { NocUserAuth } from "../models/user.model.js";

export const verify = async (req, res) => {
  console.log("Inside verify controller  req.id-", req.id);
  try {
    if (!req.id) {
      return res.status(401).json({
        auth: false,
        message: "User not authenticated",
      });
    }

   const user = await NocUserAuth.findById(req.id).select(
     "userInfo userAuth.email",
   );

    console.log("user", user);
    return res.status(200).json({
      auth: true,
      user: user || null,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ auth: false, message: "Error verifying user" });
  }
};
