import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './not-found.css'

const NotFound = (props) => {
  return (
    <div
      className={`not-found-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="not-found-max-width">
        <div className="not-found-container1">
          <h1 className="not-found-text thq-heading-1">404</h1>
        </div>
        <h2 className="not-found-text1 thq-heading-2">Page not found</h2>
        <span className="not-found-text2">
          {props.content1 ?? (
            <Fragment>
              <span className="not-found-text3 thq-body-small">
                Surrounded by the unknown, you strive to recall the path that
                will lead you back to the start.
              </span>
            </Fragment>
          )}
        </span>
        <Link to="/" className="not-found-button thq-button-filled">
          <span className="not-found-action1">
            {props.action1 ?? (
              <Fragment>
                <span className="not-found-text4 thq-body-small">
                  Back to start
                </span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

NotFound.defaultProps = {
  content1: undefined,
  action1: undefined,
  rootClassName: '',
}

NotFound.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default NotFound
