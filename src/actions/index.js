import firebase from 'firebase';
import { FETCH_POST_HEAD } from './types';

const RootRef = firebase.database().ref();
export function fetchPostHead() {
    const PostHead = RootRef.child('PostHead');
    console.log("hello");
    return dispatch => {
        PostHead.on('value', snapshot => {
            dispatch({
                type: FETCH_POST_HEAD,
                payload: snapshot.val()
            });
        });
    };
}
export function fetchPost() {

}