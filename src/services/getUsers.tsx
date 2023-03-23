import { DocumentData, DocumentReference, setDoc, updateDoc } from "firebase/firestore";
import { db } from '@/services/firebase';
import { doc, getDoc} from "firebase/firestore";
import { contentTypes } from "@/types/contentTypes";
import { UserAuth } from "@/context/authcontext";
import { useEffect } from "react";


const getUserInfo = async(user: any) => {
    if (user.uid != null) {
        const usersRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(usersRef);
        if (docSnap.exists()) {
        const userData = docSnap.data();
        return userData;
        } else {
        console.log("No such document!");
        }
    }
}
export default getUserInfo;
