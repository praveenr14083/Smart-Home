import { db } from "../../../config/firebase.config.js";

const USERS_COLLECTION = "users";

export const AuthModel = {
  async findByEmail(email) {
    const snapshot = await db
      .collection(USERS_COLLECTION)
      .where("profile.email", "==", email)
      .limit(1)
      .get();

    if (snapshot.empty) return null;
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  },

  async createUser({ name, email, role, passwordHash }) {
    const newUser = {
      profile: { name, email, role, profileImage: null },
      auth: { passwordHash, createdAt: new Date().toISOString() },
    };

    const docRef = await db.collection(USERS_COLLECTION).add(newUser);
    return { id: docRef.id, ...newUser };
  },
};
