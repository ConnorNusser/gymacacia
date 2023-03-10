import { DocumentData, DocumentReference, setDoc } from "firebase/firestore";
import { db } from '@/services/firebase';
import { doc, getDoc} from "firebase/firestore";
import { contentTypes } from "@/types/contentTypes";


const createContentData = async (_props: contentTypes) =>{
    const {uid, location, frequency, accountType, companyName, description} = _props;
    const docRef = doc(db, "userContent", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        await setDoc(doc(db, "userContent", uid), {
          uid: uid,
          location: location,
          frequency: frequency,
          accountType: accountType,
          companyName: companyName,
          description: description,
        });
        await UpdateDoc(doc(db, "users", uid), {
            isFormFilled: true  
          });
    }

}


export default createContentData;

function UpdateDoc(arg0: DocumentReference<DocumentData>, arg1: { isFormFilled: boolean; }) {
  throw new Error("Function not implemented.");
}
