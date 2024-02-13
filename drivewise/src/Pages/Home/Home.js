import React from "react"; 
import './Home.css'
import Box from "../../Components/Box/Box";
import City_map from "../../Images/map.jpg";

function Home() {

    
    return (
        <body>
            <Box
                header_text="The Uber you know, reimagined for business"
                paragraph_text="Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."
                button_text="Get started"
                button_link={"https://www.google.com/"}
                link_text="Check out our solutions"
                link_link={"https://www.google.com/"}
                image = {City_map}
                flip = 'true'
            />

            <Box
                header_text="The Uber you know, reimagined for business"
                paragraph_text="Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."
                button_text="Get started"
                button_link={"/About"}
                link_text="Check out our solutions"
                link_link={""}
                image = {City_map}
                flip = 'false'
            />
            
        </body>
    );
}
export default Home;