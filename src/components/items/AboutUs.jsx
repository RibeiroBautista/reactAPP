import React from 'react'
import b from '../items/css/AboutUs.module.css'

function AboutUs() {
    return (
    <>
        <div className={b.AboutUsContainer}>
            <div className={b.Presentacion}>
                <h2>Presentación</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto enim possimus cupiditate sequi fugit asperiores consequatur exercitationem ut vel iure labore alias mollitia aut, quae fugiat!</p>
            </div>

            <div className={b.AboutUs}>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut id reprehenderit itaque animi fugiat, quis nulla asperiores eveniet quia provident dolorum sint accusantium aperiam fuga nostrum facilis, repellendus maiores labore. Quas in eveniet reiciendis illo!</p>
            </div>
        </div>
    </>
)}


export default AboutUs
