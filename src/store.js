// store.js
import { createStore } from 'vuex';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,GoogleAuthProvider,signInWithPopup,signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDEohKRCbIwvoVkpFTevj5NPCBregufdMA",
    authDomain: "cookpage-imtatech.firebaseapp.com",
    projectId: "cookpage-imtatech",
    storageBucket: "cookpage-imtatech.appspot.com",
    messagingSenderId: "286102565012",
    appId: "1:286102565012:web:78c152bd3967b937248481",
    measurementId: "G-64K27F618G"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default createStore({
  state: {
    user: null,
    isLoggedIn: false,
    ClassMateItem: [
      {
          id: 1,
          logoCate: "./src/img/classmate-2.jpg",
          name: "Class for kids",
          cateTittle: "Master baking: from rustic bread to delicate pastries",
          IsCart:false,
      },
      {
          id: 2,
          logoCate: "./src/img/classmate-3.jpg",
          name: "Class for husband",
          cateTittle: "Master baking: from rustic bread to delicate pastries",
          IsCart:false,
      },
      {
          id: 3,
          logoCate: "./src/img/classmate-1.jpg",
          name: "Class for chefs",
          cateTittle: "Master baking: from rustic bread to delicate pastries",
          IsCart:false,
      },
      {
          id: 4,
          logoCate: "./src/img/classmate-4.jpg",
          name: "Class for family",
          cateTittle: "Master baking: from rustic bread to delicate pastries",
          IsCart:false,
      },
      {
          id: 5,
          logoCate: "./src/img/classmate-5.jpg",
          name: "Class for woman",
          cateTittle: "Master baking: from rustic bread to delicate pastries",
          IsCart:false,
      },
      {
          id: 6,
          logoCate: "./src/img/classmate-6.jpg",
          name: "Class for couple",
          cateTittle: "Master baking: from rustic bread to delicate pastries",
          IsCart:false,
      },
  ],
  },
  
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = !!user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    setDisplayName(state, displayName) {
      state.user.name = displayName;
    },
    setIsLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    setIsCart(state, { id, value }) {
      const index = state.ClassMateItem.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.ClassMateItem[index].IsCart = value;
      }
    },    
    
  },
  actions: {
    
    async signUp({ commit }, { email, password }) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    },
    async signIn({ commit }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
        
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    },
    async signInWithGoogle({ commit }) {
        try {
          const provider = new GoogleAuthProvider();
          const userCredential = await signInWithPopup(auth, provider);
          commit('setUser', userCredential.user);
        } catch (error) {
          console.error(error.message);
          throw error;
        }
      },
      async signOut({ commit }) {
        try {
          await signOut(auth);
          commit('setUser', null);
        } catch (error) {
          console.error(error.message);
          throw error;
        }
      },
      setDisplayName({ commit }, displayName) {
        commit('setDisplayName', displayName);
      },
  
    // onAuthStateChanged({ commit }) {
    //   const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    //   if (userFromLocalStorage) {
    //     commit('setUser', userFromLocalStorage);
    //   }
    
    //   onAuthStateChanged(auth, (user) => {
    //     commit('setUser', user);
        
    //     localStorage.setItem('user', JSON.stringify(user));
    //     console.log(localStorage);
    //   });
    // },
    onAuthStateChanged({ commit }) {
      const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
      if (userFromLocalStorage) {
        commit('setUser', userFromLocalStorage);
      }
  
      onAuthStateChanged(auth, (user) => {
        commit('setUser', user);
      });
    },


    restoreUserFromLocalStorage({ commit }) {
      const userString = localStorage.getItem('user');
      if (userString) {
        const user = JSON.parse(userString);
        commit('setUser', user);
        // Kiểm tra và lưu displayName vào state.user
        if (user.displayName) {
          commit('setDisplayName', user.displayName);
        }
      }
    },
    
    
    
    
    
    
  },
  getters: {
    // isAuthenticated: (state) => !!state.user,
    isAuthenticated: (state) => state.isLoggedIn,
  },
});
