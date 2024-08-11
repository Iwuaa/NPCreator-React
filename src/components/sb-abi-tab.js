import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './sb-abi-tab.css'

const SbAbiTab = (props) => {
  return (
    <div className={`sb-abi-tab-container ${props.rootClassName} `}>
      <div className="sb-abi-tab-container01">
        <div className="sb-abi-tab-container02"></div>
        <div className="sb-abi-tab-container03"></div>
        <div className="sb-abi-tab-container04">
          <span>
            {props.text21232421 ?? (
              <Fragment>
                <span className="sb-abi-tab-text10 ST_ModSave">MOD</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="sb-abi-tab-container05">
          <span>
            {props.text212324213 ?? (
              <Fragment>
                <span className="sb-abi-tab-text21 ST_ModSave">SAVE</span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <div className="sb-abi-tab-container06">
        <div className="sb-abi-tab-container07">
          <span>
            {props.text21232722 ?? (
              <Fragment>
                <span className="sb-abi-tab-text11 ST_Table_Abs">
                  <span>Int</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="sb-abi-tab-container08">
          <span>
            {props.text212325212 ?? (
              <Fragment>
                <span className="sb-abi-tab-text18 ST_Char_val">6</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="sb-abi-tab-container09">
          <span>
            {props.text212324212 ?? (
              <Fragment>
                <span className="sb-abi-tab-text14 ST_Char_val">-2</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="sb-abi-tab-container10">
          <span>
            {props.text212323212 ?? (
              <Fragment>
                <span className="sb-abi-tab-text19 ST_Char_val">-2</span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <div className="sb-abi-tab-container11">
        <div className="sb-abi-tab-container12">
          <span>
            {props.text21232721 ?? (
              <Fragment>
                <span className="sb-abi-tab-text15 ST_Table_Abs">
                  <span>Int</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="sb-abi-tab-container13">
          <span>
            {props.text212325211 ?? (
              <Fragment>
                <span className="sb-abi-tab-text22 ST_Char_val">6</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="sb-abi-tab-container14">
          <span>
            {props.text212324211 ?? (
              <Fragment>
                <span className="sb-abi-tab-text20 ST_Char_val">-2</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="sb-abi-tab-container15">
          <span>
            {props.text212323211 ?? (
              <Fragment>
                <span className="sb-abi-tab-text23 ST_Char_val">-2</span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

SbAbiTab.defaultProps = {
  text21232421: undefined,
  text21232722: undefined,
  text212324212: undefined,
  text21232721: undefined,
  text212325212: undefined,
  text212323212: undefined,
  rootClassName: '',
  text212324211: undefined,
  text212324213: undefined,
  text212325211: undefined,
  text212323211: undefined,
}

SbAbiTab.propTypes = {
  text21232421: PropTypes.element,
  text21232722: PropTypes.element,
  text212324212: PropTypes.element,
  text21232721: PropTypes.element,
  text212325212: PropTypes.element,
  text212323212: PropTypes.element,
  rootClassName: PropTypes.string,
  text212324211: PropTypes.element,
  text212324213: PropTypes.element,
  text212325211: PropTypes.element,
  text212323211: PropTypes.element,
}

export default SbAbiTab
