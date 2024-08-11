import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './home-site-quick-link.css'

const HomeSiteQuickLink = (props) => {
  return (
    <div
      className={`home-site-quick-link-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="home-site-quick-link-max-width thq-section-max-width">
        <div className="home-site-quick-link-container1">
          <h2 className="home-site-quick-link-title">
            {props.heading1 ?? (
              <Fragment>
                <h2 className="home-site-quick-link-text4 thq-heading-2">
                  NPCreator
                </h2>
              </Fragment>
            )}
          </h2>
          <h3>
            {props.content1 ?? (
              <Fragment>
                <h3 className="home-site-quick-link-text2 thq-heading-3">
                  Quick NPC Builder
                </h3>
              </Fragment>
            )}
          </h3>
        </div>
        <Link
          to="/builder"
          className="home-site-quick-link-navlink thq-button-filled"
        >
          <span className="home-site-quick-link-text1">
            {props.action1 ?? (
              <Fragment>
                <span className="home-site-quick-link-text3">Create NPC</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

HomeSiteQuickLink.defaultProps = {
  content1: undefined,
  action1: undefined,
  rootClassName: '',
  heading1: undefined,
}

HomeSiteQuickLink.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default HomeSiteQuickLink
