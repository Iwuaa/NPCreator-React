import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './not-found3.css'

const NotFound3 = (props) => {
  return (
    <div
      className={`not-found3-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="not-found3-max-width">
        <div className="not-found3-container1">
          <h1 className="not-found3-text thq-heading-1">404</h1>
        </div>
        <h2 className="not-found3-text1 thq-heading-2">Page not found</h2>
        <span className="not-found3-text2">
          {props.content1 ?? (
            <fragment>
              <span className="not-found3-text3 thq-body-small">
                Surrounded by the unknown, you strive to recall the path that
                will lead you back to the start.
              </span>
            </fragment>
          )}
        </span>
        <button className="not-found3-button thq-button-filled">
          <Link to="/" className="not-found3-action1">
            {props.action1 ?? (
              <fragment>
                <span className="not-found3-text4 thq-body-small">
                  Back to start
                </span>
              </fragment>
            )}
          </Link>
        </button>
      </div>
    </div>
  )
}

NotFound3.defaultProps = {
  content1: undefined,
  action1: undefined,
  rootClassName: '',
}

NotFound3.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default NotFound3
