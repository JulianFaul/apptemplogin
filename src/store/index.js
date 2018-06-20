import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { error } from 'util';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: null
    },
    mutations:{
        setUser(state, payload) {
            state.user = payload
        },
    },
    actions:{
        signUserUp({commit, dispatch},payload){
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    const newUser = {
                        id: user.user.uid,
                        name: payload.username,
                        email: payload.email            
                    }
                    firebase.database().ref('/users/' + newUser.id).set({
                        name: newUser.name,
                        email: newUser.email,
                        roles: {
                            reader: true
                        }
                    }).then().catch(error=>{
                        console.log(error)
                    })
                    commit("setUser", newUser)  
                }
            )
            .catch(
                error => {
                    console.log(error)
                })     
        },        
    },
    getters:{

    }
})
