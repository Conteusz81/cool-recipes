import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import fbConfig from '../firebase/firebaseConfig';
import { rootReducer } from "./reducers/rootReducer";


export const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig)
    )
);
