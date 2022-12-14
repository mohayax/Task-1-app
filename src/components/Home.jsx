import React from 'react'
import '../index.css';
import Links from '../components/Links';
import Profile from '../components/Profile';
import Social from '../components/Social';
import {
    Link
} from "react-router-dom";


function Home() {
    const twitter = "https://twitter.com/mohayax88"
    const zuri = "https://training.zuri.team/";
    const books = "http://books.zuri.team/";
    const python = "https://books.zuri.team/";
    const background = "https://background.zuri.team/";
    const design = "https://books.zuri.team/design-rules"

return (
    <div className='container'>
        <Profile />
        <Links name="Twitter" url={twitter} id='twitter__link' />
        <Links name="Zuri Team" url={zuri} id='btn__zuri' />
        <Links name="Zuri Books" url={books} id='books' />
        <Links name="Python Books" url={python} id='book__python' />
        <Links name="Background Check for Coders" url={background} id='pitch' />
        <Links name="Design Books" url={design} id='book__design' />
        <Link style={{textDecoration: 'none'}} to={'/contact'}><Links name="Contact Me" id='contact' /></Link>
        <Social />
    </div>
)
}

export default Home