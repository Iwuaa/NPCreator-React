import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div
      className={`banner1-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container1">
          <h2 className="banner1-title">
            {props.heading1 ?? (
              <fragment>
                <span className="banner1-text4 thq-heading-2">NPCreator</span>
              </fragment>
            )}
          </h2>
          <h3>
            {props.content1 ?? (
              <fragment>
                <span className="banner1-text2 thq-heading-3">
                  Quick NPC Builder
                </span>
              </fragment>
            )}
          </h3>
        </div>
        <Link to="/builder" className="banner1-navlink thq-button-filled">
          <span className="banner1-text1">
            {props.action1 ?? (
              <fragment>
                <span className="banner1-text3">Create NPC</span>
              </fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  content1: undefined,
  action1: undefined,
  rootClassName: '',
  heading1: undefined,
}

Banner1.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Banner1
