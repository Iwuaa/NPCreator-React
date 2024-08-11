import React from 'react'

import PropTypes from 'prop-types'

import './body.css'

const Body = (props) => {
  return (
    <div className={`body-container body ${props.rootClassName} `}>
      {props.children}
    </div>
  )
}

Body.defaultProps = {
  rootClassName: '',
}

Body.propTypes = {
  rootClassName: PropTypes.string,
}

export default Body
