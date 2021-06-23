//basic imports
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyA8kInIdJ-fE7q_pOhJQKAVUCd2gJIcFEA",
    authDomain: "pentolbress.firebaseapp.com",
    projectId: "pentolbress",
    storageBucket: "pentolbress.appspot.com",
    messagingSenderId: "952057835027",
    appId: "1:952057835027:web:24f1d6812e1a93f3e319e6",
    measurementId: "G-W119XNPE90"
};

//creating an async function to create a document with the users information into the users collection
//(collection is a collection of documents )
// takes two parameters: userAuth obj from auth library, additionalData obj
export const createUserProfileDocument = async (userAuth, additionalData) =>{
    //check if we get back a valid userAuth obj
    if (!userAuth) return;

    //get the documentReference for the current user, even if it's null
    //a reference doesn't have the actual data, but it has properties about it
    //like the id we pass in, path and parent properties
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    //document reference is used to perform CRUD actions
    // by using get(), we get a documentSnapshot
    //this is async because we are trying to get data from our database
    const snapShot = await userRef.get();

    //snapshot has a property exist, that tells us if the document we queried for, exsist or not
    // we are going to use it, to check if our user exsists or not
    // if not, we create the user by adding to our document the username, photo, date
    if (!snapShot.exsists){
        const{displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(err){
            console.log('error creating user', err.message)
        }
    }

    return userRef;
}

//initializes the firebase app
firebase.initializeApp(firebaseConfig);

//exporting what we need, for future use in our application
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setting up provider for google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;