import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from '@/services/firebase';
import { doc, getDoc} from "firebase/firestore";
export interface ISocialMediaLogin{
    igUserName: string, 
    igPassword: string,
    fbUserName: string,
    fbPassword: string,
    twitterUserName: string,
    twitterPassword: string,
}
const UsersLoginInfo = async({user}: {user: any}) => {
    if (user.uid != null) {
        const usersRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(usersRef);
        if (docSnap.exists()) {
        const userData = LinkedConverter.fromFirestore(docSnap, LinkedConverter.toFirestore(user));
        return userData;
        } else {
        return {
            igUserName: '', 
            igPassword: '',
            fbUserName: '',
            fbPassword: '',
            twitterUserName: '',
            twitterPassword: '',} as ISocialMediaLogin;
        }
    }
    return {
        igUserName: '', 
        igPassword: '',
        fbUserName: '',
        fbPassword: '',
        twitterUserName: '',
        twitterPassword: '',} as ISocialMediaLogin;
}
const LinkedConverter = {
    toFirestore: (userInfo: 
{ igUserName: string; 
    igPassword: string;
    fbUserName: string;
    fbPassword: string;
    twitterUserName: string;
    twitterPassword: string; }) => {
        return {
                igUserName: userInfo.igUserName, 
                igPassword: userInfo.igPassword,
                fbUserName: userInfo.fbUserName,
                fbPassword: userInfo.fbPassword,
                twitterUserName: userInfo.twitterUserName,
                twitterPassword: userInfo.twitterPassword,
            };
    },
    fromFirestore: (snapshot:  QueryDocumentSnapshot<DocumentData>, options:any) => {
        const userInfo = snapshot.data(options);
        const socialMediaStatus: ISocialMediaLogin = {
            igUserName: userInfo.igUserName, 
            igPassword: userInfo.igPassword,
            fbUserName: userInfo.fbUserName,
            fbPassword: userInfo.fbPassword,
            twitterUserName: userInfo.twitterUserName,
            twitterPassword: userInfo.twitterPassword,

        }
        return socialMediaStatus
    }
};
export default UsersLoginInfo;