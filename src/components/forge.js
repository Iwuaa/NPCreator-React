import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import FSectionCreatureSelect from './f-section-creature-select'
import FSectionClasses from './f-section-classes'
import FSectionRoles from './f-section-roles'
import Form from './form'
import RefreshButton from './refresh-button'
import Exports from './exports'
import Statblock2024 from './statblock-2024'
import './forge.css'

const Forge = (props) => {
  return (
    <div className={`forge-container ${props.rootClassName} `}>
      <div className="forge-container1">
        <h1>
          {props.heading ?? (
            <Fragment>
              <h1 className="forge-text159">Forge</h1>
            </Fragment>
          )}
        </h1>
      </div>
      <div className="forge-container2">
        <div className="forge-container3">
          <div className="forge-container4">
            <FSectionCreatureSelect
              text121={
                <Fragment>
                  <span className="forge-text001">
                    <span className="FORM_Labels"> Stencil Creature</span>
                    <br className="FORM_Section"></br>
                  </span>
                </Fragment>
              }
              rootClassName="f-section-creature-select-root-class-name1"
            ></FSectionCreatureSelect>
            <FSectionClasses
              text1={
                <Fragment>
                  <span className="forge-text004 FORM_Values">Text</span>
                </Fragment>
              }
              text1211={
                <Fragment>
                  <span className="forge-text005">
                    <span className="FORM_Labels"> Class</span>
                    <br className="FORM_Section"></br>
                  </span>
                </Fragment>
              }
              rootClassName="f-section-classes-root-class-name1"
            ></FSectionClasses>
            <FSectionRoles
              text={
                <Fragment>
                  <span className="forge-text008 FORM_Values">Text</span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="forge-text009 FORM_Values">Text</span>
                </Fragment>
              }
              text121={
                <Fragment>
                  <span className="forge-text010">
                    <span className="FORM_Labels">Combat Role</span>
                    <br className="FORM_Section"></br>
                  </span>
                </Fragment>
              }
              text1211={
                <Fragment>
                  <span className="forge-text013">
                    <span className="FORM_Labels"> Combat Role</span>
                    <br className="FORM_Section"></br>
                  </span>
                </Fragment>
              }
              rootClassName="f-section-roles-root-class-name1"
            ></FSectionRoles>
          </div>
          <div className="forge-container5">
            <Form
              text={
                <Fragment>
                  <span className="forge-text016 FORM_Labels">Hit Points</span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="forge-text017 FORM_Labels">Speed</span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="forge-text018 FORM_Labels">Dexterity</span>
                </Fragment>
              }
              text4={
                <Fragment>
                  <span className="forge-text019 FORM_Labels">
                    Constitution
                  </span>
                </Fragment>
              }
              text5={
                <Fragment>
                  <span className="forge-text020 FORM_Labels">
                    Intelligence
                  </span>
                </Fragment>
              }
              text6={
                <Fragment>
                  <span className="forge-text021 FORM_Labels">Wisdom</span>
                </Fragment>
              }
              text7={
                <Fragment>
                  <span className="forge-text022 FORM_Labels">Charisma</span>
                </Fragment>
              }
              text8={
                <Fragment>
                  <span className="forge-text023 FORM_Labels">Skills</span>
                </Fragment>
              }
              text9={
                <Fragment>
                  <span className="forge-text024">
                    <span className="FORM_Labels">Senses</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              text10={
                <Fragment>
                  <span className="forge-text027 FORM_Labels">Resistances</span>
                </Fragment>
              }
              text11={
                <Fragment>
                  <span className="forge-text028">
                    <span className="FORM_Labels">Immunities</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              text12={
                <Fragment>
                  <span className="forge-text031">
                    <span className="FORM_Labels">Languages</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              text13={
                <Fragment>
                  <span className="forge-text034">
                    <span className="FORM_Labels">CR</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              text14={
                <Fragment>
                  <span className="forge-text037 FORM_Labels">Name</span>
                </Fragment>
              }
              text15={
                <Fragment>
                  <span className="forge-text038 FORM_Labels">Size</span>
                </Fragment>
              }
              text16={
                <Fragment>
                  <span className="forge-text039 FORM_Labels">Type</span>
                </Fragment>
              }
              text17={
                <Fragment>
                  <span className="forge-text040 FORM_Labels">Alignment</span>
                </Fragment>
              }
              text18={
                <Fragment>
                  <span className="forge-text041 FORM_Labels">Armor Class</span>
                </Fragment>
              }
              text19={
                <Fragment>
                  <span className="forge-text042 FORM_Labels">Initiative</span>
                </Fragment>
              }
              text23={
                <Fragment>
                  <label className="forge-text043">
                    <span>Score</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text24={
                <Fragment>
                  <label className="forge-text046">
                    <span>Mod</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text25={
                <Fragment>
                  <label className="forge-text049">
                    <span>Save</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text26={
                <Fragment>
                  <label className="forge-text052">
                    <span>Score</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text27={
                <Fragment>
                  <label className="forge-text055">
                    <span>Mod</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text28={
                <Fragment>
                  <label className="forge-text058">
                    <span>Save</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text29={
                <Fragment>
                  <label className="forge-text061">
                    <span>Score</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text30={
                <Fragment>
                  <label className="forge-text064">
                    <span>Mod</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text31={
                <Fragment>
                  <label className="forge-text067">
                    <span>Save</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text32={
                <Fragment>
                  <label className="forge-text070">
                    <span>Score</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text33={
                <Fragment>
                  <label className="forge-text073">
                    <span>Mod</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text34={
                <Fragment>
                  <label className="forge-text076">
                    <span>Save</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text35={
                <Fragment>
                  <label className="forge-text079">
                    <span>Score</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text36={
                <Fragment>
                  <label className="forge-text082">
                    <span>Mod</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text37={
                <Fragment>
                  <label className="forge-text085">
                    <span>Save</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              rootClassName="form-root-class-name1"
            ></Form>
          </div>
          <div className="forge-container6">
            <div className="forge-container7">
              <div className="forge-container8">
                <RefreshButton></RefreshButton>
                <Exports
                  text={
                    <Fragment>
                      <span className="forge-text088">
                        <span className="forge-text089">MARKDOWN  M</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  text2={
                    <Fragment>
                      <span className="forge-text091">Export:</span>
                    </Fragment>
                  }
                  text3={
                    <Fragment>
                      <span className="forge-text092">
                        <span className="forge-text093">
                          JSON &#123;;&#125;
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  text11={
                    <Fragment>
                      <span className="forge-text095">
                        <span>Print</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  rootClassName="exports-root-class-name1"
                ></Exports>
              </div>
              <Statblock2024
                text={
                  <Fragment>
                    <span className="forge-text098 ST_Name">
                      <span>Sphinx of Wonder</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="forge-text101 ST_Type">
                      Tiny Celestial, Lawful Good
                    </span>
                  </Fragment>
                }
                text2={
                  <Fragment>
                    <span className="forge-text102 ST_Char_lbl">HP</span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="forge-text103 ST_Section">
                      <span>Traits</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text11={
                  <Fragment>
                    <span className="forge-text106 ST_Text_Content">
                      <span className="forge-text107">Magic Resistance.</span>
                      <span className="forge-text108">
                        {' '}
                        The sphinx has Advantage on saving throws against spells
                        and other magical effects.
                      </span>
                    </span>
                  </Fragment>
                }
                text21={
                  <Fragment>
                    <span className="forge-text109 ST_Char_val">20</span>
                  </Fragment>
                }
                text25={
                  <Fragment>
                    <span className="forge-text110 ST_Char_lbl">AC</span>
                  </Fragment>
                }
                text26={
                  <Fragment>
                    <span className="forge-text111 ST_Char_lbl">Speed</span>
                  </Fragment>
                }
                text31={
                  <Fragment>
                    <span className="forge-text112 ST_Section">
                      <span>Actions</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text111={
                  <Fragment>
                    <span className="forge-text115 ST_Text_Content">
                      <span className="forge-text116">Magic Resistance.</span>
                      <span>
                        {' '}
                        The sphinx has Advantage on saving throws against spells
                        and other magical effects.
                      </span>
                    </span>
                  </Fragment>
                }
                text112={
                  <Fragment>
                    <span className="forge-text118 ST_Text_Content">
                      <span className="forge-text119">Rend.</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="forge-text121">Melee Attack Roll:</span>
                      <span>
                        {' '}
                        +5, reach 5 ft.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="forge-text123">Hit:</span>
                      <span>
                        {' '}
                        5 (1d4 + 3) Slashing damage plus 7 (2d6) Radiant damage.
                      </span>
                    </span>
                  </Fragment>
                }
                text214={
                  <Fragment>
                    <span className="forge-text125 ST_Char_val">13</span>
                  </Fragment>
                }
                text215={
                  <Fragment>
                    <span className="forge-text126 ST_Char_val">
                      <span className="ST_Char_val">(7d</span>
                      <span>4 + 7)</span>
                    </span>
                  </Fragment>
                }
                text216={
                  <Fragment>
                    <span className="forge-text129 ST_Char_val">
                      <span className="ST_Char_val">20 ft., Fly </span>
                      <span>40 ft.</span>
                    </span>
                  </Fragment>
                }
                text232={
                  <Fragment>
                    <span className="forge-text132 ST_Char_lbl">
                      Initiative
                    </span>
                  </Fragment>
                }
                text261={
                  <Fragment>
                    <span className="forge-text133 ST_Char_lbl">Skills</span>
                  </Fragment>
                }
                text311={
                  <Fragment>
                    <span className="forge-text134 ST_Section">
                      <span>Reactions</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text1121={
                  <Fragment>
                    <span className="forge-text137 ST_Text_Content">
                      <span className="forge-text138">
                        Burst of Ingenuity (2/Day)
                      </span>
                      <span className="forge-text139">
                        .
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="forge-text140">Trigger:</span>
                      <span className="forge-text141">
                        {' '}
                        The sphinx or another creature within 30 feet makes an
                        ability check or a saving throw.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="forge-text142">Response:</span>
                      <span className="forge-text143">
                        {' '}
                        The sphinx adds 2 to the roll.
                      </span>
                    </span>
                  </Fragment>
                }
                text2123={
                  <Fragment>
                    <span className="forge-text144 ST_Char_val">+3</span>
                  </Fragment>
                }
                text2143={
                  <Fragment>
                    <span className="forge-text145 ST_Char_val">
                      (natural armor) 
                    </span>
                  </Fragment>
                }
                text2161={
                  <Fragment>
                    <span className="forge-text146 ST_Char_val">
                      Arcana +4, Religion +4, Stealth +5
                    </span>
                  </Fragment>
                }
                text2611={
                  <Fragment>
                    <span className="forge-text147 ST_Char_lbl">CR</span>
                  </Fragment>
                }
                text2612={
                  <Fragment>
                    <span className="forge-text148 ST_Char_lbl">Languages</span>
                  </Fragment>
                }
                text2613={
                  <Fragment>
                    <span className="forge-text149 ST_Char_lbl">Senses</span>
                  </Fragment>
                }
                text2614={
                  <Fragment>
                    <span className="forge-text150 ST_Char_lbl">
                      Resistances
                    </span>
                  </Fragment>
                }
                text21212={
                  <Fragment>
                    <span className="forge-text151 ST_Char_val">(13)</span>
                  </Fragment>
                }
                text21611={
                  <Fragment>
                    <span className="forge-text152 ST_Char_val">1</span>
                  </Fragment>
                }
                text21612={
                  <Fragment>
                    <span className="forge-text153 ST_Char_val">
                      Celestial, Common
                    </span>
                  </Fragment>
                }
                text21613={
                  <Fragment>
                    <span className="forge-text154 ST_Char_val">
                      Darkvision 60 ft., Passive Perception 11
                    </span>
                  </Fragment>
                }
                text21614={
                  <Fragment>
                    <span className="forge-text155 ST_Char_val">
                      Necrotic, Psychic, Radiant
                    </span>
                  </Fragment>
                }
                text26141={
                  <Fragment>
                    <span className="forge-text156 ST_Char_lbl">
                      Immunities
                    </span>
                  </Fragment>
                }
                text216111={
                  <Fragment>
                    <span className="forge-text157 ST_Char_val">
                      (XP 200; PB +2)
                    </span>
                  </Fragment>
                }
                text216141={
                  <Fragment>
                    <span className="forge-text158 ST_Char_val">
                      Charmed, Poisoned, Fire
                    </span>
                  </Fragment>
                }
                rootClassName="statblock2024-root-class-name1"
              ></Statblock2024>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Forge.defaultProps = {
  heading: undefined,
  rootClassName: '',
}

Forge.propTypes = {
  heading: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Forge
