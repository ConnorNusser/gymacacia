import { DocumentData, DocumentReference, setDoc, updateDoc } from "firebase/firestore";
import { db } from '@/services/firebase';
import { doc, getDoc} from "firebase/firestore";
import { ISocialMediaLinkInfo } from "@/types/contentTypes";
import { SocialMediaEnums} from "@/types/contentTypes"

const linkSocialMediaData = async (_props: ISocialMediaLinkInfo) =>{
    const {uid, username, password, socialsite} = _props;
    const loginRef = doc(db, "userLogin", uid);
    const contentRef = doc(db, "userContent", uid);
    const docPass = await getDoc(loginRef);
    if (!docPass.exists()){
      await setDoc(doc(db, "userLogin", uid), {
        uid: uid,
        igUserName: '', 
        igPassword: '',
        fbUserName: '',
        fbPassword: '',
        twitterUserName: '',
        twitterPassword: '',
      });
    }
    if (socialsite == SocialMediaEnums.Instagram) {
      await updateDoc(loginRef, {
        igUserName: username,
        igPassword: password,
      });
      await updateDoc(contentRef, {
        instagramLinked: true  
      });
    } else if(socialsite == SocialMediaEnums.Facebook){
      await updateDoc(loginRef, {
        twitterUserName: username,
        twitterPassword: password,
      });
      await updateDoc(contentRef, {
        twitterLinked: true  
      });
    } else if(socialsite == SocialMediaEnums.Twitter){
      await updateDoc(loginRef, {
        fbUserName: username,
        fbPassword: password,
      });
      await updateDoc(contentRef, {
        facebookLinked: true  
      });
  }
}

export default linkSocialMediaData;