import React from 'react'

import PropTypes from 'prop-types'

import './checkbox.css'

const Checkbox = (props) => {
  return (
    <div className={`checkbox-container ${props.rootClassName} `}>
      <input type="checkbox" checked="true" className="checkbox-checkbox" />
    </div>
  )
}

Checkbox.defaultProps = {
  rootClassName: '',
}

Checkbox.propTypes = {
  rootClassName: PropTypes.string,
}

export default Checkbox
