/* eslint-disable no-undef */

// in this test file we esperience how to test if some variables are displayed in a component and 
//also how to simulate propes during test 
import { expect } from 'vitest'
import SongItem from '../module/home/SongItem.vue'
import { shallowMount } from '@vue/test-utils'

describe('SongItem.vue',()=>{

    
    test('render song.modified_name',()=>{
        
        const song={
             modified_name :'test',
         };

        const wrapper=shallowMount(SongItem,{
            propsData:{
                song,
            }
        });

        const compositionAuthor = wrapper.find('.text-gray-600');

        expect(compositionAuthor.text() === song.modified_name ).toBe(true)
    })


    // test('render song.docId in id Attribute',()=>{
        
    //     const song={
    //          docID :'abc',
    //      };

    //     const wrapper=shallowMount(SongItem,{
    //         propsData:{
    //             song,
    //         }
    //     });


    //     expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`)
    //     // expect(wrapper.classes()).toContain('song-id-it')
    // })
})