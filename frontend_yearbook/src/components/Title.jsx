import React from 'react'
import "../styles/TitleStyles.css"

const Title = ({subTitle, title}) => {
  return (
    <div className="title">
        <h3>{subTitle}</h3>
        <h2>{title}</h2>
    </div>
  )
}

export default Title