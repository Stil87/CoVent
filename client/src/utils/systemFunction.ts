import { setUserFirebaseId, setUserToLoggedIn } from '../redux/systemState/systemStateActions';
import fire from './firebase';
import { getUserById } from './userDatabaseFetch';

export const userLogin = (creds: any) => {
    return (dispatch: any) => {
        fire
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
    
            .then((res) => {
                dispatch(setUserFirebaseId (res.user?.uid));
                dispatch(setUserToLoggedIn());
                // dispatch(setUserState (getUserById(res.user?.uid)))
            })
            .catch(err => {
                console.log(err)
            });
    };
};

export const userLogOut = () => {
    console.log("logout function called")
}

export const userSignUp = (creds: any) => {
    return (dispatch : any) => {
        fire
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
            .then((res) => {
                console.log(res.user?.uid, ' Firebase res')
                dispatch(setUserFirebaseId (res.user?.uid));
                dispatch(setUserToLoggedIn());
            })
            .catch(err => {
                console.log(err)
            });
     };
};