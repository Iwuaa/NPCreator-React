import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Checkbox from './checkbox'
import FAddEntryButton from './f-add-entry-button'
import FSelectedRole from './f-selected-role'
import FInputField from './f-input-field'
import './f-section-roles.css'

const FSectionRoles = (props) => {
  return (
    <div className={`f-section-roles-container ${props.rootClassName} `}>
      <div className="f-section-roles-f-section-name-container">
        <div className="f-section-roles-container01">
          <span>
            {props.text121 ?? (
              <Fragment>
                <span className="f-section-roles-text21">
                  <span className="FORM_Labels">Combat Role</span>
                  <br className="FORM_Section"></br>
                </span>
              </Fragment>
            )}
          </span>
          <svg viewBox="0 0 1024 1024" className="f-section-roles-icon">
            <path d="M554 384v-86h-84v86h84zM554 726v-256h-84v256h84zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="f-section-roles-icon02">
            <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM554.667 341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
          </svg>
        </div>
        <Checkbox rootClassName="checkbox-root-class-name"></Checkbox>
        <FAddEntryButton rootClassName="f-add-entry-button-root-class-name"></FAddEntryButton>
      </div>
      <div className="f-section-roles-f-section-entries-container">
        <div className="f-section-roles-container02">
          <div className="f-section-roles-f-section-entry-container">
            <div
              data-thq="thq-dropdown"
              className="f-section-roles-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="f-section-roles-dropdown-toggle"
              >
                <span className="f-section-roles-text FORM_Labels">
                  Combat Role
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="f-section-roles-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="f-section-roles-icon04"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="f-section-roles-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="f-section-roles-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-roles-dropdown-toggle1"
                  >
                    <span className="f-section-roles-text01">Ambusher</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="f-section-roles-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-roles-dropdown-toggle2"
                  >
                    <span className="f-section-roles-text02">Minion</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="f-section-roles-dropdown3 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-roles-dropdown-toggle3"
                  >
                    <span className="f-section-roles-text03">Skirmisher</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="f-section-roles-container03">
          <FSelectedRole
            text1={
              <Fragment>
                <span className="f-section-roles-text04 fRoleSel">
                  <span className="FORM_Labels">Skirmisher</span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="f-selected-role-root-class-name"
          ></FSelectedRole>
          <FSelectedRole
            text1={
              <Fragment>
                <span className="f-section-roles-text07 fRoleSel">Text</span>
              </Fragment>
            }
          ></FSelectedRole>
        </div>
        <div className="f-section-roles-container04">
          <div className="f-section-roles-container05">
            <span>
              {props.text ?? (
                <Fragment>
                  <span className="f-section-roles-text20 FORM_Values">
                    Text
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="f-section-roles-container06">
        <div className="f-section-roles-container07">
          <div className="f-section-roles-f-section-name-container1">
            <div className="f-section-roles-container08">
              <span>
                {props.text1211 ?? (
                  <Fragment>
                    <span className="f-section-roles-text25">
                      <span className="FORM_Labels"> Combat Role</span>
                      <br className="FORM_Section"></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <svg viewBox="0 0 1024 1024" className="f-section-roles-icon06">
                <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM554.667 341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
              </svg>
            </div>
            <Checkbox rootClassName="checkbox-root-class-name5"></Checkbox>
            <FAddEntryButton rootClassName="f-add-entry-button-root-class-name6"></FAddEntryButton>
          </div>
          <div className="f-section-roles-f-section-entries-container1">
            <div className="f-section-roles-container09">
              <div className="f-section-roles-container10">
                <div
                  data-thq="thq-dropdown"
                  className="f-section-roles-dropdown4 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-roles-dropdown-toggle4"
                  >
                    <span className="f-section-roles-text09 FORM_Labels">
                      Combat Role
                    </span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="f-section-roles-dropdown-arrow1"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="f-section-roles-icon08"
                      >
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="f-section-roles-dropdown-list1"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="f-section-roles-dropdown5 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="f-section-roles-dropdown-toggle5"
                      >
                        <span className="f-section-roles-text10">Ambusher</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="f-section-roles-dropdown6 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="f-section-roles-dropdown-toggle6"
                      >
                        <span className="f-section-roles-text11">Minion</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="f-section-roles-dropdown7 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="f-section-roles-dropdown-toggle7"
                      >
                        <span className="f-section-roles-text12">
                          Skirmisher
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="f-section-roles-container11">
                  <button
                    type="button"
                    className="f-section-roles-button button"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="f-section-roles-icon10"
                    >
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="f-section-roles-container12">
              <FSelectedRole
                text1={
                  <Fragment>
                    <span className="f-section-roles-text13 fRoleSel">
                      <span className="FORM_Labels">Skirmisher</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="f-selected-role-root-class-name7"
              ></FSelectedRole>
              <FSelectedRole
                text1={
                  <Fragment>
                    <span className="f-section-roles-text16 fRoleSel">
                      Ranger - Hunter - Level 2
                    </span>
                  </Fragment>
                }
                rootClassName="f-selected-role-root-class-name8"
              ></FSelectedRole>
              <FSelectedRole
                text1={
                  <Fragment>
                    <span className="f-section-roles-text17 fRoleSel">
                      Barbarian - Path of Berserker - level 20
                    </span>
                  </Fragment>
                }
                rootClassName="f-selected-role-root-class-name9"
              ></FSelectedRole>
              <FSelectedRole
                text1={
                  <Fragment>
                    <span className="f-section-roles-text18 fRoleSel">
                      Text
                    </span>
                  </Fragment>
                }
                rootClassName="f-selected-role-root-class-name10"
              ></FSelectedRole>
            </div>
            <div className="f-section-roles-container13">
              <div className="f-section-roles-container14">
                <span>
                  {props.text1 ?? (
                    <Fragment>
                      <span className="f-section-roles-text24 FORM_Values">
                        Text
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <FInputField rootClassName="f-input-field-root-class-name4"></FInputField>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FSectionRoles.defaultProps = {
  rootClassName: '',
  text: undefined,
  rootClassName1: '',
  text121: undefined,
  text1: undefined,
  rootClassName11: '',
  rootClassName2: '',
  text1211: undefined,
}

FSectionRoles.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  rootClassName1: PropTypes.string,
  text121: PropTypes.element,
  text1: PropTypes.element,
  rootClassName11: PropTypes.string,
  rootClassName2: PropTypes.string,
  text1211: PropTypes.element,
}

export default FSectionRoles
