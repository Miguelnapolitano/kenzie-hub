import React from 'react'

const BaseText = ({ children, className, tag }) => {
  return (
    <>
        {tag === "p" && <p className={className}>{children}</p>}
        {tag === "span" && <span className={className}>{children}</span>}
        {tag === "label" && <span className={className}>{children}</span>}

    </>
  )
}

export default BaseText