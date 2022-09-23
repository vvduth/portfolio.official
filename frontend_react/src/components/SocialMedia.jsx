import React from 'react'
import {BsTwitter, BsInstagram} from "react-icons/bs"
import { AiFillGithub } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href='https://twitter.com/profhus'>
            <BsTwitter href='https://twitter.com/profhus'/>
            </a>
        </div>

        <div>
            <a href="https://github.com/vvduth">
              <AiFillGithub />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia
