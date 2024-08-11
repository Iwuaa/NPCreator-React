import React from 'react'

import PropTypes from 'prop-types'

import './f-add-entry-button.css'

const FAddEntryButton = (props) => {
  return (
    <div className={`f-add-entry-button-container ${props.rootClassName} `}>
      <button type="button" className="f-add-entry-button-button button">
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="f-add-entry-button-icon"
        >
          <path d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="f-add-entry-button-icon2">
          <path d="M768 426.667h-170.667v-170.667c0-47.104-38.229-85.333-85.333-85.333s-85.333 38.229-85.333 85.333l3.029 170.667h-173.696c-47.104 0-85.333 38.229-85.333 85.333s38.229 85.333 85.333 85.333l173.696-3.029-3.029 173.696c0 47.104 38.229 85.333 85.333 85.333s85.333-38.229 85.333-85.333v-173.696l170.667 3.029c47.104 0 85.333-38.229 85.333-85.333s-38.229-85.333-85.333-85.333z"></path>
        </svg>
      </button>
    </div>
  )
}

FAddEntryButton.defaultProps = {
  rootClassName: '',
}

FAddEntryButton.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAddEntryButton
