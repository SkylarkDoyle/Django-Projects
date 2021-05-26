import React from 'react'
import { Anchor, SubHeader } from '../../../../shared/themes/style/stylc/shared/components'
import { UploadBusinessLogoWrapper } from './styles'



const upload = 'https://image.shutterstock.com/image-vector/upload-icon-trendy-flat-style-260nw-1697806396.jpg'

const UploadPicture = () => {
  return (
    <UploadBusinessLogoWrapper className="row justify-content-center align-items-center mt-2 mb-4">
      <div className="col-3">
        <img src={upload} alt="logo" className="rounded-circle" />
      </div>
      <div className="col-9">
        <Anchor className="my-4" href="">
          upload business logo
        </Anchor>
        <SubHeader> image should be in jpeg or png format</SubHeader>
      </div>
    </UploadBusinessLogoWrapper>
  )
}

export default UploadPicture
