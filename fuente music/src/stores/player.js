import { defineStore } from "pinia";
import {Howl } from "howler"

export default defineStore("player",{
    state:()=>({
        current_song:{},
        sound:{}
    }),
    actions:{
        async newSong(song){
            this.current_song = song


            this.sound = new Howl({
                src: [this.current_song.url],
                html5:true,
            })

            console.log(this.sound)

            this.sound.play()
        }
    }
});