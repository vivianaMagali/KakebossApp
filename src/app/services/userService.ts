import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

export class UserService {

    getCurrentUser(){
        return firebase.auth().currentUser;
    }

}