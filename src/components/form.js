import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import FInputField from './f-input-field'
import CalcButton from './calc-button'
import AbilityVals from './ability-vals'
import FSection from './f-section'
import './form.css'

const Form = (props) => {
  return (
    <div className={`form-container ${props.rootClassName} `}>
      <div className="form-container01">
        <div className="form-container02">
          <div className="form-container03">
            <span className="FORM_Labels">
              {props.text14 ?? (
                <Fragment>
                  <span className="form-text220 FORM_Labels">Name</span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.fNamePLH}
              className="form-textinput input1"
            />
          </div>
        </div>
      </div>
      <div className="form-container04">
        <div className="form-container05">
          <div className="form-container06">
            <span className="FORM_Labels">
              {props.text15 ?? (
                <Fragment>
                  <span className="form-text200 FORM_Labels">Size</span>
                </Fragment>
              )}
            </span>
            <FInputField fSizePLH={props.componentFSizePLH1}></FInputField>
          </div>
          <div className="form-container07">
            <span className="FORM_Labels">
              {props.text16 ?? (
                <Fragment>
                  <span className="form-text174 FORM_Labels">Type</span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.fTypePLH}
              className="form-textinput01 input FORM_Values"
            />
          </div>
          <div className="form-container08">
            <span className="FORM_Labels">
              {props.text17 ?? (
                <Fragment>
                  <span className="form-text219 FORM_Labels">Alignment</span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.fAlignPLH}
              className="form-textinput02 FORM_Values input"
            />
          </div>
        </div>
      </div>
      <div className="form-container09">
        <div className="form-container10">
          <div className="form-container11">
            <span className="FORM_Labels">
              {props.text18 ?? (
                <Fragment>
                  <span className="form-text179 FORM_Labels">Armor Class</span>
                </Fragment>
              )}
            </span>
            <div className="form-container12">
              <input
                type="text"
                placeholder={props.fACPLH}
                className="form-textinput03 input FORM_Values"
              />
              <input
                type="text"
                placeholder={props.fACdescPLH}
                className="form-textinput04 FORM_Values input"
              />
            </div>
          </div>
          <div className="form-container13">
            <span className="FORM_Labels">
              {props.text19 ?? (
                <Fragment>
                  <span className="form-text170 FORM_Labels">Initiative</span>
                </Fragment>
              )}
            </span>
            <div className="form-container14">
              <input
                type="text"
                placeholder={props.fInitPLH}
                className="form-textinput05 FORM_Values input"
              />
              <CalcButton></CalcButton>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container15">
        <div className="form-container16">
          <span className="FORM_Labels">
            {props.text ?? (
              <Fragment>
                <span className="form-text205 FORM_Labels">Hit Points</span>
              </Fragment>
            )}
          </span>
          <div className="form-container17">
            <input
              type="text"
              placeholder={props.fHPPLH}
              className="form-textinput06 input FORM_Values"
            />
            <input
              type="text"
              placeholder={props.fTHPdicePLH}
              className="form-textinput07 FORM_Values input"
            />
          </div>
        </div>
        <div className="form-container18">
          <span className="FORM_Labels">
            {props.text1 ?? (
              <Fragment>
                <span className="form-text231 FORM_Labels">Speed</span>
              </Fragment>
            )}
          </span>
          <div className="form-container19">
            <input
              type="text"
              placeholder={props.fSizePLH}
              className="form-textinput08 input FORM_Values"
            />
          </div>
        </div>
      </div>
      <div className="form-container20">
        <AbilityVals
          text={
            <Fragment>
              <span className="form-text008">
                <span className="FORM_Labels">Strength</span>
                <br></br>
              </span>
            </Fragment>
          }
          text20={
            <Fragment>
              <label className="form-text011">
                <span>Score</span>
                <br></br>
              </label>
            </Fragment>
          }
          text21={
            <Fragment>
              <label className="form-text014">
                <span>Mod</span>
                <br></br>
              </label>
            </Fragment>
          }
          text22={
            <Fragment>
              <label className="form-text017">
                <span>Save</span>
                <br></br>
              </label>
            </Fragment>
          }
          textinputPlaceholder17="3"
          textinputPlaceholder18="-4"
          textinputPlaceholder19="-4"
        ></AbilityVals>
        <AbilityVals
          text={
            <Fragment>
              <span className="form-text020 FORM_Labels">
                <span className="FORM_Labels">Dexterity</span>
                <br></br>
              </span>
            </Fragment>
          }
          text20={
            <Fragment>
              <label className="form-text023">
                <span>Score</span>
                <br></br>
              </label>
            </Fragment>
          }
          text21={
            <Fragment>
              <label className="form-text026">
                <span>Mod</span>
                <br></br>
              </label>
            </Fragment>
          }
          text22={
            <Fragment>
              <label className="form-text029">
                <span>Save</span>
                <br></br>
              </label>
            </Fragment>
          }
          textinputPlaceholder17="16"
          textinputPlaceholder18="+3"
          textinputPlaceholder19="+3"
        ></AbilityVals>
        <AbilityVals
          text={
            <Fragment>
              <span className="form-text032 FORM_Labels">
                <span className="FORM_Labels">Constitution</span>
                <br></br>
              </span>
            </Fragment>
          }
          text20={
            <Fragment>
              <label className="form-text035">
                <span>Score</span>
                <br></br>
              </label>
            </Fragment>
          }
          text21={
            <Fragment>
              <label className="form-text038">
                <span>Mod</span>
                <br></br>
              </label>
            </Fragment>
          }
          text22={
            <Fragment>
              <label className="form-text041">
                <span>Save</span>
                <br></br>
              </label>
            </Fragment>
          }
          textinputPlaceholder18="12"
        ></AbilityVals>
        <AbilityVals
          text={
            <Fragment>
              <span className="form-text044 FORM_Labels">
                <span className="FORM_Labels">Intelligence</span>
                <br></br>
              </span>
            </Fragment>
          }
          text20={
            <Fragment>
              <label className="form-text047">
                <span>Score</span>
                <br></br>
              </label>
            </Fragment>
          }
          text21={
            <Fragment>
              <label className="form-text050">
                <span>Mod</span>
                <br></br>
              </label>
            </Fragment>
          }
          text22={
            <Fragment>
              <label className="form-text053">
                <span>Save</span>
                <br></br>
              </label>
            </Fragment>
          }
          textinputPlaceholder17="12"
          textinputPlaceholder18="+1"
          textinputPlaceholder19="+1"
        ></AbilityVals>
        <AbilityVals
          text={
            <Fragment>
              <span className="form-text056 FORM_Labels">
                <span className="FORM_Labels">Wisdom</span>
                <br></br>
              </span>
            </Fragment>
          }
          text20={
            <Fragment>
              <label className="form-text059">
                <span>Score</span>
                <br></br>
              </label>
            </Fragment>
          }
          text21={
            <Fragment>
              <label className="form-text062">
                <span>Mod</span>
                <br></br>
              </label>
            </Fragment>
          }
          text22={
            <Fragment>
              <label className="form-text065">
                <span>Save</span>
                <br></br>
              </label>
            </Fragment>
          }
          textinputPlaceholder17="14"
          textinputPlaceholder18="+2"
          textinputPlaceholder19="+4"
        ></AbilityVals>
        <AbilityVals
          text={
            <Fragment>
              <span className="form-text068 FORM_Labels">
                <span className="FORM_Labels">Charisma</span>
                <br></br>
              </span>
            </Fragment>
          }
          text20={
            <Fragment>
              <label className="form-text071">
                <span>Score</span>
                <br></br>
              </label>
            </Fragment>
          }
          text21={
            <Fragment>
              <label className="form-text074">
                <span>Mod</span>
                <br></br>
              </label>
            </Fragment>
          }
          text22={
            <Fragment>
              <label className="form-text077">
                <span>Save</span>
                <br></br>
              </label>
            </Fragment>
          }
          textinputPlaceholder17="15"
          textinputPlaceholder18="+2"
          textinputPlaceholder19="+4"
        ></AbilityVals>
        <div className="form-container21">
          <span className="FORM_Labels">
            {props.text3 ?? (
              <Fragment>
                <span className="form-text175 FORM_Labels">Dexterity</span>
              </Fragment>
            )}
          </span>
          <div className="form-container22">
            <div className="form-container23">
              <label>
                {props.text23 ?? (
                  <Fragment>
                    <label className="form-text189">
                      <span>Score</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder20}
                className="form-textinput09 FORM_Values input"
              />
            </div>
            <div className="form-container24">
              <label>
                {props.text24 ?? (
                  <Fragment>
                    <label className="form-text186">
                      <span>Mod</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder21}
                className="form-textinput10 input FORM_Values"
              />
            </div>
            <div className="form-container25">
              <label>
                {props.text25 ?? (
                  <Fragment>
                    <label className="form-text213">
                      <span>Save</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder22}
                className="form-textinput11 FORM_Values input"
              />
            </div>
          </div>
        </div>
        <div className="form-container26">
          <span className="FORM_Labels">
            {props.text4 ?? (
              <Fragment>
                <span className="form-text209 FORM_Labels">Constitution</span>
              </Fragment>
            )}
          </span>
          <div className="form-container27">
            <div className="form-container28">
              <label>
                {props.text26 ?? (
                  <Fragment>
                    <label className="form-text206">
                      <span>Score</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder23}
                className="form-textinput12 FORM_Values input"
              />
            </div>
            <div className="form-container29">
              <label>
                {props.text27 ?? (
                  <Fragment>
                    <label className="form-text225">
                      <span>Mod</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder24}
                className="form-textinput13 FORM_Values input"
              />
            </div>
            <div className="form-container30">
              <label>
                {props.text28 ?? (
                  <Fragment>
                    <label className="form-text197">
                      <span>Save</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder25}
                className="form-textinput14 input FORM_Values"
              />
            </div>
          </div>
        </div>
        <div className="form-container31">
          <span className="FORM_Labels">
            {props.text5 ?? (
              <Fragment>
                <span className="form-text221 FORM_Labels">Intelligence</span>
              </Fragment>
            )}
          </span>
          <div className="form-container32">
            <div className="form-container33">
              <label>
                {props.text29 ?? (
                  <Fragment>
                    <label className="form-text210">
                      <span>Score</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder26}
                className="form-textinput15 input FORM_Values"
              />
            </div>
            <div className="form-container34">
              <label>
                {props.text30 ?? (
                  <Fragment>
                    <label className="form-text183">
                      <span>Mod</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder27}
                className="form-textinput16 FORM_Values input"
              />
            </div>
            <div className="form-container35">
              <label>
                {props.text31 ?? (
                  <Fragment>
                    <label className="form-text236">
                      <span>Save</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder28}
                className="form-textinput17 FORM_Values input"
              />
            </div>
          </div>
        </div>
        <div className="form-container36">
          <span className="FORM_Labels">
            {props.text6 ?? (
              <Fragment>
                <span className="form-text235 FORM_Labels">Wisdom</span>
              </Fragment>
            )}
          </span>
          <div className="form-container37">
            <div className="form-container38">
              <label>
                {props.text32 ?? (
                  <Fragment>
                    <label className="form-text239">
                      <span>Score</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder29}
                className="form-textinput18 input FORM_Values"
              />
            </div>
            <div className="form-container39">
              <label>
                {props.text33 ?? (
                  <Fragment>
                    <label className="form-text176">
                      <span>Mod</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder30}
                className="form-textinput19 FORM_Values input"
              />
            </div>
            <div className="form-container40">
              <label>
                {props.text34 ?? (
                  <Fragment>
                    <label className="form-text202">
                      <span>Save</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder31}
                className="form-textinput20 FORM_Values input"
              />
            </div>
          </div>
        </div>
        <div className="form-container41">
          <span className="FORM_Labels">
            {props.text7 ?? (
              <Fragment>
                <span className="form-text201 FORM_Labels">Charisma</span>
              </Fragment>
            )}
          </span>
          <div className="form-container42">
            <div className="form-container43">
              <label>
                {props.text35 ?? (
                  <Fragment>
                    <label className="form-text216">
                      <span>Score</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder32}
                className="form-textinput21 FORM_Values input"
              />
            </div>
            <div className="form-container44">
              <label>
                {props.text36 ?? (
                  <Fragment>
                    <label className="form-text232">
                      <span>Mod</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder33}
                className="form-textinput22 FORM_Values input"
              />
            </div>
            <div className="form-container45">
              <label>
                {props.text37 ?? (
                  <Fragment>
                    <label className="form-text180">
                      <span>Save</span>
                      <br></br>
                    </label>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                placeholder={props.textinputPlaceholder34}
                className="form-textinput23 FORM_Values input"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-container46">
        <div className="form-container47">
          <span className="FORM_Labels">
            {props.text8 ?? (
              <Fragment>
                <span className="form-text196 FORM_Labels">Skills</span>
              </Fragment>
            )}
          </span>
          <div className="form-container48">
            <input
              type="text"
              placeholder={props.fSkillsPLH}
              className="form-textinput24 FORM_Values input"
            />
          </div>
        </div>
        <div className="form-container49">
          <span>
            {props.text9 ?? (
              <Fragment>
                <span className="form-text228">
                  <span className="FORM_Labels">Senses</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <div className="form-container50">
            <input
              type="text"
              placeholder={props.fSensesPLH}
              className="form-textinput25 FORM_Values input"
            />
          </div>
        </div>
      </div>
      <div className="form-container51">
        <div className="form-container52">
          <span className="FORM_Labels">
            {props.text10 ?? (
              <Fragment>
                <span className="form-text195 FORM_Labels">Resistances</span>
              </Fragment>
            )}
          </span>
          <div className="form-container53">
            <input
              type="text"
              placeholder={props.fResistPLH}
              className="form-textinput26 input FORM_Values"
            />
          </div>
        </div>
        <div className="form-container54">
          <span>
            {props.text11 ?? (
              <Fragment>
                <span className="form-text192">
                  <span className="FORM_Labels">Immunities</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <div className="form-container55">
            <input
              type="text"
              placeholder={props.fImmunePLH}
              className="form-textinput27 input FORM_Values"
            />
          </div>
        </div>
      </div>
      <div className="form-container56">
        <div className="form-container57">
          <span>
            {props.text12 ?? (
              <Fragment>
                <span className="form-text171">
                  <span className="FORM_Labels">Languages</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <div className="form-container58">
            <input
              type="text"
              placeholder={props.fLangPLH}
              className="form-textinput28 input FORM_Values"
            />
          </div>
        </div>
        <div className="form-container59">
          <span>
            {props.text13 ?? (
              <Fragment>
                <span className="form-text222">
                  <span className="FORM_Labels">CR</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <div className="form-container60">
            <input
              type="text"
              placeholder={props.fCRPLH}
              className="form-textinput29 input FORM_Values"
            />
          </div>
        </div>
      </div>
      <FSection
        text={
          <Fragment>
            <span className="form-text106 ST_FeatureTag">Barbarian 20</span>
          </Fragment>
        }
        text102={
          <Fragment>
            <span className="form-text107 FORM_Labels">Name</span>
          </Fragment>
        }
        text112={
          <Fragment>
            <span className="form-text108 FORM_Labels">
              <span className="FORM_Labels">Description</span>
              <br></br>
            </span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="form-text111 FORM_Section">
              <span className="FORM_Labels">Traits</span>
              <br className="FORM_Section"></br>
            </span>
          </Fragment>
        }
      ></FSection>
      <FSection
        text={
          <Fragment>
            <span className="form-text114 ST_FeatureTag">Barbarian 20</span>
          </Fragment>
        }
        text102={
          <Fragment>
            <span className="form-text115 FORM_Labels">Name</span>
          </Fragment>
        }
        text112={
          <Fragment>
            <span className="form-text116 FORM_Labels">
              <span className="FORM_Labels">Description</span>
              <br></br>
            </span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="form-text119 FORM_Section">
              <span className="FORM_Labels">Actions</span>
              <br className="FORM_Section"></br>
            </span>
          </Fragment>
        }
        traitDescPlaceholder="The spectral pickle spews a burst of celestial-infused brine. Each creature within 5 feet of it must succeed on a DC 12 Dexterity saving throw, taking 7 (2d6) acid damage on a failed save, or half as much damage on a successful one. "
        traitNamePlaceholder="Holy Brine Splash"
      ></FSection>
      <FSection
        text={
          <Fragment>
            <span className="form-text122 ST_FeatureTag">Barbarian 20</span>
          </Fragment>
        }
        text102={
          <Fragment>
            <span className="form-text123 FORM_Labels">Name</span>
          </Fragment>
        }
        text112={
          <Fragment>
            <span className="form-text124 FORM_Labels">
              <span className="FORM_Labels">Description</span>
              <br></br>
            </span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="form-text127 FORM_Section">
              <span className="FORM_Labels">Bonus Actions</span>
              <br className="FORM_Section"></br>
            </span>
          </Fragment>
        }
        traitNamePlaceholder="Holy Brine Splash"
      ></FSection>
      <FSection
        text={
          <Fragment>
            <span className="form-text130 ST_FeatureTag">Barbarian 20</span>
          </Fragment>
        }
        text102={
          <Fragment>
            <span className="form-text131 FORM_Labels">Name</span>
          </Fragment>
        }
        text112={
          <Fragment>
            <span className="form-text132 FORM_Labels">
              <span className="FORM_Labels">Description</span>
              <br></br>
            </span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="form-text135 FORM_Section">
              <span className="FORM_Labels">Reactions</span>
              <br className="FORM_Section"></br>
            </span>
          </Fragment>
        }
      ></FSection>
      <FSection
        text={
          <Fragment>
            <span className="form-text138 ST_FeatureTag">Barbarian 20</span>
          </Fragment>
        }
        text102={
          <Fragment>
            <span className="form-text139 FORM_Labels">Name</span>
          </Fragment>
        }
        text112={
          <Fragment>
            <span className="form-text140 FORM_Labels">
              <span className="FORM_Labels">Description</span>
              <br></br>
            </span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="form-text143 FORM_Section">
              <span className="FORM_Labels">Legendary Actions</span>
              <br className="FORM_Section"></br>
            </span>
          </Fragment>
        }
      ></FSection>
      <FSection
        text={
          <Fragment>
            <span className="form-text146 ST_FeatureTag">Barbarian 20</span>
          </Fragment>
        }
        text102={
          <Fragment>
            <span className="form-text147 FORM_Labels">Name</span>
          </Fragment>
        }
        text112={
          <Fragment>
            <span className="form-text148 FORM_Labels">
              <span className="FORM_Labels">Description</span>
              <br></br>
            </span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="form-text151 FORM_Section">
              <span className="FORM_Labels">Mythic Actions</span>
              <br className="FORM_Section"></br>
            </span>
          </Fragment>
        }
      ></FSection>
      <FSection
        text={
          <Fragment>
            <span className="form-text154 ST_FeatureTag">Barbarian 20</span>
          </Fragment>
        }
        text102={
          <Fragment>
            <span className="form-text155 FORM_Labels">Name</span>
          </Fragment>
        }
        text112={
          <Fragment>
            <span className="form-text156 FORM_Labels">
              <span className="FORM_Labels">Description</span>
              <br></br>
            </span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="form-text159 FORM_Section">
              <span className="FORM_Labels">Lair Actions</span>
              <br className="FORM_Section"></br>
            </span>
          </Fragment>
        }
      ></FSection>
      <FSection
        text={
          <Fragment>
            <span className="form-text162 ST_FeatureTag">Barbarian 20</span>
          </Fragment>
        }
        text102={
          <Fragment>
            <span className="form-text163 FORM_Labels">Name</span>
          </Fragment>
        }
        text112={
          <Fragment>
            <span className="form-text164 FORM_Labels">
              <span className="FORM_Labels">Description</span>
              <br></br>
            </span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="form-text167 FORM_Section">
              <span className="FORM_Labels">Regional Effects</span>
              <br className="FORM_Section"></br>
            </span>
          </Fragment>
        }
      ></FSection>
    </div>
  )
}

Form.defaultProps = {
  textinputPlaceholder20: '10',
  text19: undefined,
  text12: undefined,
  fSizePLH: 'Tiny',
  fHPPLH: '5',
  text16: undefined,
  fSkillsPLH: 'Perception +4, Stealth +5',
  text3: undefined,
  textinputPlaceholder21: '0',
  textinputPlaceholder32: '10',
  text33: undefined,
  textinputPlaceholder22: '0',
  componentFSizePLH1: 'sdfsdf',
  textinputPlaceholder31: '0',
  text18: undefined,
  text37: undefined,
  text30: undefined,
  text24: undefined,
  text23: undefined,
  text11: undefined,
  text10: undefined,
  textinputPlaceholder34: '0',
  textinputPlaceholder27: '0',
  text8: undefined,
  text28: undefined,
  textinputPlaceholder29: '10',
  text15: undefined,
  fAlignPLH: 'Lawful Neutral',
  text7: undefined,
  text34: undefined,
  text: undefined,
  text26: undefined,
  fTypePLH: 'Celestial',
  textinputPlaceholder33: '0',
  textinputPlaceholder26: '10',
  rootClassName: '',
  text4: undefined,
  text29: undefined,
  text25: undefined,
  text35: undefined,
  text17: undefined,
  textinputPlaceholder24: '0',
  textinputPlaceholder28: '0',
  fInitPLH: '+3',
  text14: undefined,
  text5: undefined,
  fCRPLH: '1/2 (100 XP, PB +2)',
  text13: undefined,
  text27: undefined,
  text9: undefined,
  textinputPlaceholder30: '0',
  fImmunePLH: 'acid; charmed, frightened',
  textinputPlaceholder23: '0',
  text1: undefined,
  fLangPLH: "Celestial, understands Common but can't speak",
  fACPLH: '12',
  fNamePLH: 'Spectral Pickle',
  fACdescPLH: 'Natural armor',
  fTHPdicePLH: '2d4',
  text36: undefined,
  fSensesPLH: 'darkvision 60 ft., passive Perception 14',
  fResistPLH:
    'radiant; bludgeoning, piercing, and slashing from nonmagical attacks',
  text6: undefined,
  textinputPlaceholder25: '0',
  text31: undefined,
  text32: undefined,
}

Form.propTypes = {
  textinputPlaceholder20: PropTypes.string,
  text19: PropTypes.element,
  text12: PropTypes.element,
  fSizePLH: PropTypes.string,
  fHPPLH: PropTypes.string,
  text16: PropTypes.element,
  fSkillsPLH: PropTypes.string,
  text3: PropTypes.element,
  textinputPlaceholder21: PropTypes.string,
  textinputPlaceholder32: PropTypes.string,
  text33: PropTypes.element,
  textinputPlaceholder22: PropTypes.string,
  componentFSizePLH1: PropTypes.string,
  textinputPlaceholder31: PropTypes.string,
  text18: PropTypes.element,
  text37: PropTypes.element,
  text30: PropTypes.element,
  text24: PropTypes.element,
  text23: PropTypes.element,
  text11: PropTypes.element,
  text10: PropTypes.element,
  textinputPlaceholder34: PropTypes.string,
  textinputPlaceholder27: PropTypes.string,
  text8: PropTypes.element,
  text28: PropTypes.element,
  textinputPlaceholder29: PropTypes.string,
  text15: PropTypes.element,
  fAlignPLH: PropTypes.string,
  text7: PropTypes.element,
  text34: PropTypes.element,
  text: PropTypes.element,
  text26: PropTypes.element,
  fTypePLH: PropTypes.string,
  textinputPlaceholder33: PropTypes.string,
  textinputPlaceholder26: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.element,
  text29: PropTypes.element,
  text25: PropTypes.element,
  text35: PropTypes.element,
  text17: PropTypes.element,
  textinputPlaceholder24: PropTypes.string,
  textinputPlaceholder28: PropTypes.string,
  fInitPLH: PropTypes.string,
  text14: PropTypes.element,
  text5: PropTypes.element,
  fCRPLH: PropTypes.string,
  text13: PropTypes.element,
  text27: PropTypes.element,
  text9: PropTypes.element,
  textinputPlaceholder30: PropTypes.string,
  fImmunePLH: PropTypes.string,
  textinputPlaceholder23: PropTypes.string,
  text1: PropTypes.element,
  fLangPLH: PropTypes.string,
  fACPLH: PropTypes.string,
  fNamePLH: PropTypes.string,
  fACdescPLH: PropTypes.string,
  fTHPdicePLH: PropTypes.string,
  text36: PropTypes.element,
  fSensesPLH: PropTypes.string,
  fResistPLH: PropTypes.string,
  text6: PropTypes.element,
  textinputPlaceholder25: PropTypes.string,
  text31: PropTypes.element,
  text32: PropTypes.element,
}

export default Form
