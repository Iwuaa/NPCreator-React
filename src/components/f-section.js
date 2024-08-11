import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import FAddEntryButton from './f-add-entry-button'
import './f-section.css'

const FSection = (props) => {
  return (
    <div className="f-section-container">
      <div className="f-section-f-section-name-container">
        <span>
          {props.text121 ?? (
            <Fragment>
              <span className="f-section-text5 FORM_Section">
                <span className="FORM_Labels">Section Name</span>
                <br className="FORM_Section"></br>
              </span>
            </Fragment>
          )}
        </span>
        <FAddEntryButton></FAddEntryButton>
      </div>
      <div className="f-section-f-section-entries-container">
        <div className="f-section-f-section-entry-container">
          <div className="f-section-f-section-entry-name-container">
            <div className="f-section-container1">
              <div className="f-section-container2">
                <span className="FORM_Labels">
                  {props.text102 ?? (
                    <Fragment>
                      <span className="f-section-text4 FORM_Labels">Name</span>
                    </Fragment>
                  )}
                </span>
                <div className="f-section-container3">
                  <span>
                    {props.text ?? (
                      <Fragment>
                        <span className="f-section-text8 ST_FeatureTag">
                          Barbarian 20
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="f-section-container4">
              <input
                type="text"
                placeholder={props.traitNamePlaceholder}
                className="f-section-f-entry-name-input FORM_Values input"
              />
            </div>
            <button
              type="button"
              className="f-section-f-del-entry-button button"
            >
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="f-section-icon"
              >
                <path d="M292.571 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM438.857 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM585.143 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM658.286 834.286v-541.714h-512v541.714c0 27.429 15.429 43.429 18.286 43.429h475.429c2.857 0 18.286-16 18.286-43.429zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
            </button>
          </div>
          <div className="f-section-f-section-entry-desc-container">
            <span>
              {props.text112 ?? (
                <Fragment>
                  <span className="f-section-text1 FORM_Labels">
                    <span className="FORM_Labels">Description</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
            <textarea
              placeholder={props.traitDescPlaceholder}
              className="f-section-f-entry-desc-input FORM_Values textarea"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

FSection.defaultProps = {
  text112: undefined,
  traitNamePlaceholder: 'Ethereal Dill',
  text102: undefined,
  text121: undefined,
  traitDescPlaceholder:
    'Spectral Pickle can move through other creatures and objects as if they were difficult terrain, leaving a faint pickle aroma behind.Spectral Pickle can move through other creatures and objects as if they were difficult terrain, leaving a faint pickle aroma behind.',
  text: undefined,
}

FSection.propTypes = {
  text112: PropTypes.element,
  traitNamePlaceholder: PropTypes.string,
  text102: PropTypes.element,
  text121: PropTypes.element,
  traitDescPlaceholder: PropTypes.string,
  text: PropTypes.element,
}

export default FSection
