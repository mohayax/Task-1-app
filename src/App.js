import React, { useState } from 'react';
import './index.css';
function App() {


  return (
    <>
    <section className="profile">
        <Profile />
    </section>
    
        
    
    </>
  );
}

const Profile = () => {
  const person = {
    img: "https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/286799744_2089533824577057_8443362135943691568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFsq5RHxCRQM7TW25ydyxGR44tD0dERn9Hji0PR0RGf0fL-cHs0sIu1m1BAPQuHUCbROHK5hv6vlf2p-1hVnsdM&_nc_ohc=Ob4hYzcFCmQAX_J0N-W&_nc_ht=scontent.flos1-2.fna&oh=00_AT-cfnIeYFuA6piezrcynDbHANN1KbOYmKO9NXXp5mO_Qw&oe=63599E79",
    name:"@mohayax88",
    slack: 'Muhammad Yakubu'
  }
  
  return (
   <div className="image-container">
      <img src={person.img} alt="" id='profile_img'/>
    <h2 id='twitter'>{person.name}</h2>
    <p id='slack'>{person.slack}</p>
   </div>
  )
}

export default App;
