import {
  collection,
  addDoc,
  where,
  query,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../firebase";

import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../_context";

const queryParams = new URLSearchParams(window.location.search);
const refralurl = queryParams.get("refID");

export const UseFirebase = async (email: any) => {
  const useresref = collection(db, "users");
  let user = {};
  const createNewUser = async () => {
    const newrefID = uuidv4();
    // console.log(newrefID);
    const newuserData = {
      email: email,
      points: 0,
      refID: newrefID,
      created_at: Date.now(),
    };
    await addDoc(useresref, newuserData);

    user = { ...newuserData };
    toast("success");
    console.log(user);
  };

  // console.log("its running ")
  // console.log(email)
  if (email) {
    // console.log(email);
    const emailQuery = query(useresref, where("email", "==", email));
    const usersExist = (await getDocs(emailQuery)).docs.length;
    if (usersExist) {
      const userexistref = query(useresref, where("email", "==", email));
      const existeduserData = (await getDocs(userexistref)).docs[0].data();
      user = { ...existeduserData };
      toast.success("user already exist");
      console.log(existeduserData);
    } else {
      if (!refralurl) {
        createNewUser();
      } else {
        const userq = query(useresref, where("refID", "==", refralurl));
        const refralUser = await getDocs(userq);
        // console.log(refralUser);
        if (!refralUser.empty) {
          const refralUserDaata = refralUser.docs[0].data();
          const docref = doc(useresref, refralUser.docs[0].id);
          updateDoc(docref, {
            points: refralUserDaata.points + 1,
          });
          // console.log(refralUserDaata);
          createNewUser();
        } else {
        }
      }
    }
  }
};

// console.log(email)
//             const sortedArray: any = [];
//             const sortedUser = collection(db, "users");
//             const q = query(
//                 sortedUser,
//                 orderBy("points", "desc"),
//                 orderBy("created_at", "asc")
//             );

//             const sortedUsers = (await getDocs(q)).docs;
//             sortedUsers.forEach((doc) => {
//                 sortedArray.push({ ...doc.data(), id: doc.id });
//             });
//             // console.log(sortedArray)
//             const userQuery = query(sortedUser, where("email", "==", email));
//             newuser = (await getDocs(userQuery)).docs[0].data();

//             myurl = `${window.location.protocol}//${window.location.host}/?refID=${newuser ? newuser.refID : ""
//                 }`;
//             setrefLink(myurl);

//             if (newuser) {
//                 sortedArray.forEach((item: any) => {
//                     if (newuser.refID === item.refID) {
//                         // console.log("found it damn ")
//                         setRank(sortedArray.indexOf(item) + 1500);
//                     }
//                 });
//             } else {
//                 console.log(" user not found ")
//             }
