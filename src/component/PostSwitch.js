import { Switch } from "react-router-dom";
import { firebaseConnect } from "react-redux-firebase";

export default firebaseConnect(["PostHead", "post"])(Switch);
