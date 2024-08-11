import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list5.css'

const ContentList5 = (props) => {
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  return (
    <div
      className={`content-list5-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="content-list5-max-width thq-flex-column thq-section-max-width">
        <div className="content-list5-container1 thq-section-max-width thq-flex-row">
          {isTermsVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsPrivacyVisible(false)
                setIsTermsVisible(true)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="content-list5-text21">
                      Terms of service
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isTermsVisible && (
            <button
              onClick={() => {
                setIsPrivacyVisible(false)
                setIsTermsVisible(true)
                setIsRefundVisible(false)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="content-list5-text21">
                      Terms of service
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isPrivacyVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsRefundVisible(false)
                setIsPrivacyVisible(true)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="content-list5-text33">
                      Privacy statement
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isPrivacyVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsPrivacyVisible(true)
                setIsTermsVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="content-list5-text33">
                      Privacy statement
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isRefundVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(true)
                setIsTermsVisible(false)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="content-list5-text19">Refund Policy</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isRefundVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(true)
                setIsTermsVisible(false)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="content-list5-text19">Refund Policy</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
        </div>
        <div className="content-list5-container2 thq-flex-column">
          {isTermsVisible && (
            <div className="content-list5-container3">
              <ul className="thq-flex-column">
                <li className="content-list5-li thq-flex-column list-item">
                  <h2>
                    {props.heading7 ?? (
                      <Fragment>
                        <h2 className="content-list5-text16 thq-heading-2">
                          Terms of service
                        </h2>
                      </Fragment>
                    )}
                  </h2>
                  <p>
                    {props.content7 ?? (
                      <Fragment>
                        <p className="content-list5-text06 thq-body-small">
                          Lorem ipsum dolor sit amet. Vel dolores illum est
                          aperiam quis nam voluptatem quia et omnis autem qui
                          dolore ullam sed fugiat cumque! Qui accusamus
                          assumenda et molestias eius et error sunt. Id
                          recusandae nostrum ea officiis voluptatem in nisi
                          consequatur sed quia tenetur sit alias molestias qui
                          illum soluta. Est nesciunt perferendis eum sint rerum
                          33 cupiditate dolorem id corrupti laboriosam ut
                          debitis veniam ut ipsam fugit vel sunt consequatur. Et
                          nobis quasi et cumque adipisci aut molestiae eligendi
                          quo inventore dicta ea suscipit sequi sed veritatis
                          nemo.
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <ul className="content-list5-ul1 thq-flex-column">
                    <li className="list-item">
                      <h3>
                        {props.heading8 ?? (
                          <Fragment>
                            <h3 className="content-list5-text20 thq-heading-3">
                              General Terms and Conditions
                            </h3>
                          </Fragment>
                        )}
                      </h3>
                      <p>
                        {props.content2 ?? (
                          <Fragment>
                            <p className="content-list5-text11 thq-body-small">
                              Lorem ipsum dolor sit amet. Nam nihil facilis sit
                              consequuntur internos qui minima rerum ut
                              molestias laudantium aut iusto deserunt. Aut
                              voluptatibus excepturi qui officia laudantium est
                              repellendus tempore hic sunt debitis. Ut galisum
                              tempore in enim fugit eum pariatur possimus est
                              tenetur nemo et sint sint et dolores Quis. Aut
                              illum perspiciatis rem architecto culpa et fuga
                              aliquid. Est omnis praesentium ut nisi internos
                              rem quod totam et similique quis. Est tempore
                              cumque aut recusandae labore qui error molestiae
                              et possimus quia! Eum Quis asperiores non nihil
                              tempora qui quia voluptatem aut aspernatur
                              aspernatur aut asperiores labore et sapiente
                              quaerat qui suscipit quia. Ea nesciunt iste aut
                              temporibus culpa sit dignissimos quaerat eum
                              architecto voluptatum et nemo velit At harum
                              harum.
                            </p>
                          </Fragment>
                        )}
                      </p>
                    </li>
                    <li className="list-item">
                      <h3>
                        {props.heading9 ?? (
                          <Fragment>
                            <h3 className="content-list5-text14 thq-heading-3">
                              Products and Services
                            </h3>
                          </Fragment>
                        )}
                      </h3>
                      <p>
                        {props.content9 ?? (
                          <Fragment>
                            <p className="content-list5-text23 thq-body-small">
                              Lorem ipsum dolor sit amet. Est vitae blanditiis
                              ab aliquam tempore aut ipsam iusto in sunt
                              repellat ex voluptatum inventore ab facilis
                              galisum ea consequatur consequuntur. Ab voluptas
                              voluptatem eum consequatur aspernatur non
                              laboriosam atque est labore asperiores a neque
                              quos. Ea nemo modi hic dicta saepe et veritatis
                              maiores At praesentium aliquid. Sed dolores
                              architecto non doloribus quia eos consectetur
                              commodi non tenetur vitae est neque omnis. Non
                              perspiciatis velit At aliquam rerum ut officiis
                              ipsa id minima eius ut sapiente nobis et nemo
                              neque. Aut maiores tempora in officiis sunt eum
                              voluptatem tenetur sit iste reprehenderit ea nisi
                              dolor. Ea impedit omnis ad internos autem ut esse
                              sunt ad saepe maiores vel perferendis veritatis.
                              Ex magni fugiat ut reprehenderit laudantium sit
                              galisum ipsam eos tempora doloribus sed
                              accusantium nobis eum praesentium quod.
                            </p>
                          </Fragment>
                        )}
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isPrivacyVisible && (
            <div className="content-list5-container4">
              <ul className="thq-flex-column">
                <li className="content-list5-li03 thq-flex-column list-item">
                  <h1>
                    {props.heading1 ?? (
                      <Fragment>
                        <h1 className="content-list5-text29 thq-heading-2">
                          NPC Builder Tool
                        </h1>
                      </Fragment>
                    )}
                  </h1>
                  <span>
                    {props.content1 ?? (
                      <Fragment>
                        <span className="content-list5-text24 thq-body-small">
                          Lorem ipsum dolor sit amet. Vel dolores illum est
                          aperiam quis nam voluptatem quia et omnis autem qui
                          dolore ullam sed fugiat cumque! Qui accusamus
                          assumenda et molestias eius et error sunt. Id
                          recusandae nostrum ea officiis voluptatem in nisi
                          consequatur sed quia tenetur sit alias molestias qui
                          illum soluta. Est nesciunt perferendis eum sint rerum
                          33 cupiditate dolorem id corrupti laboriosam ut
                          debitis veniam ut ipsam fugit vel sunt consequatur. Et
                          nobis quasi et cumque adipisci aut molestiae eligendi
                          quo inventore dicta ea suscipit sequi sed veritatis
                          nemo.
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="content-list5-ul3 thq-flex-column">
                    <li className="list-item">
                      <h1>
                        {props.heading2 ?? (
                          <Fragment>
                            <h1 className="content-list5-text17 thq-heading-3">
                              Additional Resources
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content2 ?? (
                          <Fragment>
                            <p className="content-list5-text11 thq-body-small">
                              Lorem ipsum dolor sit amet. Nam nihil facilis sit
                              consequuntur internos qui minima rerum ut
                              molestias laudantium aut iusto deserunt. Aut
                              voluptatibus excepturi qui officia laudantium est
                              repellendus tempore hic sunt debitis. Ut galisum
                              tempore in enim fugit eum pariatur possimus est
                              tenetur nemo et sint sint et dolores Quis. Aut
                              illum perspiciatis rem architecto culpa et fuga
                              aliquid. Est omnis praesentium ut nisi internos
                              rem quod totam et similique quis. Est tempore
                              cumque aut recusandae labore qui error molestiae
                              et possimus quia! Eum Quis asperiores non nihil
                              tempora qui quia voluptatem aut aspernatur
                              aspernatur aut asperiores labore et sapiente
                              quaerat qui suscipit quia. Ea nesciunt iste aut
                              temporibus culpa sit dignissimos quaerat eum
                              architecto voluptatum et nemo velit At harum
                              harum.
                            </p>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading3 ?? (
                          <Fragment>
                            <h1 className="content-list5-text28 thq-heading-3">
                              Privacy Policy
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content3 ?? (
                          <Fragment>
                            <span className="content-list5-text22 thq-body-small">
                              Lorem ipsum dolor sit amet. Est vitae blanditiis
                              ab aliquam tempore aut ipsam iusto in sunt
                              repellat ex voluptatum inventore ab facilis
                              galisum ea consequatur consequuntur. Ab voluptas
                              voluptatem eum consequatur aspernatur non
                              laboriosam atque est labore asperiores a neque
                              quos. Ea nemo modi hic dicta saepe et veritatis
                              maiores At praesentium aliquid. Sed dolores
                              architecto non doloribus quia eos consectetur
                              commodi non tenetur vitae est neque omnis. Non
                              perspiciatis velit At aliquam rerum ut officiis
                              ipsa id minima eius ut sapiente nobis et nemo
                              neque. Aut maiores tempora in officiis sunt eum
                              voluptatem tenetur sit iste reprehenderit ea nisi
                              dolor. Ea impedit omnis ad internos autem ut esse
                              sunt ad saepe maiores vel perferendis veritatis.
                              Ex magni fugiat ut reprehenderit laudantium sit
                              galisum ipsam eos tempora doloribus sed
                              accusantium nobis eum praesentium quod.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading4 ?? (
                          <Fragment>
                            <h1 className="content-list5-text13 thq-heading-3">
                              Terms of Service
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content4 ?? (
                          <Fragment>
                            <span className="content-list5-text08 thq-body-small">
                              Lorem ipsum dolor sit amet. Id galisum officiis
                              rem quod internos qui provident quaerat hic minus
                              eveniet est officiis galisum sit rerum
                              dignissimos. Sit voluptatem alias et veniam rerum
                              ea quod ipsam ut quam neque est nihil repellat est
                              aspernatur voluptatem est voluptas ratione? Ea
                              vero tempore At soluta temporibus 33 galisum
                              excepturi quo modi distinctio. Qui dolor soluta
                              sit ipsam vitae et suscipit molestiae est
                              consequatur galisum aut sapiente voluptatem sed
                              quas eaque et minima minus? Rem soluta consequatur
                              et velit cupiditate sed eligendi laudantium rem
                              pariatur galisum sit mollitia debitis eum delectus
                              ipsum aut consequatur mollitia. Qui voluptatibus
                              molestias ut totam Quis ea unde dolorem sit animi
                              eveniet et galisum explicabo. Est culpa error ut
                              voluptatibus voluptatem qui dignissimos dolorem
                              quo laborum distinctio qui omnis perspiciatis ab
                              facilis temporibus qui perspiciatis consectetur.
                              Ab praesentium fugiat eos veritatis quam ex modi
                              autem et sapiente dolorem?
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading5 ?? (
                          <Fragment>
                            <h1 className="content-list5-text07 thq-heading-3">
                              Cookies Settings
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content5 ?? (
                          <Fragment>
                            <span className="content-list5-text32 thq-body-small">
                              Lorem ipsum dolor sit amet. Ut cumque cupiditate
                              eos perferendis tempora et ullam quis qui fugiat
                              necessitatibus qui quia dolorem 33 earum
                              reprehenderit eum rerum blanditiis. Et vitae
                              distinctio 33 magni ratione ut odit rerum est
                              nihil error et minus dolor quo harum fugiat. Eos
                              quam assumenda id fugit optio aut magni sunt! Ut
                              iure aliquam vel velit modi sit voluptatibus atque
                              ut corporis sint sit omnis enim a pariatur
                              officiis aut nulla voluptate. In facere incidunt
                              aut sapiente maxime qui quibusdam facilis non
                              officia consectetur sit laboriosam libero aut
                              cupiditate possimus ut sunt reiciendis. Et
                              repudiandae magnam aut quaerat ipsam aut repellat
                              laboriosam. Ab facilis deleniti ut voluptas
                              molestiae sed omnis maiores ut aliquid culpa vel
                              nesciunt saepe. Aut placeat aspernatur aut alias
                              nihil vel neque recusandae et corrupti accusantium
                              ab quod temporibus ut nulla eaque et magnam nemo.
                              Ad sunt minus rem earum delectus hic officia iste
                              qui sunt quos non officiis illo vel doloribus
                              perspiciatis. Ab soluta eius sed quidem dolores
                              rem necessitatibus minus 33 minus commodi. Nam
                              repudiandae libero non laboriosam voluptate et
                              saepe fuga vel repudiandae pariatur aut assumenda
                              illo.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading6 ?? (
                          <Fragment>
                            <h1 className="content-list5-text30 thq-heading-3">
                              Cookies
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content6 ?? (
                          <Fragment>
                            <span className="content-list5-text18 thq-body-small">
                              Ut doloremque aliquam qui veniam deserunt sit
                              voluptates iusto et unde quod ut quam unde ut nemo
                              eius! Ut saepe consequuntur non quibusdam soluta
                              aut maiores eaque et rerum error nam incidunt
                              saepe aut nihil voluptatem. 33 nulla quaerat est
                              doloremque voluptatem ut libero magnam id placeat
                              aliquid. Ea minus totam est inventore minus sed
                              temporibus aperiam At ratione maiores eum libero
                              consequatur aut laborum exercitationem.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isRefundVisible && (
            <div className="content-list5-container5">
              <ul className="thq-flex-column">
                <li className="content-list5-li09 thq-flex-column list-item">
                  <h1>
                    {props.heading10 ?? (
                      <Fragment>
                        <h1 className="content-list5-text10 thq-heading-2">
                          Refund Policy
                        </h1>
                      </Fragment>
                    )}
                  </h1>
                  <span>
                    {props.content10 ?? (
                      <Fragment>
                        <span className="content-list5-text15 thq-body-small">
                          Lorem ipsum dolor sit amet. Vel dolores illum est
                          aperiam quis nam voluptatem quia et omnis autem qui
                          dolore ullam sed fugiat cumque! Qui accusamus
                          assumenda et molestias eius et error sunt. Id
                          recusandae nostrum ea officiis voluptatem in nisi
                          consequatur sed quia tenetur sit alias molestias qui
                          illum soluta. Est nesciunt perferendis eum sint rerum
                          33 cupiditate dolorem id corrupti laboriosam ut
                          debitis veniam ut ipsam fugit vel sunt consequatur. Et
                          nobis quasi et cumque adipisci aut molestiae eligendi
                          quo inventore dicta ea suscipit sequi sed veritatis
                          nemo.
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="content-list5-ul5 thq-flex-column">
                    <li className="list-item">
                      <h1>
                        {props.heading11 ?? (
                          <Fragment>
                            <h1 className="content-list5-text27 thq-heading-3">
                              General
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content11 ?? (
                          <Fragment>
                            <span className="content-list5-text26 thq-body-small">
                              Lorem ipsum dolor sit amet. Nam nihil facilis sit
                              consequuntur internos qui minima rerum ut
                              molestias laudantium aut iusto deserunt. Aut
                              voluptatibus excepturi qui officia laudantium est
                              repellendus tempore hic sunt debitis. Ut galisum
                              tempore in enim fugit eum pariatur possimus est
                              tenetur nemo et sint sint et dolores Quis. Aut
                              illum perspiciatis rem architecto culpa et fuga
                              aliquid. Est omnis praesentium ut nisi internos
                              rem quod totam et similique quis. Est tempore
                              cumque aut recusandae labore qui error molestiae
                              et possimus quia! Eum Quis asperiores non nihil
                              tempora qui quia voluptatem aut aspernatur
                              aspernatur aut asperiores labore et sapiente
                              quaerat qui suscipit quia. Ea nesciunt iste aut
                              temporibus culpa sit dignissimos quaerat eum
                              architecto voluptatum et nemo velit At harum
                              harum.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading12 ?? (
                          <Fragment>
                            <h1 className="content-list5-text09 thq-heading-3">
                              Damages and issues
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content12 ?? (
                          <Fragment>
                            <span className="content-list5-text25 thq-body-small">
                              Lorem ipsum dolor sit amet. Est vitae blanditiis
                              ab aliquam tempore aut ipsam iusto in sunt
                              repellat ex voluptatum inventore ab facilis
                              galisum ea consequatur consequuntur. Ab voluptas
                              voluptatem eum consequatur aspernatur non
                              laboriosam atque est labore asperiores a neque
                              quos. Ea nemo modi hic dicta saepe et veritatis
                              maiores At praesentium aliquid. Sed dolores
                              architecto non doloribus quia eos consectetur
                              commodi non tenetur vitae est neque omnis. Non
                              perspiciatis velit At aliquam rerum ut officiis
                              ipsa id minima eius ut sapiente nobis et nemo
                              neque. Aut maiores tempora in officiis sunt eum
                              voluptatem tenetur sit iste reprehenderit ea nisi
                              dolor. Ea impedit omnis ad internos autem ut esse
                              sunt ad saepe maiores vel perferendis veritatis.
                              Ex magni fugiat ut reprehenderit laudantium sit
                              galisum ipsam eos tempora doloribus sed
                              accusantium nobis eum praesentium quod.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading13 ?? (
                          <Fragment>
                            <h1 className="content-list5-text31 thq-heading-3">
                              Refunds
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content13 ?? (
                          <Fragment>
                            <span className="content-list5-text12 thq-body-small">
                              Lorem ipsum dolor sit amet. Est vitae blanditiis
                              ab aliquam tempore aut ipsam iusto in sunt
                              repellat ex voluptatum inventore ab facilis
                              galisum ea consequatur consequuntur. Ab voluptas
                              voluptatem eum consequatur aspernatur non
                              laboriosam atque est labore asperiores a neque
                              quos. Ea nemo modi hic dicta saepe et veritatis
                              maiores At praesentium aliquid. Sed dolores
                              architecto non doloribus quia eos consectetur
                              commodi non tenetur vitae est neque omnis. Non
                              perspiciatis velit At aliquam rerum ut officiis
                              ipsa id minima eius ut sapiente nobis et nemo
                              neque. Aut maiores tempora in officiis sunt eum
                              voluptatem tenetur sit iste reprehenderit ea nisi
                              dolor. Ea impedit omnis ad internos autem ut esse
                              sunt ad saepe maiores vel perferendis veritatis.
                              Ex magni fugiat ut reprehenderit laudantium sit
                              galisum ipsam eos tempora doloribus sed
                              accusantium nobis eum praesentium quod.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ContentList5.defaultProps = {
  content7: undefined,
  heading5: undefined,
  content4: undefined,
  heading12: undefined,
  heading10: undefined,
  content2: undefined,
  content13: undefined,
  heading4: undefined,
  heading9: undefined,
  content10: undefined,
  heading7: undefined,
  heading2: undefined,
  content6: undefined,
  button2: undefined,
  heading8: undefined,
  button: undefined,
  content3: undefined,
  rootClassName: '',
  content9: undefined,
  content1: undefined,
  content12: undefined,
  content11: undefined,
  heading11: undefined,
  heading3: undefined,
  heading1: undefined,
  heading6: undefined,
  heading13: undefined,
  content5: undefined,
  button1: undefined,
}

ContentList5.propTypes = {
  content7: PropTypes.element,
  heading5: PropTypes.element,
  content4: PropTypes.element,
  heading12: PropTypes.element,
  heading10: PropTypes.element,
  content2: PropTypes.element,
  content13: PropTypes.element,
  heading4: PropTypes.element,
  heading9: PropTypes.element,
  content10: PropTypes.element,
  heading7: PropTypes.element,
  heading2: PropTypes.element,
  content6: PropTypes.element,
  button2: PropTypes.element,
  heading8: PropTypes.element,
  button: PropTypes.element,
  content3: PropTypes.element,
  rootClassName: PropTypes.string,
  content9: PropTypes.element,
  content1: PropTypes.element,
  content12: PropTypes.element,
  content11: PropTypes.element,
  heading11: PropTypes.element,
  heading3: PropTypes.element,
  heading1: PropTypes.element,
  heading6: PropTypes.element,
  heading13: PropTypes.element,
  content5: PropTypes.element,
  button1: PropTypes.element,
}

export default ContentList5
