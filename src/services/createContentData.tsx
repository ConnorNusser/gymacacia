import { DocumentData, DocumentReference, setDoc, updateDoc } from "firebase/firestore";
import { db } from '@/services/firebase';
import { doc, getDoc} from "firebase/firestore";
import { contentTypes } from "@/types/contentTypes";


const createContentData = async (_props: contentTypes) =>{
    const {uid, location, frequency, accountType, companyName, description} = _props;
    const contentRef = doc(db, "userContent", uid);
    const usersRef = doc(db, "cities", uid);
    await setDoc(contentRef, {
      uid: uid,
      location: location,
      frequency: frequency,
      accountType: accountType,
      companyName: companyName,
      description: description,
    });
    await updateDoc(usersRef, {
        isFormFilled: true  
      });
  }


export default createContentData;
