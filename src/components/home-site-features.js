import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './home-site-features.css'

const HomeSiteFeatures = (props) => {
  return (
    <div className="home-site-features-layout301 thq-section-padding">
      <div className="home-site-features-max-width thq-section-max-width">
        <h2>
          {props.sectionTitle ?? (
            <Fragment>
              <h2 className="home-site-features-text05 thq-heading-2">
                Discover the Key Features
              </h2>
            </Fragment>
          )}
        </h2>
        <div className="home-site-features-row thq-grid-auto-300">
          <div className="home-site-features-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="home-site-features-content thq-flex-column">
              <div className="home-site-features-section-title thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h3 className="home-site-features-text01 thq-heading-3">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="home-site-features-text09 thq-body-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="home-site-features-action thq-flex-row">
                <button className="thq-button-flat">
                  <span>
                    {props.feature1Button ?? (
                      <Fragment>
                        <span className="home-site-features-text12 thq-body-small">
                          Button
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="home-site-features-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="home-site-features-content1 thq-flex-column">
              <div className="home-site-features-section-title1 thq-flex-column">
                <strong>
                  {props.feature2Title ?? (
                    <Fragment>
                      <strong className="home-site-features-text08 thq-heading-3">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </strong>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="home-site-features-text07 thq-body-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="home-site-features-action1 thq-flex-row">
                <button className="thq-button-flat">
                  <span>
                    {props.feature2Button ?? (
                      <Fragment>
                        <span className="home-site-features-text04 thq-body-small">
                          Button
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="home-site-features-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="home-site-features-content2 thq-flex-column">
              <div className="home-site-features-section-title2 thq-flex-column">
                <strong>
                  {props.feature3Title ?? (
                    <Fragment>
                      <strong className="home-site-features-text03 thq-heading-3">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </strong>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="home-site-features-text10 thq-body-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="home-site-features-action2 thq-flex-row">
                <button className="thq-button-flat">
                  <span>
                    {props.feature3Button ?? (
                      <Fragment>
                        <span className="home-site-features-text11 thq-body-small">
                          Button
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="home-site-features-feature4">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="home-site-features-content3 thq-flex-column">
              <div className="home-site-features-section-title3 thq-flex-column">
                <strong>
                  {props.feature4Title ?? (
                    <Fragment>
                      <strong className="home-site-features-text13 thq-heading-3">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </strong>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="home-site-features-text02 thq-body-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="home-site-features-action3 thq-flex-row">
                <button className="thq-button-flat">
                  <span>
                    {props.feature4Button ?? (
                      <Fragment>
                        <span className="home-site-features-text06 thq-body-small">
                          Button
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeSiteFeatures.defaultProps = {
  feature1ImageAlt: 'image1',
  feature2ImageAlt: 'image2',
  feature4ImageAlt: 'image 4',
  feature3ImageAlt: 'PlaceholderImage1314',
  feature1Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature4Description: undefined,
  feature3Title: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature2Button: undefined,
  sectionTitle: undefined,
  feature4Button: undefined,
  feature2Description: undefined,
  feature2Title: undefined,
  feature1Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature3Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature3Button: undefined,
  feature1Button: undefined,
  feature4Title: undefined,
}

HomeSiteFeatures.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature4Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature2Button: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature4Button: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3Button: PropTypes.element,
  feature1Button: PropTypes.element,
  feature4Title: PropTypes.element,
}

export default HomeSiteFeatures
