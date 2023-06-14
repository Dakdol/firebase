//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "babylion-1b35c.firebaseapp.com",
  projectId: "babylion-1b35c",
  storageBucket: "babylion-1b35c.appspot.com",
  messagingSenderId: "576780603900",
  appId: `${process.env.REACT_APP_FIREBASE_ID}`,
  measurementId: "G-L2VFVXX7G3",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
