import React from "react"; 

export default function Box({header_text, paragraph_text, button_text, button_link, link_text, link_link, image, flip}) {
    const flipStyle = flip === 'true' ? 'flex-row' : 'flex-row-reverse';
    
    return (
         

         <div className={`flex w-100 h-100 m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10 ${flipStyle}`}>
            <div className="flex justify-center items-center w-1/2  m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10   ">
                <img className="flex w-auto h-auto rounded-lg " src={image} alt=""/>
                
            </div>
            <div className="flex w-1/2 sm:w-1/1 justify-center items-center m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10 ">
                <div>
                    <header className="flex m-auto text-red-500 font-sans font-bold text-5xl"><h1>{header_text}</h1></header>
                    <p className="flex m-auto text-red-500 font-sans text-md">{paragraph_text}</p>
                    <a href={button_link}><button className="bg-red-500 m-auto text-black font-sans text-md rounded-lg px-4 py-2 transition duration-300 hover:bg-red-400">{button_text}</button> </a>
                    <a className="m-auto font-sans text-red-500 pl-2 no-underline transition-colors duration-300 hover:text-red-400 hover:underline" href={link_link}>{link_text}</a>

                </div>
                
            </div>
        </div>

    );
}
