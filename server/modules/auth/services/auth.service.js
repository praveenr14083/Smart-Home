import { AuthUser } from "../models/auth.model.js";
import { hashPassword, comparePassword } from "../../../utils/hash.js";
import { generateToken } from "../../../utils/jwt.js";

export const registerUser = async (userData) => {
  const existingUser = await AuthUser.findOne({
    "profile.email": userData.email,
  });
  if (existingUser) throw new Error("User already exists");

  const passwordHash = await hashPassword(userData.password);

  const user = new AuthUser({
    profile: {
      name: userData.name,
      email: userData.email,
      role: userData.role || "Member",
      profileImage: userData.profileImage || "",
    },
    auth: {
      passwordHash,
    },
  });

  await user.save();

  const token = generateToken({ id: user._id });
  user.auth.jwtToken = token;
  await user.save();

  return { user, token };
};

export const loginUser = async ({ email, password }) => {
  const user = await AuthUser.findOne({ "profile.email": email });
  if (!user) throw new Error("User not found");

  const isValid = await comparePassword(password, user.auth.passwordHash);
  if (!isValid) throw new Error("Invalid password");

  const token = generateToken({ id: user._id });
  user.auth.jwtToken = token;
  await user.save();

  return { user, token };
};

export const getProfile = async (userId) => {
  const user = await AuthUser.findById(userId).select("-auth.passwordHash");
  if (!user) throw new Error("User not found");
  return user;
};
