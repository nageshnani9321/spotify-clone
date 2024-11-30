import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'

// kanguva songs album
import img17 from './kanguva/kanguva-poster.jpg'
import Fire from  './kanguva/Fire.mp3'
import Mannimpu from  './kanguva/Mannimpu.mp3'
import Naayaka from  './kanguva/Naayaka.mp3'
import Yolo from  './kanguva/Yolo.mp3'
// maa naa super hero
import img18 from './Maa-nanna-superhero/maa-nanna-super-hero.jpg'
import Dhoom from './Maa-nanna-superhero/Dhoom.mp3'
import EmitoEePrema from './Maa-nanna-superhero/EmitoEePrema.mp3'
import KanneelluLeva from './Maa-nanna-superhero/KanneelluLeva.mp3'
import Nanna from './Maa-nanna-superhero/Nanna.mp3'
import Vedukalo from './Maa-nanna-superhero/Vedukalo.mp3'
// ka songs
import img19 from './ka/ka-poster.jpg';
import worldOfVasudev from './ka/worldOfVasudev.mp3'
// Devara songs
import img20 from './devara/devara-poster.jpg';
import Fear from './devara/Fear.mp3';
import Chuttamalle from './devara/Chuttamalle.mp3';
import AyudhaPooja from './devara/AyudhaPooja.mp3';
import RedSea from './devara/RedSea.mp3';
import Daavudi from './devara/Daavudi.mp3';
// Orange songs
import img21 from './Orange/Orange-poster.jpg';
import HelloRammante from './Orange/HelloRammante.mp3';
import Chilipiga from './Orange/Chilipiga.mp3';
import NenuNuvvantu from './Orange/HelloRammante.mp3';
import OlaOlaalaAla from './Orange/OlaOlaalaAla.mp3';
import RoobaRooba from './Orange/RoobaRooba.mp3';
// gamechager songs
import img22 from './gamechanger/gamechanger-poster.jpg';
import Jaragandi from './gamechanger/Jaragandi.mp3';
import NaanaaHyraanaa from './gamechanger/NH.mp3';
import RaaMachaMacha from './gamechanger/RaaMachaMacha.mp3'
// thandel songs
import img23 from './Thandel/thandel-poster.jpg'
import BujjiThalli from './Thandel/Bujji-Thalli.mp3'
// Lucky Baskhar songs
import img24 from './Lucky-Baskhar/luckybaskhar-poster.jpg';
import LuckyBaskhar from './Lucky-Baskhar/Lucky-Baskhar.mp3';
import NijamaaKalaa from './Lucky-Baskhar/Nijamaa-Kalaa.mp3';
import SrimathiGaru from './Lucky-Baskhar/Srimathi-Garu.mp3';










export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Kanguva-Album",
        image: img17,
        desc:"DSP,Mass BGM,Anurag Kulkarni,Depthi,Raghu Dixit,Sagar,Deepthi Suresh.",
        bgColor:"#D8A31E"
    },
    {   
        id:1,
        name: "Maa Nanna Super Hero-Album",
        image: img18,
        desc:"Jay Krish, Aishwarya Daruri, Brinda, Chaitu Satsangi, Akhil Chandra, Sanapati Bharadwaj Patrudu",
        bgColor:"#744210"
    },
    {   
        id:2,
        name: "Ka-Album",
        image: img19,
        desc:"Sam CS,Kapil kapilan,Sanapati Bharadwaj Patrudu",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Devara-Album",
        image: img20,
        desc:"Devara Telugu Movie All New Songs updates JR. NTR Anirudh Ravichander, Daavudi, Ayudha Pooja, All Hail The Tiger, Fear Song, chuttamalle, red sea.",
        bgColor:"#F57C00"
    },
    {   
        id: 4,
        name: "Orange-Album",  
        image: img21,
        desc: "Orange,Surendra Krishna,Vanamali,Ramajogayya Sastry,Kedarnath Parimi",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Game-Changer",
        image: img22,
        desc:"Super Classic and Mass combination",
        bgColor:"#6A0DAD"
    },
    {   
        id:6,
        name: "Thandel-Album",
        image: img23,
        desc:"Devi Sri Prasad composed the first single, Bujji Thalli, which is a love track.",
        bgColor:"#9E1111"
    },
    {   
        id:7,
        name: "Lucky-Baskhar",
        image: img24,
        desc:"The songs were composed by G.V. Prakash Kumar, a talented musician.",
        bgColor:"#A4632E"
    },
]

export const songsData = [
    {
        id:0,
        name: "Fire-Song",
        image: img17,
        file:Fire,
        desc:"DSP,Mass BGM,Anurag Kulkarni,Depthi,Raghu Dixit,Sagar,Deepthi Suresh.",
        duration:"3:26"
    },
    {
        id:1,
        name: "Mannimpu-Song",
        image: img17,
        file:Mannimpu,
        desc:"DSP,Mass BGM,Anurag Kulkarni,Depthi,Raghu Dixit,Sagar,Deepthi Suresh.",
        duration:"5:12"
    },
    {
        id:2,
        name: "Naayaka-Song",
        image: img17,
        file:Naayaka,
        desc:"DSP,Mass BGM,Anurag Kulkarni,Depthi,Raghu Dixit,Sagar,Deepthi Suresh.",
        duration:"3:12"
    },
    {
        id:3,
        name: "Yolo-Song",
        image: img17,
        file:Yolo,
        desc:"DSP,Mass BGM,Anurag Kulkarni,Depthi,Raghu Dixit,Sagar,Deepthi Suresh.",
        duration:"3:58"
    },
    {
        id:4,
        name: "Dhoom-Song",
        image: img18,
        file:Dhoom,
        desc:"Jay Krish, Aishwarya Daruri, Brinda, Chaitu Satsangi, Akhil Chandra, Sanapati Bharadwaj Patrudu",
        duration:"3:58"
    },
    {
        id:5,
        name: "EmitoEePrema-Song",
        image: img18,
        file:EmitoEePrema,
        desc:"Jay Krish, Aishwarya Daruri, Brinda, Chaitu Satsangi, Akhil Chandra, Sanapati Bharadwaj Patrudu",
        duration:"3:58"
        
    },
    {
        id:6,
        name: "Kanneellu-Leva-Song",
        image: img18,
        file:KanneelluLeva,
        desc:"Jay Krish, Aishwarya Daruri, Brinda, Chaitu Satsangi, Akhil Chandra, Sanapati Bharadwaj Patrudu",
        duration:"3:58"
        
    },
    {
        id:7,
        name: "Nanna-Song",
        image: img18,
        file:Nanna,
        desc:"Jay Krish, Aishwarya Daruri, Brinda, Chaitu Satsangi, Akhil Chandra, Sanapati Bharadwaj Patrudu",
        duration:"3:58"
        
    },
    {
        id:8,
        name: "Vedukalo-Song",
        image: img18,
        file:Vedukalo,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:58"
        
    },
    {
        id:9,
        name: "worldOfVasudev-song",
        image: img19,
        file: worldOfVasudev,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:58"
        
    },
    {
        id:10,
        name: "Fear-song",
        image: img20,
        file: Fear,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:58"
        
    },
    {
        id:11,
        name: "Chuttamalle-song",
        image: img20,
        file: Chuttamalle,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:58"
        
    },
    {
        id:12,
        name: "AyudhaPooja-song",
        image: img20,
        file: AyudhaPooja,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:58"
        
    },
    {
        id:13,
        name: "RedSea-song",
        image: img20,
        file: RedSea,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:58"
        
    },
    {
        id:14,
        name: "Daavudi-song",
        image: img20,
        file: Daavudi,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:58"
        
    },
    {
        id: 15,
        name: "Chilipiga",
        image: img21,
        file: Chilipiga,
        desc: "A peppy dance number",
        duration: "3:20" 
    },
    {
        id: 16,
        name: "Nenu Nuvvantu",
        image: img21,
        file: NenuNuvvantu,
        desc: "A romantic duet",
        duration: "4:15"
    },
    {
        id: 17,
        name: "Hello Rammante",
        image: img21,
        file: HelloRammante,
        desc: "A catchy party number",
        duration: "3:30" 
    },
    {
        id: 18,
        name: "Ola Olaala Ala",
        image: img21,
        file: OlaOlaalaAla,
        desc: "A fun, upbeat song",
        duration: "3:10" 
    },
    {
        id: 19,
        name: "Rooba",
        image: img21,
        file: RoobaRooba,
        desc: "A melodious romantic song with beautiful lyrics and soothing rhythm",
        duration: "4:30" 
    },
    {
        id: 20,
        name: "Jaragandi-song",
        image: img22,
        file: Jaragandi,
        desc: "A high-energy mass number with intense beats, perfect for celebrations",
        duration: "4:05"
    },
    {
        id: 21,
        name: "Naanaa Hyraanaa-song",
        image: img22,
        file: NaanaaHyraanaa,
        desc: "An energetic, foot-tapping track with peppy beats and a catchy chorus",
        duration: "4:28"
    },
    {
        id: 22,
        name: "Raa Macha Macha-song",
        image: img22,
        file: RaaMachaMacha,
        desc: "A powerful mass anthem with heavy beats and an electrifying vibe",
        duration: "4:26"
    },
    {
        id: 23,
        name: "Bujji Thalli",
        image: img23,
        file: BujjiThalli,
        desc: "Devi Sri Prasad composed the first single, Bujji Thalli, which is a love track. ",
        duration: "4:08"
    },
    {
        id: 24,
        name: "Lucky Baskhar",
        image: img24,
        file: LuckyBaskhar,
        desc: "An upbeat vintage song that showcases the life of Baskhar, a middle-class banker. ",
        duration: "4:10"
    },
    {
        id: 25,
        name: "Srimathi Garu",
        image: img24,
        file: SrimathiGaru,
        desc: " A romantic song in Telugu that showcases the chemistry. ",
        duration: "4:07"
    },
    {
        id: 26,
        name: "Nijamaa Kalaa",
        image: img24,
        file: NijamaaKalaa,
        desc: "A montage number that depicts Baskhar's reconciliation with his family. ",
        duration: "4:09"
    },


]