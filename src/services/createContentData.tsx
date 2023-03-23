import { DocumentData, DocumentReference, setDoc, updateDoc } from "firebase/firestore";
import { db } from '@/services/firebase';
import { doc, getDoc} from "firebase/firestore";
import { contentTypes } from "@/types/contentTypes";


const createContentData = async (_props: contentTypes) =>{
    const {uid, location, frequency, accountType, companyName, description} = _props;
    const contentRef = doc(db, "userContent", uid);
    const usersRef = doc(db, "users", uid);
    await setDoc(contentRef, {
      uid: uid,
      location: location,
      frequency: frequency,
      accountType: accountType,
      companyName: companyName,
      description: description,
      instagramLinked: false,
      facebookLinked: false,
      twitterLinked: false,
    });
    await updateDoc(usersRef, {
        isFormFilled: true  
      });
  }


export default createContentData;
