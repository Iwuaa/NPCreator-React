import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer3.css'

const Footer3 = (props) => {
  return (
    <footer
      className={`footer3-footer4 footer thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer3-max-width thq-section-max-width">
        <div className="footer3-content">
          <div className="footer3-logo">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer3-image"
            />
          </div>
          <div className="footer3-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer3-text1 Navigation">About</span>
                </Fragment>
              )}
            </a>
            <Link to="/" className="footer3-link2">
              {props.link2 ?? (
                <Fragment>
                  <span className="footer3-text3 Navigation">Tutorial</span>
                </Fragment>
              )}
            </Link>
            <Link to="/builder" className="footer3-link1">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer3-text4 Navigation">Forge</span>
                </Fragment>
              )}
            </Link>
          </div>
          <div className="footer3-social-links">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-small"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <a
              href={props.discordInviteUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="footer3-link"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer3-icon2 thq-icon-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer3-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer3-row">
            <div className="footer3-footer-links">
              <span className="footer3-content3">© 2024 TeleportHQ</span>
              <span>
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer3-text2">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer3-text">Cookies Settings</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer3.defaultProps = {
  cookiesLink: undefined,
  imageSrc: '/statblocksmithlogo1.svg',
  imageAlt: 'image',
  link3: undefined,
  discordInviteUrl: 'https://discord.gg/RgXKGdgZYD',
  privacyLink: undefined,
  link2: undefined,
  rootClassName: '',
  link1: undefined,
}

Footer3.propTypes = {
  cookiesLink: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  link3: PropTypes.element,
  discordInviteUrl: PropTypes.string,
  privacyLink: PropTypes.element,
  link2: PropTypes.element,
  rootClassName: PropTypes.string,
  link1: PropTypes.element,
}

export default Footer3
