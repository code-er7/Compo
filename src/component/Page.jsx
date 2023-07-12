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
    ,
    {
        name: "ketan",
        img: "https://img.lovepik.com/free-png/20220121/lovepik-penguin-animal-small-avatar-illustration-design-png-image_401570104_wh860.png",
        langauge: "eng"
    }
    ,
    {
        name: "ketan",
        img: "https://img.lovepik.com/free-png/20220121/lovepik-penguin-animal-small-avatar-illustration-design-png-image_401570104_wh860.png",
        langauge: "eng"
    }
    ,
    {
        name: "ketan",
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
            <div className="super-compon-ai">
                <div>
                    <h1>This is heading</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aperiam eligendi ducimus
                     deleniti dolorum repellat aliquam necessitatibus?
                     Vero, illum amet. Voluptatum ducimus, eveniet autem tempore totam praesentium recusandae enim soluta.
                </p>
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
               </div>
              
    )
}

export default Page