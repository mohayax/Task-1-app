import React from 'react'

const Links = ({name, url, id}) => {
  return (
    <a href={url} id={id} className='link_btn' target="blank">
        {name}
    </a>
  )
}

export default Links