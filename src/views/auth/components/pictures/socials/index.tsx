/* eslint-disable */

import React from 'react'
import { Logo } from '../../../../../shared/components'
import Google from '../../../../../shared/themes/assets/images/google.svg'
import Twitter from '../../../../../shared/themes/assets/images/twitter.svg'
import Facebook from '../../../../../shared/themes/assets/images/facebook.svg'
import { SocialWrapper } from './styles'

type SocialProps = {
  alt?: string
  src?: any
  onClick?: () => void
}
interface ISocials {
  socials?: SocialProps[]
}
const Socials = ({ socials }: ISocials) => {
  return (
    <div className="d-flex justify-content-start align-items-center">
      {socials
        ? socials.map(({ src, alt, onClick }: SocialProps) => (
            <SocialWrapper className="d-flex justify-content-center align-items-center mt-4 mr-5 cursor-pointer">
              <Logo width="24px" height="24px" key={alt} src={src} alt={alt} onClick={onClick} />
            </SocialWrapper>
          ))
        : null}
    </div>
  )
}

Socials.defaultProps = {
  socials: [
    {
      alt: 'google',
      src: Google,
      onClick: () => {},
    },
    {
      alt: 'facebook',
      src: Facebook,
      onClick: () => {},
    },
    {
      alt: 'twitter',
      src: Twitter,
      onClick: () => {},
    },
  ],
}

export default Socials
