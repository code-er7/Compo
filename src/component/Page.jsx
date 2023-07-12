import React from 'react'
import "./page.css"
import AiCard from './AiCard'
import 'bootstrap/dist/css/bootstrap.css';
const arr = [
    {
        name: "chetan",
        img: "https://img.lovepik.com/free-png/20220121/lovepik-penguin-animal-small-avatar-illustration-design-png-image_401570104_wh860.png",
        langauge: "eng"
    }
    ,
    {
        name: "chetan",
        img: "https://img.lovepik.com/free-png/20220121/lovepik-penguin-animal-small-avatar-illustration-design-png-image_401570104_wh860.png",
        langauge: "eng"
    }
    ,
    {
        name: "chetan",
        img: "https://img.lovepik.com/free-png/20220121/lovepik-penguin-animal-small-avatar-illustration-design-png-image_401570104_wh860.png",
        langauge: "eng"
    }
    ,
    {
        name: "chetan",
        img: "https://img.lovepik.com/free-png/20220121/lovepik-penguin-animal-small-avatar-illustration-design-png-image_401570104_wh860.png",
        langauge: "eng"
    }
    ,
    {
        name: "c",
        img: "https://img.lovepik.com/free-png/20220121/lovepik-penguin-animal-small-avatar-illustration-design-png-image_401570104_wh860.png",
        langauge: "eg"
    }
    ,
    {
        name: "chetan",
        img: "https://img.lovepik.com/free-png/20220121/lovepik-penguin-animal-small-avatar-illustration-design-png-image_401570104_wh860.png",
        langauge: "eng"
    }
    ,
    {
        name: "chetan",
        img: "https://img.lovepik.com/free-png/20220121/lovepik-penguin-animal-small-avatar-illustration-design-png-image_401570104_wh860.png",
        langauge: "eng"
    }
    ,
    {
        name: "ketan",
        img: "https://img.lovepik.com/free-png/20220121/lovepik-penguin-animal-small-avatar-illustration-design-png-image_401570104_wh860.png",
        langauge: "eng"
    }


]
const Page = () => {
    return (
                <div className='belowdiv'>
                {
                    arr.map((model)=>{
                        return (
                            <AiCard
                              name = {model.name}
                              imgg = {model.img}
                              lang = {model.langauge}
                            //   voice = {model.voice}
                            />
                        )
                    })
                }
                </div>  
    )
}

export default Page