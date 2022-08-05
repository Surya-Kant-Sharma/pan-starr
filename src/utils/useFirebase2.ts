import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

import {
  collection,
  addDoc,
  where,
  query,
  getDocs,
  updateDoc,
  doc,
  orderBy,
} from "firebase/firestore";
import { async } from "@firebase/util";

const useresref = collection(db, "users");

const checkRefUrlExists = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const refid = queryParams.get("refID");
  if (refid) {
    return [true, refid];
  } else {
    return [false, undefined];
  }
};

export const checkIFUserExist = async (email: string) => {
  const emailQuery = query(useresref, where("email", "==", email));
  const usersExist = (await getDocs(emailQuery)).docs;

  if (usersExist.length !== 0) {
    return [true, usersExist[0].data()];
  } else {
    return [false, undefined];
  }
};

export const createUser = async (email: string) => {
  const newrefID = uuidv4();

  const newuserData = {
    email: email,
    points: 0,
    refID: newrefID,
    created_at: Date.now(),
  };
  return await addDoc(useresref, newuserData);
};

export const updatePoints = async (refId: any) => {
  const userq = query(useresref, where("refID", "==", refId));
  const refralUser = await getDocs(userq);

  if (!refralUser.empty) {
    const refralUserDaata = refralUser.docs[0].data();
    const docref = doc(useresref, refralUser.docs[0].id);
    updateDoc(docref, {
      points: refralUserDaata.points + 1,
    });
    return "point updated by 1 ";
  }
  return "ref id not exist ";
};

export const getRank = async (email: string) => {
  let rank: any;
  const sortedUserArray: any = [];
  const q = query(
    useresref,
    orderBy("points", "desc"),
    orderBy("created_at", "asc")
  );

  const sortedUsers = (await getDocs(q)).docs;
  sortedUsers.forEach((doc) => {
    sortedUserArray.push({ ...doc.data(), id: doc.id });
  });

  sortedUserArray.forEach((item: any) => {
    // console.log(item.email)
    if (item.email == email) {
      rank = sortedUserArray.indexOf(item) + 1500;
      console.log(rank);
    }
  });

  return rank;
};

export const getUserRefUrl = async (email: string) => {
  const userQuery = query(useresref, where("email", "==", email));
  const user = (await getDocs(userQuery)).docs[0].data();

  const myurl = `${window.location.protocol}//${window.location.host}/?refID=${
    user ? user.refID : ""
  }`;

  return myurl;
};

export default checkRefUrlExists;
