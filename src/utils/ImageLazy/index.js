import React from "react";

const ImgLazy = (props) => {
    return <img className='cursor-pointer' key={props.key} src={props.img} alt={props.desc} onClick={props.click}/>
}

export default ImgLazy