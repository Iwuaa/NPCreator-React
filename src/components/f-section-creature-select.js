import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Checkbox from './checkbox'
import FAddEntryButton from './f-add-entry-button'
import FInputField from './f-input-field'
import './f-section-creature-select.css'

const FSectionCreatureSelect = (props) => {
  return (
    <div
      className={`f-section-creature-select-container ${props.rootClassName} `}
    >
      <div className="f-section-creature-select-f-section-name-container">
        <div className="f-section-creature-select-container1">
          <span>
            {props.text121 ?? (
              <Fragment>
                <span className="f-section-creature-select-text08">
                  <span className="FORM_Labels"> Stencil Creature</span>
                  <br className="FORM_Section"></br>
                </span>
              </Fragment>
            )}
          </span>
          <svg
            viewBox="0 0 1024 1024"
            className="f-section-creature-select-icon"
          >
            <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM554.667 341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
          </svg>
        </div>
        <Checkbox rootClassName="checkbox-root-class-name3"></Checkbox>
        <FAddEntryButton rootClassName="f-add-entry-button-root-class-name3"></FAddEntryButton>
      </div>
      <div className="f-section-creature-select-f-section-entries-container">
        <div className="f-section-creature-select-container2">
          <div
            data-thq="thq-dropdown"
            className="f-section-creature-select-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="f-section-creature-select-dropdown-toggle"
            >
              <span className="f-section-creature-select-text FORM_Labels">
                Source
              </span>
              <div
                data-thq="thq-dropdown-arrow"
                className="f-section-creature-select-dropdown-arrow"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="f-section-creature-select-icon2"
                >
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="f-section-creature-select-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="f-section-creature-select-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="f-section-creature-select-dropdown-toggle1"
                >
                  <span className="f-section-creature-select-text01">
                    Ambusher
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="f-section-creature-select-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="f-section-creature-select-dropdown-toggle2"
                >
                  <span className="f-section-creature-select-text02">
                    Minion
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="f-section-creature-select-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="f-section-creature-select-dropdown-toggle3"
                >
                  <span className="f-section-creature-select-text03">
                    Skirmisher
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="f-section-creature-select-container3">
            <div
              data-thq="thq-dropdown"
              className="f-section-creature-select-dropdown4 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="f-section-creature-select-dropdown-toggle4"
              >
                <span className="f-section-creature-select-text04 FORM_Labels">
                  Creature
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="f-section-creature-select-dropdown-arrow1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="f-section-creature-select-icon4"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="f-section-creature-select-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="f-section-creature-select-dropdown5 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-creature-select-dropdown-toggle5"
                  >
                    <span className="f-section-creature-select-text05">
                      Ambusher
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="f-section-creature-select-dropdown6 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-creature-select-dropdown-toggle6"
                  >
                    <span className="f-section-creature-select-text06">
                      Minion
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="f-section-creature-select-dropdown7 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="f-section-creature-select-dropdown-toggle7"
                  >
                    <span className="f-section-creature-select-text07">
                      Skirmisher
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="f-section-creature-select-container4">
              <button
                type="button"
                className="f-section-creature-select-button button"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="f-section-creature-select-icon6"
                >
                  <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="f-section-creature-select-container5">
          <FInputField rootClassName="f-input-field-root-class-name1"></FInputField>
        </div>
      </div>
    </div>
  )
}

FSectionCreatureSelect.defaultProps = {
  rootClassName: '',
  rootClassName2: '',
  text121: undefined,
}

FSectionCreatureSelect.propTypes = {
  rootClassName: PropTypes.string,
  rootClassName2: PropTypes.string,
  text121: PropTypes.element,
}

export default FSectionCreatureSelect
