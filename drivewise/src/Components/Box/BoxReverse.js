import React from "react"; 

export default function BoxReverse({header_text, paragraph_text, button_text, button_link, link_text, link_link, image, flip}) {
    
    const imageFlipStyle = flip === 'true' ? 'flex-row-reverse' : 'flex-row' ;
    return (
         

         <div className={`flex lg:w-3/4 m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10  flex-col-reverse lg:flex-row-reverse `}>


            <div className={`flex  lg:w-1/2  lg:${imageFlipStyle}`}>
                <div className="flex  justify-center items-center lg:mx-10 ">
                    <img className="flex w-auto h-auto rounded-lg " src={image} alt=""/>
                </div>
            </div>



            <div className={`flex lg:w-1/2  items-center lg:${imageFlipStyle} `}>
                <div className="lg:w-3/4 lg:mx-10">
                    <header className="flex leading-tight my-3 m-auto text-red-500 font-sans font-bold  text-4xl"><h1>{header_text}</h1></header>
                    <p className="flex my-3 m-auto text-red-500 font-sans text-md">{paragraph_text}</p>
                    <a href={button_link}><button className="m-auto my-3 bg-red-500 font-semibold leading-6 text-textp text-sm rounded-lg px-4 py-2 transition duration-300 hover:bg-red-400">{button_text}</button> </a>
                    <a className="my-3 m-auto text-textp pl-2 no-underline text-sm font-semibold leading-6" href={link_link}>{link_text}</a>

                </div>
            </div>

        </div>
       
    );
}
