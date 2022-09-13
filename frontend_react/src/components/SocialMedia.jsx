import React from 'react'
import {BsTwitter, BsInstagram} from "react-icons/bs"

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsTwitter href='https://twitter.com/pukeduke123'/>
        </div>

        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia
