import React from "react";

export default function Footer() {
  const backColor = "#291F1E"; 
  const titleColor = "#EF5448"; 
  const subTextColor = "#EF5448";

  return(
    <footer style={{ backgroundColor: backColor }} className="p-10 flex flex-col items-center text-center text-white">
          <div className="max-w-4xl mx-auto flex justify-around w-full">
              <div className="flex-1 text-center">
                  <h2 className="font-bold leading-10" style={{ color: titleColor}}>Contact Us</h2>
                  <p><a href="mailto:thewisedrivers00@gmail.com" class="text-red-500 hover:text-red-600">Email: thewisedrivers00@gmail.com</a></p>
                  <p><a href="https://www.linkedin.com/in/jack-dechiro-492871286" className="text-red-500 hover:text-red-600">Phone: +1 (858) 333-1374</a></p>
              </div> 
              <div className="flex-1 text-center">
                  <h2 className="font-bold leading-10" style={{ color: titleColor}}>Follow Us</h2>
                  <p><a href="https://www.linkedin.com/in/jack-dechiro-492871286" className="text-red-500 hover:text-red-600">Twitter</a></p>
                  <p><a href="https://www.linkedin.com/in/jack-dechiro-492871286" className="text-red-500 hover:text-red-600">Instagram</a></p>
              </div>
              <div className="flex-1 text-center">
                  <h2 className="font-bold leading-10" style={{ color: titleColor}}>Links</h2>
                  <p><a href="/Founders" className="text-red-500 hover:text-red-600">Founders</a></p>
                  <p><a href="https://www.linkedin.com/in/jack-dechiro-492871286" className="text-red-500 hover:text-red-600">About</a></p>
              </div>
          </div>
          <div className="text-center pt-8" style={{ color: titleColor}}> {/* Removed border-t */}
              <p>&copy;Drive Wise. All rights reserved.</p>
          </div>
      </footer>
  );
}