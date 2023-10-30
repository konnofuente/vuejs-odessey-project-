/* eslint-disable no-undef */
import {setActivePinia , createPinia} from 'pinia'
import useUserStore from '../../stores/user'
import { beforeEach, expect } from 'vitest'


// eslint-disable-next-line no-undef
vi.mock('../../includes/firebase.js',()=>({
    auth:{
        signInWithEmailAndPassword:()=> Promise.resolve
    }
}))


describe("stores", ()=>{
    beforeEach(()=>{
        setActivePinia(createPinia());
    });


    test('authrntificates user',async ()=>{
        const store = useUserStore();

        expect(store.userLoggedIn).not.toBe(true)
        await store.authenticate({})
        expect(store.userLoggedIn).toBe(true)
    })
})