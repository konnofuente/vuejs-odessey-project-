/* eslint-disable no-undef */

//this test enable us to check if children in a parent component 
//perfectly render hsi children
import { shallowMount } from "@vue/test-utils";
import HomeView from '../../views/HomeView.vue'
import SongItem from '../module/home/SongItem.vue'
import { expect } from "vitest";

describe('HomeVue', ()=>{
    test('render list of song', ()=>{

        const songs = [
            {},{},{}
        ]
        const component = shallowMount(HomeView,{
            data(){
                return{
                    songs,
                }
            },

            global:{
                //this will help us to define global methosnthat are use in out component
                mocks:{
                    $t:(message) => message
                }
            }
        });

        const items=component.findAllComponents(SongItem);

        expect(items).toHaveLength(songs.length);

        items.forEach((wrapper , i) =>{
            expect(wrapper.props().song).toStrictEqual(songs[i])
        })
    })
})