import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Checkbox from './checkbox'
import FAddEntryButton from './f-add-entry-button'
import FSelectedRole from './f-selected-role'
import FInputField from './f-input-field'
import './f-section-classes.css'

const FSectionClasses = (props) => {
  return (
    <div className={`f-section-classes-container ${props.rootClassName} `}>
      <div className="f-section-classes-container1">
        <div className="f-section-classes-f-section-name-container">
          <div className="f-section-classes-container2">
            <span>
              {props.text1211 ?? (
                <Fragment>
                  <span className="f-section-classes-text24">
                    <span className="FORM_Labels"> Class</span>
                    <br className="FORM_Section"></br>
                  </span>
                </Fragment>
              )}
            </span>
            <svg viewBox="0 0 1024 1024" className="f-section-classes-icon">
              <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM554.667 341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
            </svg>
          </div>
          <Checkbox rootClassName="checkbox-root-class-name4"></Checkbox>
          <FAddEntryButton rootClassName="f-add-entry-button-root-class-name4"></FAddEntryButton>
        </div>
        <div className="f-section-classes-f-section-entries-container">
          <div className="f-section-classes-container3">
            <div
              data-thq="thq-dropdown"
              className="f-section-classes-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="f-section-classes-dropdown-toggle"
              >
                <span className="f-section-classes-text FORM_Labels">
                  Source
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="f-section-classes-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="f-section-classes-icon02"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="f-section-classes-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="f-section-classes-dropdown01 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-classes-dropdown-toggle01"
                  >
                    <span className="f-section-classes-text01">Ambusher</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="f-section-classes-dropdown02 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-classes-dropdown-toggle02"
                  >
                    <span className="f-section-classes-text02">Minion</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="f-section-classes-dropdown03 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-classes-dropdown-toggle03"
                  >
                    <span className="f-section-classes-text03">Skirmisher</span>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="f-section-classes-dropdown04 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="f-section-classes-dropdown-toggle04"
              >
                <span className="f-section-classes-text04 FORM_Labels">
                  Class
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="f-section-classes-dropdown-arrow1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="f-section-classes-icon04"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="f-section-classes-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="f-section-classes-dropdown05 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-classes-dropdown-toggle05"
                  >
                    <span className="f-section-classes-text05">Ambusher</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="f-section-classes-dropdown06 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-classes-dropdown-toggle06"
                  >
                    <span className="f-section-classes-text06">Minion</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="f-section-classes-dropdown07 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-classes-dropdown-toggle07"
                  >
                    <span className="f-section-classes-text07">Skirmisher</span>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="f-section-classes-dropdown08 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="f-section-classes-dropdown-toggle08"
              >
                <span className="f-section-classes-text08 FORM_Labels">
                  Subclass
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="f-section-classes-dropdown-arrow2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="f-section-classes-icon06"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="f-section-classes-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="f-section-classes-dropdown09 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-classes-dropdown-toggle09"
                  >
                    <span className="f-section-classes-text09">Ambusher</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="f-section-classes-dropdown10 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-classes-dropdown-toggle10"
                  >
                    <span className="f-section-classes-text10">Minion</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="f-section-classes-dropdown11 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-classes-dropdown-toggle11"
                  >
                    <span className="f-section-classes-text11">Skirmisher</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="f-section-classes-container4">
              <div
                data-thq="thq-dropdown"
                className="f-section-classes-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="f-section-classes-dropdown-toggle12"
                >
                  <span className="f-section-classes-text12 FORM_Labels">
                    Level
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="f-section-classes-dropdown-arrow3"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="f-section-classes-icon08"
                    >
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="f-section-classes-dropdown-list3"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="f-section-classes-dropdown13 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="f-section-classes-dropdown-toggle13"
                    >
                      <span className="f-section-classes-text13">Ambusher</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="f-section-classes-dropdown14 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="f-section-classes-dropdown-toggle14"
                    >
                      <span className="f-section-classes-text14">Minion</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="f-section-classes-dropdown15 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="f-section-classes-dropdown-toggle15"
                    >
                      <span className="f-section-classes-text15">
                        Skirmisher
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="f-section-classes-container5">
                <button
                  type="button"
                  className="f-section-classes-button button"
                >
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="f-section-classes-icon10"
                  >
                    <path d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="f-section-classes-icon12"
                  >
                    <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="f-section-classes-icon14"
                  >
                    <path d="M768 426.667h-170.667v-170.667c0-47.104-38.229-85.333-85.333-85.333s-85.333 38.229-85.333 85.333l3.029 170.667h-173.696c-47.104 0-85.333 38.229-85.333 85.333s38.229 85.333 85.333 85.333l173.696-3.029-3.029 173.696c0 47.104 38.229 85.333 85.333 85.333s85.333-38.229 85.333-85.333v-173.696l170.667 3.029c47.104 0 85.333-38.229 85.333-85.333s-38.229-85.333-85.333-85.333z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="f-section-classes-container6">
            <FSelectedRole
              text1={
                <Fragment>
                  <span className="f-section-classes-text16 fRoleSel">
                    <span className="FORM_Labels">
                      Cleric - Twilight Domain - Level 20
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
              rootClassName="f-selected-role-root-class-name3"
            ></FSelectedRole>
            <FSelectedRole
              text1={
                <Fragment>
                  <span className="f-section-classes-text19 fRoleSel">
                    Ranger - Hunter - Level 2
                  </span>
                </Fragment>
              }
              rootClassName="f-selected-role-root-class-name4"
            ></FSelectedRole>
            <FSelectedRole
              text1={
                <Fragment>
                  <span className="f-section-classes-text20 fRoleSel">
                    Barbarian - Path of Berserker - level 20
                  </span>
                </Fragment>
              }
              rootClassName="f-selected-role-root-class-name5"
            ></FSelectedRole>
            <FSelectedRole
              text1={
                <Fragment>
                  <span className="f-section-classes-text21 fRoleSel">
                    Text
                  </span>
                </Fragment>
              }
              rootClassName="f-selected-role-root-class-name6"
            ></FSelectedRole>
          </div>
          <div className="f-section-classes-container7">
            <div className="f-section-classes-container8">
              <span>
                {props.text1 ?? (
                  <Fragment>
                    <span className="f-section-classes-text23 FORM_Values">
                      Text
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <FInputField rootClassName="f-input-field-root-class-name2"></FInputField>
          </div>
        </div>
      </div>
    </div>
  )
}

FSectionClasses.defaultProps = {
  rootClassName1: '',
  text1: undefined,
  rootClassName2: '',
  text1211: undefined,
  rootClassName: '',
}

FSectionClasses.propTypes = {
  rootClassName1: PropTypes.string,
  text1: PropTypes.element,
  rootClassName2: PropTypes.string,
  text1211: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default FSectionClasses
