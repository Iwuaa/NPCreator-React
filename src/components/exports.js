import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './exports.css'

const Exports = (props) => {
  return (
    <div className={`exports-exports ${props.rootClassName} `}>
      <div className="exports-container">
        <span className="exports-text">
          {props.text2 ?? (
            <Fragment>
              <span className="exports-text04">Export:</span>
            </Fragment>
          )}
        </span>
      </div>
      <button type="button" className="exports-button button">
        <span>
          {props.text ?? (
            <Fragment>
              <span className="exports-text08">
                <span className="exports-text09">MARKDOWN  M</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
        <svg viewBox="0 0 1024 1024" className="exports-icon">
          <path d="M512 992l480-480h-288v-512h-384v512h-288z"></path>
        </svg>
      </button>
      <button type="button" className="exports-button1 button">
        <span>
          {props.text3 ?? (
            <Fragment>
              <span className="exports-text11">
                <span className="exports-text12">JSON &#123;;&#125;</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
      </button>
      <button type="button" className="exports-button2 button">
        <span>
          {props.text11 ?? (
            <Fragment>
              <span className="exports-text05">
                <span>Print</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
        <svg viewBox="0 0 950.8571428571428 1024" className="exports-icon2">
          <path d="M219.429 877.714h512v-146.286h-512v146.286zM219.429 512h512v-219.429h-91.429c-30.286 0-54.857-24.571-54.857-54.857v-91.429h-365.714v365.714zM877.714 548.571c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM950.857 548.571v237.714c0 9.714-8.571 18.286-18.286 18.286h-128v91.429c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-91.429h-128c-9.714 0-18.286-8.571-18.286-18.286v-237.714c0-60 49.714-109.714 109.714-109.714h36.571v-310.857c0-30.286 24.571-54.857 54.857-54.857h384c30.286 0 72 17.143 93.714 38.857l86.857 86.857c21.714 21.714 38.857 63.429 38.857 93.714v146.286h36.571c60 0 109.714 49.714 109.714 109.714z"></path>
        </svg>
      </button>
    </div>
  )
}

Exports.defaultProps = {
  text2: undefined,
  imageSrc: '4938ec45-5eb9-4e1b-9648-61849bdea92a',
  text11: undefined,
  text: undefined,
  text3: undefined,
  rootClassName: '',
}

Exports.propTypes = {
  text2: PropTypes.element,
  imageSrc: PropTypes.string,
  text11: PropTypes.element,
  text: PropTypes.element,
  text3: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Exports
