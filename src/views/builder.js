import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import './builder.css'

const Builder = (props) => {
  return (
    <div className="builder-container">
      <Helmet>
        <title>Builder - NPCreator</title>
        <meta property="og:title" content="Builder - NPCreator" />
      </Helmet>
      <Navbar2
        link1={
          <fragment>
            <span className="builder-text thq-body-small thq-link">Link1</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="builder-text1 thq-body-small thq-link">Link2</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="builder-text2 thq-body-small thq-link">Link3</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="builder-text3 thq-body-small thq-link">Link4</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="builder-text4 thq-body-small thq-link">Link5</span>
          </fragment>
        }
        heading={
          <fragment>
            <span className="builder-text5">NPCreator</span>
          </fragment>
        }
        rootClassName="navbar2-root-class-name"
      ></Navbar2>
      <div className="builder-container1">
        <form className="builder-form"></form>
      </div>
    </div>
  )
}

export default Builder
