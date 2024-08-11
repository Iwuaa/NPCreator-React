import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './ability-vals.css'

const AbilityVals = (props) => {
  return (
    <div className="ability-vals-container">
      <span className="FORM_Labels">
        {props.text ?? (
          <Fragment>
            <span className="ability-vals-text04 FORM_Labels">Strength</span>
          </Fragment>
        )}
      </span>
      <div className="ability-vals-container1">
        <div className="ability-vals-container2">
          <label>
            {props.text20 ?? (
              <Fragment>
                <label className="ability-vals-text11">
                  <span>Score</span>
                  <br></br>
                </label>
              </Fragment>
            )}
          </label>
          <input
            type="text"
            placeholder={props.textinputPlaceholder17}
            className="ability-vals-textinput FORM_Values input"
          />
        </div>
        <div className="ability-vals-container3">
          <label>
            {props.text21 ?? (
              <Fragment>
                <label className="ability-vals-text05">
                  <span>Mod</span>
                  <br></br>
                </label>
              </Fragment>
            )}
          </label>
          <input
            type="text"
            placeholder={props.textinputPlaceholder18}
            className="ability-vals-textinput1 input FORM_Values"
          />
        </div>
        <div className="ability-vals-container4">
          <label>
            {props.text22 ?? (
              <Fragment>
                <label className="ability-vals-text08">
                  <span>Save</span>
                  <br></br>
                </label>
              </Fragment>
            )}
          </label>
          <input
            type="text"
            placeholder={props.textinputPlaceholder19}
            className="ability-vals-textinput2 FORM_Values input"
          />
        </div>
      </div>
    </div>
  )
}

AbilityVals.defaultProps = {
  textinputPlaceholder18: '0',
  text: undefined,
  text21: undefined,
  textinputPlaceholder19: '0',
  text22: undefined,
  textinputPlaceholder17: '10',
  text20: undefined,
}

AbilityVals.propTypes = {
  textinputPlaceholder18: PropTypes.string,
  text: PropTypes.element,
  text21: PropTypes.element,
  textinputPlaceholder19: PropTypes.string,
  text22: PropTypes.element,
  textinputPlaceholder17: PropTypes.string,
  text20: PropTypes.element,
}

export default AbilityVals
