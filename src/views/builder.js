import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Body from '../components/body'
import Forge from '../components/forge'
import FSectionCreatureSelect from '../components/f-section-creature-select'
import FSectionClasses from '../components/f-section-classes'
import FSectionRoles from '../components/f-section-roles'
import Form from '../components/form'
import RefreshButton from '../components/refresh-button'
import Exports from '../components/exports'
import Statblock2024 from '../components/statblock-2024'
import Footer3 from '../components/footer3'
import './builder.css'

const Builder = (props) => {
  return (
    <div className="builder-container">
      <Helmet>
        <title>Builder - Stat Blocksmith</title>
        <meta property="og:title" content="Builder - Stat Blocksmith" />
      </Helmet>
      <Navbar
        link1={
          <Fragment>
            <span className="builder-text Navigation">About</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="builder-text001 Navigation">Tutorial</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="builder-text002 Navigation thq-body-small thq-link">
              Forge Stat block
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="builder-text003 thq-body-small thq-link">
              Link4
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="builder-text004 thq-body-small thq-link">
              Link5
            </span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="builder-text005">Forge Stat Block</span>
          </Fragment>
        }
        rootClassName="navbar-root-class-name"
      ></Navbar>
      <Body rootClassName="body-root-class-name1">
        <Forge
          heading={
            <Fragment>
              <h1 className="builder-text006">Forge</h1>
            </Fragment>
          }
          rootClassName="forge-root-class-name1"
        ></Forge>
      </Body>
      <div className="builder-container1">
        <h1 className="builder-text007">Forge</h1>
      </div>
      <div className="builder-container2">
        <div className="builder-container3">
          <div className="builder-container4">
            <FSectionCreatureSelect
              text121={
                <Fragment>
                  <span className="builder-text008">
                    <span className="FORM_Labels"> Stencil Creature</span>
                    <br className="FORM_Section"></br>
                  </span>
                </Fragment>
              }
              rootClassName="f-section-creature-select-root-class-name"
            ></FSectionCreatureSelect>
            <FSectionClasses
              text1={
                <Fragment>
                  <span className="builder-text011 FORM_Values">Text</span>
                </Fragment>
              }
              text1211={
                <Fragment>
                  <span className="builder-text012">
                    <span className="FORM_Labels"> Class</span>
                    <br className="FORM_Section"></br>
                  </span>
                </Fragment>
              }
              rootClassName="f-section-classes-root-class-name"
            ></FSectionClasses>
            <FSectionRoles
              text={
                <Fragment>
                  <span className="builder-text015 FORM_Values">Text</span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="builder-text016 FORM_Values">Text</span>
                </Fragment>
              }
              text121={
                <Fragment>
                  <span className="builder-text017">
                    <span className="FORM_Labels">Combat Role</span>
                    <br className="FORM_Section"></br>
                  </span>
                </Fragment>
              }
              text1211={
                <Fragment>
                  <span className="builder-text020">
                    <span className="FORM_Labels"> Combat Role</span>
                    <br className="FORM_Section"></br>
                  </span>
                </Fragment>
              }
              rootClassName="f-section-roles-root-class-name"
            ></FSectionRoles>
          </div>
          <div className="builder-container5">
            <Form
              text={
                <Fragment>
                  <span className="builder-text023 FORM_Labels">
                    Hit Points
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="builder-text024 FORM_Labels">Speed</span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="builder-text025 FORM_Labels">Dexterity</span>
                </Fragment>
              }
              text4={
                <Fragment>
                  <span className="builder-text026 FORM_Labels">
                    Constitution
                  </span>
                </Fragment>
              }
              text5={
                <Fragment>
                  <span className="builder-text027 FORM_Labels">
                    Intelligence
                  </span>
                </Fragment>
              }
              text6={
                <Fragment>
                  <span className="builder-text028 FORM_Labels">Wisdom</span>
                </Fragment>
              }
              text7={
                <Fragment>
                  <span className="builder-text029 FORM_Labels">Charisma</span>
                </Fragment>
              }
              text8={
                <Fragment>
                  <span className="builder-text030 FORM_Labels">Skills</span>
                </Fragment>
              }
              text9={
                <Fragment>
                  <span className="builder-text031">
                    <span className="FORM_Labels">Senses</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              text10={
                <Fragment>
                  <span className="builder-text034 FORM_Labels">
                    Resistances
                  </span>
                </Fragment>
              }
              text11={
                <Fragment>
                  <span className="builder-text035">
                    <span className="FORM_Labels">Immunities</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              text12={
                <Fragment>
                  <span className="builder-text038">
                    <span className="FORM_Labels">Languages</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              text13={
                <Fragment>
                  <span className="builder-text041">
                    <span className="FORM_Labels">CR</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              text14={
                <Fragment>
                  <span className="builder-text044 FORM_Labels">Name</span>
                </Fragment>
              }
              text15={
                <Fragment>
                  <span className="builder-text045 FORM_Labels">Size</span>
                </Fragment>
              }
              text16={
                <Fragment>
                  <span className="builder-text046 FORM_Labels">Type</span>
                </Fragment>
              }
              text17={
                <Fragment>
                  <span className="builder-text047 FORM_Labels">Alignment</span>
                </Fragment>
              }
              text18={
                <Fragment>
                  <span className="builder-text048 FORM_Labels">
                    Armor Class
                  </span>
                </Fragment>
              }
              text19={
                <Fragment>
                  <span className="builder-text049 FORM_Labels">
                    Initiative
                  </span>
                </Fragment>
              }
              text23={
                <Fragment>
                  <label className="builder-text050">
                    <span>Score</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text24={
                <Fragment>
                  <label className="builder-text053">
                    <span>Mod</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text25={
                <Fragment>
                  <label className="builder-text056">
                    <span>Save</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text26={
                <Fragment>
                  <label className="builder-text059">
                    <span>Score</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text27={
                <Fragment>
                  <label className="builder-text062">
                    <span>Mod</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text28={
                <Fragment>
                  <label className="builder-text065">
                    <span>Save</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text29={
                <Fragment>
                  <label className="builder-text068">
                    <span>Score</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text30={
                <Fragment>
                  <label className="builder-text071">
                    <span>Mod</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text31={
                <Fragment>
                  <label className="builder-text074">
                    <span>Save</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text32={
                <Fragment>
                  <label className="builder-text077">
                    <span>Score</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text33={
                <Fragment>
                  <label className="builder-text080">
                    <span>Mod</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text34={
                <Fragment>
                  <label className="builder-text083">
                    <span>Save</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text35={
                <Fragment>
                  <label className="builder-text086">
                    <span>Score</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text36={
                <Fragment>
                  <label className="builder-text089">
                    <span>Mod</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              text37={
                <Fragment>
                  <label className="builder-text092">
                    <span>Save</span>
                    <br></br>
                  </label>
                </Fragment>
              }
              rootClassName="form-root-class-name"
            ></Form>
          </div>
          <div className="builder-container6">
            <div className="builder-container7">
              <div className="builder-container8">
                <RefreshButton></RefreshButton>
                <Exports
                  text={
                    <Fragment>
                      <span className="builder-text095">
                        <span className="builder-text096">MARKDOWN  M</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  text2={
                    <Fragment>
                      <span className="builder-text098">Export:</span>
                    </Fragment>
                  }
                  text3={
                    <Fragment>
                      <span className="builder-text099">
                        <span className="builder-text100">
                          JSON &#123;;&#125;
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  text11={
                    <Fragment>
                      <span className="builder-text102">
                        <span>Print</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  rootClassName="exports-root-class-name"
                ></Exports>
              </div>
              <Statblock2024
                text={
                  <Fragment>
                    <span className="builder-text105 ST_Name">
                      <span>Sphinx of Wonder</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="builder-text108 ST_Type">
                      Tiny Celestial, Lawful Good
                    </span>
                  </Fragment>
                }
                text2={
                  <Fragment>
                    <span className="builder-text109 ST_Char_lbl">HP</span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="builder-text110 ST_Section">
                      <span>Traits</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text11={
                  <Fragment>
                    <span className="builder-text113 ST_Text_Content">
                      <span className="builder-text114">Magic Resistance.</span>
                      <span className="builder-text115">
                        {' '}
                        The sphinx has Advantage on saving throws against spells
                        and other magical effects.
                      </span>
                    </span>
                  </Fragment>
                }
                text21={
                  <Fragment>
                    <span className="builder-text116 ST_Char_val">20</span>
                  </Fragment>
                }
                text25={
                  <Fragment>
                    <span className="builder-text117 ST_Char_lbl">AC</span>
                  </Fragment>
                }
                text26={
                  <Fragment>
                    <span className="builder-text118 ST_Char_lbl">Speed</span>
                  </Fragment>
                }
                text31={
                  <Fragment>
                    <span className="builder-text119 ST_Section">
                      <span>Actions</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text111={
                  <Fragment>
                    <span className="builder-text122 ST_Text_Content">
                      <span className="builder-text123">Magic Resistance.</span>
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
                    <span className="builder-text125 ST_Text_Content">
                      <span className="builder-text126">Rend.</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="builder-text128">
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
                      <span className="builder-text130">Hit:</span>
                      <span>
                        {' '}
                        5 (1d4 + 3) Slashing damage plus 7 (2d6) Radiant damage.
                      </span>
                    </span>
                  </Fragment>
                }
                text214={
                  <Fragment>
                    <span className="builder-text132 ST_Char_val">13</span>
                  </Fragment>
                }
                text215={
                  <Fragment>
                    <span className="builder-text133 ST_Char_val">
                      <span className="ST_Char_val">(7d</span>
                      <span>4 + 7)</span>
                    </span>
                  </Fragment>
                }
                text216={
                  <Fragment>
                    <span className="builder-text136 ST_Char_val">
                      <span className="ST_Char_val">20 ft., Fly </span>
                      <span>40 ft.</span>
                    </span>
                  </Fragment>
                }
                text232={
                  <Fragment>
                    <span className="builder-text139 ST_Char_lbl">
                      Initiative
                    </span>
                  </Fragment>
                }
                text261={
                  <Fragment>
                    <span className="builder-text140 ST_Char_lbl">Skills</span>
                  </Fragment>
                }
                text311={
                  <Fragment>
                    <span className="builder-text141 ST_Section">
                      <span>Reactions</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text1121={
                  <Fragment>
                    <span className="builder-text144 ST_Text_Content">
                      <span className="builder-text145">
                        Burst of Ingenuity (2/Day)
                      </span>
                      <span className="builder-text146">
                        .
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="builder-text147">Trigger:</span>
                      <span className="builder-text148">
                        {' '}
                        The sphinx or another creature within 30 feet makes an
                        ability check or a saving throw.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="builder-text149">Response:</span>
                      <span className="builder-text150">
                        {' '}
                        The sphinx adds 2 to the roll.
                      </span>
                    </span>
                  </Fragment>
                }
                text2123={
                  <Fragment>
                    <span className="builder-text151 ST_Char_val">+3</span>
                  </Fragment>
                }
                text2143={
                  <Fragment>
                    <span className="builder-text152 ST_Char_val">
                      (natural armor) 
                    </span>
                  </Fragment>
                }
                text2161={
                  <Fragment>
                    <span className="builder-text153 ST_Char_val">
                      Arcana +4, Religion +4, Stealth +5
                    </span>
                  </Fragment>
                }
                text2611={
                  <Fragment>
                    <span className="builder-text154 ST_Char_lbl">CR</span>
                  </Fragment>
                }
                text2612={
                  <Fragment>
                    <span className="builder-text155 ST_Char_lbl">
                      Languages
                    </span>
                  </Fragment>
                }
                text2613={
                  <Fragment>
                    <span className="builder-text156 ST_Char_lbl">Senses</span>
                  </Fragment>
                }
                text2614={
                  <Fragment>
                    <span className="builder-text157 ST_Char_lbl">
                      Resistances
                    </span>
                  </Fragment>
                }
                text21212={
                  <Fragment>
                    <span className="builder-text158 ST_Char_val">(13)</span>
                  </Fragment>
                }
                text21611={
                  <Fragment>
                    <span className="builder-text159 ST_Char_val">1</span>
                  </Fragment>
                }
                text21612={
                  <Fragment>
                    <span className="builder-text160 ST_Char_val">
                      Celestial, Common
                    </span>
                  </Fragment>
                }
                text21613={
                  <Fragment>
                    <span className="builder-text161 ST_Char_val">
                      Darkvision 60 ft., Passive Perception 11
                    </span>
                  </Fragment>
                }
                text21614={
                  <Fragment>
                    <span className="builder-text162 ST_Char_val">
                      Necrotic, Psychic, Radiant
                    </span>
                  </Fragment>
                }
                text26141={
                  <Fragment>
                    <span className="builder-text163 ST_Char_lbl">
                      Immunities
                    </span>
                  </Fragment>
                }
                text216111={
                  <Fragment>
                    <span className="builder-text164 ST_Char_val">
                      (XP 200; PB +2)
                    </span>
                  </Fragment>
                }
                text216141={
                  <Fragment>
                    <span className="builder-text165 ST_Char_val">
                      Charmed, Poisoned, Fire
                    </span>
                  </Fragment>
                }
                rootClassName="statblock2024-root-class-name"
              ></Statblock2024>
            </div>
          </div>
        </div>
      </div>
      <Forge
        heading={
          <Fragment>
            <h1 className="builder-text166">Forge</h1>
          </Fragment>
        }
        rootClassName="forge-root-class-name"
      ></Forge>
      <Footer3
        link1={
          <Fragment>
            <span className="builder-text167 Navigation">Forge</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="builder-text168 Navigation">Tutorial</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="builder-text169 Navigation">About</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="builder-text170">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="builder-text171">Privacy Policy</span>
          </Fragment>
        }
      ></Footer3>
    </div>
  )
}

export default Builder
