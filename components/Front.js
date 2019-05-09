import React from 'react'

const Front = (props) => (

    <div className="front__card">
        <img src={`${props.info.thumbNail}`} alt=""/>
        <p class="text__sm text__light">{props.info.date}</p>
        <h3 class="text__large">{props.info.title}</h3>
        <div className="front__card__group">
            {props.info.tag.map((item, index) => (
                    <p key={index}>{item}</p>
            ))}
        </div>
     

    </div>

)

export default Front;