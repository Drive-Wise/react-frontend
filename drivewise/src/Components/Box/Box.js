import React from "react"; 
import './Box.css'
export default function Box({header_text, paragraph_text, button_text, button_link, link_text, link_link, image, flip}) {
    const flipStyle = flip === 'true' ? 'double_box1' : 'double_box2';
    
    return (
         

         <div className={`component ${flipStyle}`}>
            <div className="image_box">
                <img className="image" src={image} alt=""/>
                
            </div>
            <div className="box">
                <div>
                    <header><h1>{header_text}</h1></header>
                    <p>{paragraph_text}</p>
                    <a href={button_link}><button >{button_text}</button> </a>
                    <a className="text_link" href={link_link}>{link_text}</a>

                </div>
                
            </div>
        </div>

    );
}
