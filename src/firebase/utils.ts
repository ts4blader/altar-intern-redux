import { collection, doc, getDocs, addDoc, deleteDoc } from "firebase/firestore"; 
import {db} from "./app"
import {User} from "../states/slices/usersSlice"

export const getAll = async () => {
    const result : User[] = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        result.push(doc.data() as User);
    });
    return result;
}
export const addUserFirebase = (user: User) => {
    addDoc(collection(db, "users"), user).then(() => {
        console.log("Added!");
    }).catch(() => {
        console.log("Add Fail!");
    })
}
export const removeUserFirebase = (id: number)  => {
    getDocs(collection(db, "users")).then(result => {
        let rootId : string = "";
        result.forEach(doc => {
            if(doc.data().id === id) {
                rootId = doc.id;
                return;
            };
        })
        deleteDoc(doc(db, "users", rootId)).then(() => {
            console.log("Deleted!");
        }).catch(() => {
            console.log("Delete Fail!")
        })
    })
}
