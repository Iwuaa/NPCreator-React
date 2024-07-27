import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Banner1 from '../components/banner1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NPCreator</title>
        <meta property="og:title" content="NPCreator" />
      </Helmet>
      <Navbar2
        link1={
          <fragment>
            <span className="home-text thq-body-small thq-link">Link1</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text1 thq-body-small thq-link">Link2</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text2 thq-body-small thq-link">Link3</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="home-text3 thq-body-small thq-link">Link4</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="home-text4 thq-body-small thq-link">Link5</span>
          </fragment>
        }
        heading={
          <fragment>
            <span className="home-text5">NPCreator</span>
          </fragment>
        }
      ></Navbar2>
      <Banner1
        action1={
          <fragment>
            <span className="home-text6">Create NPC</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text7 thq-heading-3">Quick NPC Builder</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text8 thq-heading-2">NPCreator</span>
          </fragment>
        }
        rootClassName="banner1-root-class-name"
      ></Banner1>
    </div>
  )
}

export default Home
