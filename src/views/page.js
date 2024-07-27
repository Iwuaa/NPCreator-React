import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import NotFound3 from '../components/not-found3'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - NPCreator</title>
        <meta property="og:title" content="Page - NPCreator" />
      </Helmet>
      <Navbar2
        link1={
          <fragment>
            <span className="page-text thq-body-small thq-link">Link1</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="page-text1 thq-body-small thq-link">Link2</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="page-text2 thq-body-small thq-link">Link3</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="page-text3 thq-body-small thq-link">Link4</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="page-text4 thq-body-small thq-link">Link5</span>
          </fragment>
        }
        heading={
          <fragment>
            <span className="page-text5">NPCreator</span>
          </fragment>
        }
        rootClassName="navbar2-root-class-name1"
      ></Navbar2>
      <NotFound3
        action1={
          <fragment>
            <span className="page-text6 thq-body-small">Back to start</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="page-text7 thq-body-small">
              Surrounded by the unknown, you strive to recall the path that will
              lead you back to the start.
            </span>
          </fragment>
        }
        rootClassName="not-found3-root-class-name"
      ></NotFound3>
    </div>
  )
}

export default Page
