import { DocumentData, DocumentReference, QueryDocumentSnapshot, setDoc, SnapshotOptions, updateDoc } from "firebase/firestore";
import { db } from '@/services/firebase';
import { doc, getDoc} from "firebase/firestore";
import { socialMediaLinkStatus } from "@/intefaces/socialMediaLinkStatus";
const getLinkedInfo = async(user: any) => {
    if (user.uid != null) {
        const usersRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(usersRef);
        if (docSnap.exists()) {
        const userData = LinkedConverter.fromFirestore(docSnap, LinkedConverter.toFirestore(user));
        return userData;
        } else {
        return {instagramLinked: false, facebookLinked: false, twitterLinked: false} as socialMediaLinkStatus;
        }
    }
    return {instagramLinked: false, facebookLinked: false, twitterLinked: false} as socialMediaLinkStatus;
}

const LinkedConverter = {
    toFirestore: (userInfo: { instagramLinked: boolean; facebookLinked: boolean; twitterLinked: boolean; }) => {
        return {
            isInstagramLinked: userInfo.instagramLinked,
            isFacebookLinked: userInfo.facebookLinked,
            isTwitterLinked: userInfo.twitterLinked,
            };
    },
    fromFirestore: (snapshot:  QueryDocumentSnapshot<DocumentData>, options:any) => {
        const data = snapshot.data(options);
        const socialMediaStatus: socialMediaLinkStatus = {
            instagramLinked: data.instagramLinked,
            facebookLinked: data.facebookLinked,
            twitterLinked: data.twitterLinked

        }
        return socialMediaStatus
    }
};
export default getLinkedInfo;