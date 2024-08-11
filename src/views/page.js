import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Body from '../components/body'
import NotFound from '../components/not-found'
import Footer3 from '../components/footer3'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Stat Blocksmith</title>
        <meta property="og:title" content="Page - Stat Blocksmith" />
      </Helmet>
      <Navbar
        link1={
          <Fragment>
            <span className="page-text Navigation">About</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="page-text01 Navigation">Tutorial</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="page-text02 Navigation thq-body-small thq-link">
              Link3
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="page-text03 thq-body-small thq-link">Link4</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="page-text04 thq-body-small thq-link">Link5</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="page-text05">Forge Stat Block</span>
          </Fragment>
        }
        rootClassName="navbar-root-class-name1"
      ></Navbar>
      <Body rootClassName="body-root-class-name"></Body>
      <NotFound
        action1={
          <Fragment>
            <span className="page-text06 thq-body-small">Back to start</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="page-text07 thq-body-small">
              Surrounded by the unknown, you strive to recall the path that will
              lead you back to the start.
            </span>
          </Fragment>
        }
        rootClassName="not-found-root-class-name"
      ></NotFound>
      <Footer3
        link1={
          <Fragment>
            <span className="page-text08 Navigation">Forge</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="page-text09 Navigation">Tutorial</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="page-text10 Navigation">About</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="page-text11">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="page-text12">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer3-root-class-name"
      ></Footer3>
    </div>
  )
}

export default Page
