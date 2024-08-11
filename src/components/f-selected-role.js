import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './f-selected-role.css'

const FSelectedRole = (props) => {
  return (
    <div className={`f-selected-role-f-selected-role ${props.rootClassName} `}>
      <div className="f-selected-role-container">
        <span>
          {props.text1 ?? (
            <Fragment>
              <span className="f-selected-role-text1 fRoleSel">
                Ranger - Hunter - Level 12
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="f-selected-role-container1">
        <button type="button" className="f-selected-role-button button">
          <svg viewBox="0 0 1024 1024" className="f-selected-role-icon">
            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

FSelectedRole.defaultProps = {
  text1: undefined,
  rootClassName: '',
}

FSelectedRole.propTypes = {
  text1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default FSelectedRole
