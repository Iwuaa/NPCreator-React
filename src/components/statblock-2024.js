import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import SbAbiTab from './sb-abi-tab'
import './statblock-2024.css'

const Statblock2024 = (props) => {
  return (
    <div className={`statblock-2024-container ${props.rootClassName} `}>
      <div className="statblock-2024-container01">
        <div className="statblock-2024-container02">
          <div className="statblock-2024-name-sb">
            <span>
              {props.text ?? (
                <Fragment>
                  <span className="statblock-2024-text080 ST_Name">
                    <span>Sphinx of Wonder</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="statblock-2024-type-stb">
            <span>
              {props.text1 ?? (
                <Fragment>
                  <span className="statblock-2024-text121 ST_Type">
                    Tiny Celestial, Lawful Good
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="statblock-2024-container03">
          <div className="statblock-2024-container04">
            <div className="statblock-2024-container05">
              <div className="statblock-2024-container06">
                <div className="statblock-2024-container07">
                  <span>
                    {props.text25 ?? (
                      <Fragment>
                        <span className="statblock-2024-text095 ST_Char_lbl">
                          AC
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span>
                    {props.text214 ?? (
                      <Fragment>
                        <span className="statblock-2024-text099 ST_Char_val">
                          13
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span>
                    {props.text2143 ?? (
                      <Fragment>
                        <span className="statblock-2024-text097 ST_Char_val">
                          (natural armor) 
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="statblock-2024-container08">
                <div className="statblock-2024-container09">
                  <span>
                    {props.text232 ?? (
                      <Fragment>
                        <span className="statblock-2024-text090 ST_Char_lbl">
                          Initiative
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span>
                    {props.text2123 ?? (
                      <Fragment>
                        <span className="statblock-2024-text116 ST_Char_val">
                          +3
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span>
                    {props.text21212 ?? (
                      <Fragment>
                        <span className="statblock-2024-text117 ST_Char_val">
                          (13)
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="statblock-2024-container10">
            <div className="statblock-2024-container11">
              <span>
                {props.text2 ?? (
                  <Fragment>
                    <span className="statblock-2024-text115 ST_Char_lbl">
                      HP
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text21 ?? (
                  <Fragment>
                    <span className="statblock-2024-text066 ST_Char_val">
                      20
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text215 ?? (
                  <Fragment>
                    <span className="statblock-2024-text100 ST_Char_val">
                      <span className="ST_Char_val">(7d</span>
                      <span>4 + 7)</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="statblock-2024-container12">
            <div className="statblock-2024-container13">
              <span>
                {props.text26 ?? (
                  <Fragment>
                    <span className="statblock-2024-text089 ST_Char_lbl">
                      Speed
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text216 ?? (
                  <Fragment>
                    <span className="statblock-2024-text118 ST_Char_val">
                      <span className="ST_Char_val">20 ft., Fly </span>
                      <span>40 ft.</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="statblock-2024-container14">
          <SbAbiTab
            text21232421={
              <Fragment>
                <span className="statblock-2024-text011 ST_ModSave">MOD</span>
              </Fragment>
            }
            text21232721={
              <Fragment>
                <span className="statblock-2024-text012 ST_Table_Abs">
                  <span>Int</span>
                  <br></br>
                </span>
              </Fragment>
            }
            text21232722={
              <Fragment>
                <span className="statblock-2024-text015 ST_Table_Abs">
                  <span>Int</span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="sb-abi-tab-root-class-name"
            text212323211={
              <Fragment>
                <span className="statblock-2024-text018 ST_Char_val">-2</span>
              </Fragment>
            }
            text212323212={
              <Fragment>
                <span className="statblock-2024-text019 ST_Char_val">-2</span>
              </Fragment>
            }
            text212324211={
              <Fragment>
                <span className="statblock-2024-text020 ST_Char_val">-2</span>
              </Fragment>
            }
            text212324212={
              <Fragment>
                <span className="statblock-2024-text021 ST_Char_val">-2</span>
              </Fragment>
            }
            text212324213={
              <Fragment>
                <span className="statblock-2024-text022 ST_ModSave">SAVE</span>
              </Fragment>
            }
            text212325211={
              <Fragment>
                <span className="statblock-2024-text023 ST_Char_val">6</span>
              </Fragment>
            }
            text212325212={
              <Fragment>
                <span className="statblock-2024-text024 ST_Char_val">6</span>
              </Fragment>
            }
          ></SbAbiTab>
          <SbAbiTab
            text21232421={
              <Fragment>
                <span className="statblock-2024-text025 ST_ModSave">MOD</span>
              </Fragment>
            }
            text21232721={
              <Fragment>
                <span className="statblock-2024-text026 ST_Table_Abs">
                  <span>Int</span>
                  <br></br>
                </span>
              </Fragment>
            }
            text21232722={
              <Fragment>
                <span className="statblock-2024-text029 ST_Table_Abs">
                  <span>Int</span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="sb-abi-tab-root-class-name3"
            text212323211={
              <Fragment>
                <span className="statblock-2024-text032 ST_Char_val">-2</span>
              </Fragment>
            }
            text212323212={
              <Fragment>
                <span className="statblock-2024-text033 ST_Char_val">-2</span>
              </Fragment>
            }
            text212324211={
              <Fragment>
                <span className="statblock-2024-text034 ST_Char_val">-2</span>
              </Fragment>
            }
            text212324212={
              <Fragment>
                <span className="statblock-2024-text035 ST_Char_val">-2</span>
              </Fragment>
            }
            text212324213={
              <Fragment>
                <span className="statblock-2024-text036 ST_ModSave">SAVE</span>
              </Fragment>
            }
            text212325211={
              <Fragment>
                <span className="statblock-2024-text037 ST_Char_val">6</span>
              </Fragment>
            }
            text212325212={
              <Fragment>
                <span className="statblock-2024-text038 ST_Char_val">6</span>
              </Fragment>
            }
          ></SbAbiTab>
          <SbAbiTab
            text21232421={
              <Fragment>
                <span className="statblock-2024-text039 ST_ModSave">MOD</span>
              </Fragment>
            }
            text21232721={
              <Fragment>
                <span className="statblock-2024-text040 ST_Table_Abs">
                  <span>Int</span>
                  <br></br>
                </span>
              </Fragment>
            }
            text21232722={
              <Fragment>
                <span className="statblock-2024-text043 ST_Table_Abs">
                  <span>Int</span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="sb-abi-tab-root-class-name2"
            text212323211={
              <Fragment>
                <span className="statblock-2024-text046 ST_Char_val">-2</span>
              </Fragment>
            }
            text212323212={
              <Fragment>
                <span className="statblock-2024-text047 ST_Char_val">-2</span>
              </Fragment>
            }
            text212324211={
              <Fragment>
                <span className="statblock-2024-text048 ST_Char_val">-2</span>
              </Fragment>
            }
            text212324212={
              <Fragment>
                <span className="statblock-2024-text049 ST_Char_val">-2</span>
              </Fragment>
            }
            text212324213={
              <Fragment>
                <span className="statblock-2024-text050 ST_ModSave">SAVE</span>
              </Fragment>
            }
            text212325211={
              <Fragment>
                <span className="statblock-2024-text051 ST_Char_val">6</span>
              </Fragment>
            }
            text212325212={
              <Fragment>
                <span className="statblock-2024-text052 ST_Char_val">6</span>
              </Fragment>
            }
          ></SbAbiTab>
        </div>
        <div className="statblock-2024-container15">
          <div className="statblock-2024-container16">
            <span>
              {props.text261 ?? (
                <Fragment>
                  <span className="statblock-2024-text105 ST_Char_lbl">
                    Skills
                  </span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text2161 ?? (
                <Fragment>
                  <span className="statblock-2024-text106 ST_Char_val">
                    Arcana +4, Religion +4, Stealth +5
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="statblock-2024-container17">
            <span>
              {props.text2614 ?? (
                <Fragment>
                  <span className="statblock-2024-text114 ST_Char_lbl">
                    Resistances
                  </span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text21614 ?? (
                <Fragment>
                  <span className="statblock-2024-text098 ST_Char_val">
                    Necrotic, Psychic, Radiant
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="statblock-2024-container18">
            <span>
              {props.text26141 ?? (
                <Fragment>
                  <span className="statblock-2024-text126 ST_Char_lbl">
                    Immunities
                  </span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text216141 ?? (
                <Fragment>
                  <span className="statblock-2024-text104 ST_Char_val">
                    Charmed, Poisoned, Fire
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="statblock-2024-container19">
            <span>
              {props.text2613 ?? (
                <Fragment>
                  <span className="statblock-2024-text096 ST_Char_lbl">
                    Senses
                  </span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text21613 ?? (
                <Fragment>
                  <span className="statblock-2024-text125 ST_Char_val">
                    Darkvision 60 ft., Passive Perception 11
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="statblock-2024-container20">
            <span>
              {props.text2612 ?? (
                <Fragment>
                  <span className="statblock-2024-text091 ST_Char_lbl">
                    Languages
                  </span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text21612 ?? (
                <Fragment>
                  <span className="statblock-2024-text079 ST_Char_val">
                    Celestial, Common
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="statblock-2024-container21">
            <span>
              {props.text2611 ?? (
                <Fragment>
                  <span className="statblock-2024-text078 ST_Char_lbl">CR</span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text21611 ?? (
                <Fragment>
                  <span className="statblock-2024-text103 ST_Char_val">1</span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text216111 ?? (
                <Fragment>
                  <span className="statblock-2024-text077 ST_Char_val">
                    (XP 200; PB +2)
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="statblock-2024-container22">
          <div className="statblock-2024-trait-sb">
            <span>
              {props.text3 ?? (
                <Fragment>
                  <span className="statblock-2024-text086 ST_Section">
                    <span>Traits</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="statblock-2024-type-stb1">
            <span>
              {props.text11 ?? (
                <Fragment>
                  <span className="statblock-2024-text083 ST_Text_Content">
                    <span className="statblock-2024-text084">
                      Magic Resistance.
                    </span>
                    <span className="statblock-2024-text085">
                      {' '}
                      The sphinx has Advantage on saving throws against spells
                      and other magical effects.
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="statblock-2024-type-stb2">
            <span>
              {props.text111 ?? (
                <Fragment>
                  <span className="statblock-2024-text092 ST_Text_Content">
                    <span className="statblock-2024-text093">
                      Magic Resistance.
                    </span>
                    <span>
                      {' '}
                      The sphinx has Advantage on saving throws against spells
                      and other magical effects.
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="statblock-2024-container23">
          <div className="statblock-2024-trait-sb1">
            <span>
              {props.text31 ?? (
                <Fragment>
                  <span className="statblock-2024-text122 ST_Section">
                    <span>Actions</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="statblock-2024-type-stb3">
            <span>
              {props.text112 ?? (
                <Fragment>
                  <span className="statblock-2024-text070 ST_Text_Content">
                    <span className="statblock-2024-text071">Rend.</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="statblock-2024-text073">
                      Melee Attack Roll:
                    </span>
                    <span>
                      {' '}
                      +5, reach 5 ft.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="statblock-2024-text075">Hit:</span>
                    <span>
                      {' '}
                      5 (1d4 + 3) Slashing damage plus 7 (2d6) Radiant damage.
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="statblock-2024-container24">
          <div className="statblock-2024-trait-sb2">
            <span>
              {props.text311 ?? (
                <Fragment>
                  <span className="statblock-2024-text067 ST_Section">
                    <span>Reactions</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="statblock-2024-type-stb4">
            <span>
              {props.text1121 ?? (
                <Fragment>
                  <span className="statblock-2024-text107 ST_Text_Content">
                    <span className="statblock-2024-text108">
                      Burst of Ingenuity (2/Day)
                    </span>
                    <span className="statblock-2024-text109">
                      .
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="statblock-2024-text110">Trigger:</span>
                    <span className="statblock-2024-text111">
                      {' '}
                      The sphinx or another creature within 30 feet makes an
                      ability check or a saving throw.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="statblock-2024-text112">Response:</span>
                    <span className="statblock-2024-text113">
                      {' '}
                      The sphinx adds 2 to the roll.
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Statblock2024.defaultProps = {
  text21: undefined,
  text311: undefined,
  text112: undefined,
  text216111: undefined,
  text2611: undefined,
  text21612: undefined,
  text: undefined,
  text11: undefined,
  text3: undefined,
  text26: undefined,
  text232: undefined,
  text2612: undefined,
  text111: undefined,
  text25: undefined,
  text2613: undefined,
  text2143: undefined,
  text21614: undefined,
  text214: undefined,
  text215: undefined,
  text21611: undefined,
  text216141: undefined,
  text261: undefined,
  text2161: undefined,
  text1121: undefined,
  text2614: undefined,
  rootClassName: '',
  text2: undefined,
  text2123: undefined,
  text21212: undefined,
  text216: undefined,
  text1: undefined,
  text31: undefined,
  text21613: undefined,
  text26141: undefined,
}

Statblock2024.propTypes = {
  text21: PropTypes.element,
  text311: PropTypes.element,
  text112: PropTypes.element,
  text216111: PropTypes.element,
  text2611: PropTypes.element,
  text21612: PropTypes.element,
  text: PropTypes.element,
  text11: PropTypes.element,
  text3: PropTypes.element,
  text26: PropTypes.element,
  text232: PropTypes.element,
  text2612: PropTypes.element,
  text111: PropTypes.element,
  text25: PropTypes.element,
  text2613: PropTypes.element,
  text2143: PropTypes.element,
  text21614: PropTypes.element,
  text214: PropTypes.element,
  text215: PropTypes.element,
  text21611: PropTypes.element,
  text216141: PropTypes.element,
  text261: PropTypes.element,
  text2161: PropTypes.element,
  text1121: PropTypes.element,
  text2614: PropTypes.element,
  rootClassName: PropTypes.string,
  text2: PropTypes.element,
  text2123: PropTypes.element,
  text21212: PropTypes.element,
  text216: PropTypes.element,
  text1: PropTypes.element,
  text31: PropTypes.element,
  text21613: PropTypes.element,
  text26141: PropTypes.element,
}

export default Statblock2024
