import React from 'react'

import PropTypes from 'prop-types'

import './f-input-field.css'

const FInputField = (props) => {
  return (
    <div className={`f-input-field-container ${props.rootClassName} `}>
      <input
        type="text"
        placeholder="Placeholder"
        className="f-input-field-textinput FORM_Values input"
      />
    </div>
  )
}

FInputField.defaultProps = {
  rootClassName: '',
}

FInputField.propTypes = {
  rootClassName: PropTypes.string,
}

export default FInputField
