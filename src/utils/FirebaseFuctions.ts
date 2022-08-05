import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getRanking = async (id: any) => {
  try {
    console.log("response", id);
    const docRef = doc(db, "Ranking", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Ranking:", docSnap.data());
      const data = docSnap.data();
      return data.ranking;
    } else {
      console.log("followers No such document!");
    }
  } catch (err) {
    console.log(err);
  }
};

export const handleRanking = async (rankingId: any, ranking: number) => {
  // first add followers
  console.log("response", rankingId);
  await setDoc(doc(db, "Ranking", rankingId), { ranking });
  // setprofile followers
};

export const removeRanking = async (user: any, collectionId: any) => {
  await deleteDoc(doc(db, "Users", user.email, "Ranking", collectionId));
};

export const addRanking = async (
  user: any,
  collectionId: any,
  ranked: number
) => {
  await setDoc(doc(db, "Users", user.email, "Ranking", collectionId), {
    ranked: true,
  });
};

export const userRankedOrNot = async (
  id: any,
  user: any,
  collectionId: any
) => {
  try {
    console.log("response", id);
    const docRef = doc(db, "Users", user?.email, "Ranking", collectionId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Ranking:", docSnap.data());
      const data = docSnap.data();
      return data.ranked;
    } else {
      console.log("followers No such document!");
    }
  } catch (err) {
    console.log(err);
  }
};

/////////////////////////////////////////////////////////////////////////// ****  Followers Sections  **** \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const getFollowers = async (id: any) => {
  try {
    const id2 = id.toString();
    console.log("followers", id2);
    const docRef = doc(db, "Followers", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("followers:", docSnap.data());
      const data = docSnap.data();
      return data.followers;
    } else {
      console.log("followers No such document!");
    }
  } catch (err) {
    console.log(err);
  }
};

export const handleFollow = async (
  FollowersId: any,
  followers: number
) => {
  // console.log("response", rankingId);
  await setDoc(doc(db, "Followers", FollowersId), { followers });
};

export const userFollowOrNot = async (
  id: any,
  user: any,
  collectionId: any
) => {
  try {
    console.log("response", id);
    const docRef = doc(db, "Users", user?.email, "Followers", collectionId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Ranking:", docSnap.data());
      const data = docSnap.data();
      return data.follow;
    } else {
      console.log("followers No such document!");
    }
  } catch (err) {
    console.log(err);
  }
};


export const unFollow= async (user: any, collectionId: any) => {
  await deleteDoc(doc(db, "Users", user.email, "Followers", collectionId));
};

export const Follow = async (
  user: any,
  collectionId: any,
) => {
  await setDoc(doc(db, "Users", user.email, "Followers", collectionId), {
    follow: true,
  });
};

/////////////////////////////////////////////////////////////////////////////////  **** getData **** \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const getCollection = async (id: any) => {
  try {
    const docRef = doc(db, "Collections", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("collections:", docSnap.data());
      const data = docSnap.data();
      return data;
    } else {
      console.log("collections No such document!");
    }
  } catch (err) {
    console.log(err);
  }
};
