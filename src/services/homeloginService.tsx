import { setDoc } from "firebase/firestore";
import { db } from '@/services/firebase';
import { googleUser } from "@/types/userTypes";
import { doc, getDoc} from "firebase/firestore";


const userValidation = async (_props: googleUser) =>{
    const {displayName, email, uid, emailVerified} = _props;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        await setDoc(doc(db, "users", uid), {
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            uid: uid,
            isFormFilled: false,  
            instagramLinked: false,
            facebookLinked: false,
            twitterLinked: false,
          });
    }

}


export default userValidation;