/* eslint-disable no-undef */



import { describe } from "vitest";
import About from '../../views/AboutView.vue'
import { shallowMount } from "@vue/test-utils";

describe('About.vue', () =>{
    test('renders inner text' ,() =>{
        // this will create an instance of the component that will enable us to us it in our code 
        const wrapper = shallowMount(About ,{})

        expect(wrapper.text()).toContain('about')
    })
})