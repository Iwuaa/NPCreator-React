import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero1 from '../components/hero1'
import HomeSiteQuickLink from '../components/home-site-quick-link'
import Hero7 from '../components/hero7'
import ContentList5 from '../components/content-list5'
import HomeSiteFeatures from '../components/home-site-features'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Stat Blocksmith</title>
        <meta property="og:title" content="Stat Blocksmith" />
      </Helmet>
      <Navbar
        link1={
          <Fragment>
            <span className="home-text Navigation">About</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text01 Navigation">Tutorial</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text02 Navigation thq-body-small thq-link">
              Forge Stat block
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text03 thq-body-small thq-link">Link4</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text04 thq-body-small thq-link">Link5</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="home-text05">Forge Stat Block</span>
          </Fragment>
        }
        rootClassName="navbar-root-class-name2"
      ></Navbar>
      <Hero1
        action1={
          <Fragment>
            <span className="home-text06 thq-body-small">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text07 thq-body-small">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text08 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text09 thq-heading-1">
              Engaging hero headline for your website
            </h1>
          </Fragment>
        }
        image1Src="https://i.pinimg.com/originals/1a/a6/70/1aa67044a98a5796870089d2700ce669.jpg"
        rootClassName="hero1-root-class-name1"
      ></Hero1>
      <div
        data-thq="slider"
        data-loop="true"
        data-autoplay="true"
        data-navigation="true"
        data-pagination="true"
        data-disable-autoplay-on-interaction="true"
        className="home-slider swiper"
      >
        <div data-thq="slider-wrapper" className="swiper-wrapper">
          <div
            data-thq="slider-slide"
            className="home-slider-slide swiper-slide"
          >
            <Hero1
              action1={
                <Fragment>
                  <span className="home-text10 thq-body-small">
                    Main action
                  </span>
                </Fragment>
              }
              action2={
                <Fragment>
                  <span className="home-text11 thq-body-small">
                    Secondary action
                  </span>
                </Fragment>
              }
              content1={
                <Fragment>
                  <p className="home-text12 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                </Fragment>
              }
              heading1={
                <Fragment>
                  <h1 className="home-text13 thq-heading-1">Engagiwebsite</h1>
                </Fragment>
              }
              image1Src="https://i.pinimg.com/originals/1a/a6/70/1aa67044a98a5796870089d2700ce669.jpg"
              rootClassName="hero1-root-class-name"
            ></Hero1>
          </div>
          <div
            data-thq="slider-slide"
            className="home-slider-slide1 swiper-slide"
          ></div>
          <div
            data-thq="slider-slide"
            className="home-slider-slide2 swiper-slide"
          ></div>
          <div
            data-thq="slider-slide"
            className="home-slider-slide3 swiper-slide"
          ></div>
        </div>
        <div
          data-thq="slider-pagination"
          className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
        >
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
        </div>
        <div
          data-thq="slider-button-prev"
          className="home-slider-button-prev swiper-button-prev"
        ></div>
        <div
          data-thq="slider-button-next"
          className="home-slider-button-next swiper-button-next"
        ></div>
      </div>
      <HomeSiteQuickLink
        action1={
          <Fragment>
            <span className="home-text14">Create NPC</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <h3 className="home-text15 thq-heading-3">Quick NPC Builder</h3>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text16 thq-heading-2">NPCreator</h2>
          </Fragment>
        }
        rootClassName="home-site-quick-link-root-class-name"
      ></HomeSiteQuickLink>
      <Hero7
        action1={
          <Fragment>
            <span className="home-text17 thq-body-small">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text18 thq-body-small">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text19 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text20 thq-heading-1">
              Catchy and engaging hero headline here
            </h1>
          </Fragment>
        }
      ></Hero7>
      <ContentList5
        button={
          <Fragment>
            <span className="home-text21">Terms of service</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="home-text22">Privacy statement</span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="home-text23">Refund Policy</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text24 thq-body-small">
              Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam
              voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque!
              Qui accusamus assumenda et molestias eius et error sunt. Id
              recusandae nostrum ea officiis voluptatem in nisi consequatur sed
              quia tenetur sit alias molestias qui illum soluta. Est nesciunt
              perferendis eum sint rerum 33 cupiditate dolorem id corrupti
              laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur.
              Et nobis quasi et cumque adipisci aut molestiae eligendi quo
              inventore dicta ea suscipit sequi sed veritatis nemo.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="home-text25 thq-body-small">
              Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur
              internos qui minima rerum ut molestias laudantium aut iusto
              deserunt. Aut voluptatibus excepturi qui officia laudantium est
              repellendus tempore hic sunt debitis. Ut galisum tempore in enim
              fugit eum pariatur possimus est tenetur nemo et sint sint et
              dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga
              aliquid. Est omnis praesentium ut nisi internos rem quod totam et
              similique quis. Est tempore cumque aut recusandae labore qui error
              molestiae et possimus quia! Eum Quis asperiores non nihil tempora
              qui quia voluptatem aut aspernatur aspernatur aut asperiores
              labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut
              temporibus culpa sit dignissimos quaerat eum architecto voluptatum
              et nemo velit At harum harum.
            </p>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="home-text26 thq-body-small">
              Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam
              tempore aut ipsam iusto in sunt repellat ex voluptatum inventore
              ab facilis galisum ea consequatur consequuntur. Ab voluptas
              voluptatem eum consequatur aspernatur non laboriosam atque est
              labore asperiores a neque quos. Ea nemo modi hic dicta saepe et
              veritatis maiores At praesentium aliquid. Sed dolores architecto
              non doloribus quia eos consectetur commodi non tenetur vitae est
              neque omnis. Non perspiciatis velit At aliquam rerum ut officiis
              ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores
              tempora in officiis sunt eum voluptatem tenetur sit iste
              reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut
              esse sunt ad saepe maiores vel perferendis veritatis. Ex magni
              fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora
              doloribus sed accusantium nobis eum praesentium quod.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="home-text27 thq-body-small">
              Lorem ipsum dolor sit amet. Id galisum officiis rem quod internos
              qui provident quaerat hic minus eveniet est officiis galisum sit
              rerum dignissimos. Sit voluptatem alias et veniam rerum ea quod
              ipsam ut quam neque est nihil repellat est aspernatur voluptatem
              est voluptas ratione? Ea vero tempore At soluta temporibus 33
              galisum excepturi quo modi distinctio. Qui dolor soluta sit ipsam
              vitae et suscipit molestiae est consequatur galisum aut sapiente
              voluptatem sed quas eaque et minima minus? Rem soluta consequatur
              et velit cupiditate sed eligendi laudantium rem pariatur galisum
              sit mollitia debitis eum delectus ipsum aut consequatur mollitia.
              Qui voluptatibus molestias ut totam Quis ea unde dolorem sit animi
              eveniet et galisum explicabo. Est culpa error ut voluptatibus
              voluptatem qui dignissimos dolorem quo laborum distinctio qui
              omnis perspiciatis ab facilis temporibus qui perspiciatis
              consectetur. Ab praesentium fugiat eos veritatis quam ex modi
              autem et sapiente dolorem?
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="home-text28 thq-body-small">
              Lorem ipsum dolor sit amet. Ut cumque cupiditate eos perferendis
              tempora et ullam quis qui fugiat necessitatibus qui quia dolorem
              33 earum reprehenderit eum rerum blanditiis. Et vitae distinctio
              33 magni ratione ut odit rerum est nihil error et minus dolor quo
              harum fugiat. Eos quam assumenda id fugit optio aut magni sunt! Ut
              iure aliquam vel velit modi sit voluptatibus atque ut corporis
              sint sit omnis enim a pariatur officiis aut nulla voluptate. In
              facere incidunt aut sapiente maxime qui quibusdam facilis non
              officia consectetur sit laboriosam libero aut cupiditate possimus
              ut sunt reiciendis. Et repudiandae magnam aut quaerat ipsam aut
              repellat laboriosam. Ab facilis deleniti ut voluptas molestiae sed
              omnis maiores ut aliquid culpa vel nesciunt saepe. Aut placeat
              aspernatur aut alias nihil vel neque recusandae et corrupti
              accusantium ab quod temporibus ut nulla eaque et magnam nemo. Ad
              sunt minus rem earum delectus hic officia iste qui sunt quos non
              officiis illo vel doloribus perspiciatis. Ab soluta eius sed
              quidem dolores rem necessitatibus minus 33 minus commodi. Nam
              repudiandae libero non laboriosam voluptate et saepe fuga vel
              repudiandae pariatur aut assumenda illo.
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="home-text29 thq-body-small">
              Ut doloremque aliquam qui veniam deserunt sit voluptates iusto et
              unde quod ut quam unde ut nemo eius! Ut saepe consequuntur non
              quibusdam soluta aut maiores eaque et rerum error nam incidunt
              saepe aut nihil voluptatem. 33 nulla quaerat est doloremque
              voluptatem ut libero magnam id placeat aliquid. Ea minus totam est
              inventore minus sed temporibus aperiam At ratione maiores eum
              libero consequatur aut laborum exercitationem.
            </span>
          </Fragment>
        }
        content7={
          <Fragment>
            <p className="home-text30 thq-body-small">
              Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam
              voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque!
              Qui accusamus assumenda et molestias eius et error sunt. Id
              recusandae nostrum ea officiis voluptatem in nisi consequatur sed
              quia tenetur sit alias molestias qui illum soluta. Est nesciunt
              perferendis eum sint rerum 33 cupiditate dolorem id corrupti
              laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur.
              Et nobis quasi et cumque adipisci aut molestiae eligendi quo
              inventore dicta ea suscipit sequi sed veritatis nemo.
            </p>
          </Fragment>
        }
        content9={
          <Fragment>
            <p className="home-text31 thq-body-small">
              Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam
              tempore aut ipsam iusto in sunt repellat ex voluptatum inventore
              ab facilis galisum ea consequatur consequuntur. Ab voluptas
              voluptatem eum consequatur aspernatur non laboriosam atque est
              labore asperiores a neque quos. Ea nemo modi hic dicta saepe et
              veritatis maiores At praesentium aliquid. Sed dolores architecto
              non doloribus quia eos consectetur commodi non tenetur vitae est
              neque omnis. Non perspiciatis velit At aliquam rerum ut officiis
              ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores
              tempora in officiis sunt eum voluptatem tenetur sit iste
              reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut
              esse sunt ad saepe maiores vel perferendis veritatis. Ex magni
              fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora
              doloribus sed accusantium nobis eum praesentium quod.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text32 thq-heading-2">NPC Builder Tool</h1>
          </Fragment>
        }
        heading2={
          <Fragment>
            <h1 className="home-text33 thq-heading-3">Additional Resources</h1>
          </Fragment>
        }
        heading3={
          <Fragment>
            <h1 className="home-text34 thq-heading-3">Privacy Policy</h1>
          </Fragment>
        }
        heading4={
          <Fragment>
            <h1 className="home-text35 thq-heading-3">Terms of Service</h1>
          </Fragment>
        }
        heading5={
          <Fragment>
            <h1 className="home-text36 thq-heading-3">Cookies Settings</h1>
          </Fragment>
        }
        heading6={
          <Fragment>
            <h1 className="home-text37 thq-heading-3">Cookies</h1>
          </Fragment>
        }
        heading7={
          <Fragment>
            <h2 className="home-text38 thq-heading-2">Terms of service</h2>
          </Fragment>
        }
        heading8={
          <Fragment>
            <h3 className="home-text39 thq-heading-3">
              General Terms and Conditions
            </h3>
          </Fragment>
        }
        heading9={
          <Fragment>
            <h3 className="home-text40 thq-heading-3">Products and Services</h3>
          </Fragment>
        }
        content10={
          <Fragment>
            <span className="home-text41 thq-body-small">
              Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam
              voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque!
              Qui accusamus assumenda et molestias eius et error sunt. Id
              recusandae nostrum ea officiis voluptatem in nisi consequatur sed
              quia tenetur sit alias molestias qui illum soluta. Est nesciunt
              perferendis eum sint rerum 33 cupiditate dolorem id corrupti
              laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur.
              Et nobis quasi et cumque adipisci aut molestiae eligendi quo
              inventore dicta ea suscipit sequi sed veritatis nemo.
            </span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="home-text42 thq-body-small">
              Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur
              internos qui minima rerum ut molestias laudantium aut iusto
              deserunt. Aut voluptatibus excepturi qui officia laudantium est
              repellendus tempore hic sunt debitis. Ut galisum tempore in enim
              fugit eum pariatur possimus est tenetur nemo et sint sint et
              dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga
              aliquid. Est omnis praesentium ut nisi internos rem quod totam et
              similique quis. Est tempore cumque aut recusandae labore qui error
              molestiae et possimus quia! Eum Quis asperiores non nihil tempora
              qui quia voluptatem aut aspernatur aspernatur aut asperiores
              labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut
              temporibus culpa sit dignissimos quaerat eum architecto voluptatum
              et nemo velit At harum harum.
            </span>
          </Fragment>
        }
        content12={
          <Fragment>
            <span className="home-text43 thq-body-small">
              Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam
              tempore aut ipsam iusto in sunt repellat ex voluptatum inventore
              ab facilis galisum ea consequatur consequuntur. Ab voluptas
              voluptatem eum consequatur aspernatur non laboriosam atque est
              labore asperiores a neque quos. Ea nemo modi hic dicta saepe et
              veritatis maiores At praesentium aliquid. Sed dolores architecto
              non doloribus quia eos consectetur commodi non tenetur vitae est
              neque omnis. Non perspiciatis velit At aliquam rerum ut officiis
              ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores
              tempora in officiis sunt eum voluptatem tenetur sit iste
              reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut
              esse sunt ad saepe maiores vel perferendis veritatis. Ex magni
              fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora
              doloribus sed accusantium nobis eum praesentium quod.
            </span>
          </Fragment>
        }
        content13={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam
              tempore aut ipsam iusto in sunt repellat ex voluptatum inventore
              ab facilis galisum ea consequatur consequuntur. Ab voluptas
              voluptatem eum consequatur aspernatur non laboriosam atque est
              labore asperiores a neque quos. Ea nemo modi hic dicta saepe et
              veritatis maiores At praesentium aliquid. Sed dolores architecto
              non doloribus quia eos consectetur commodi non tenetur vitae est
              neque omnis. Non perspiciatis velit At aliquam rerum ut officiis
              ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores
              tempora in officiis sunt eum voluptatem tenetur sit iste
              reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut
              esse sunt ad saepe maiores vel perferendis veritatis. Ex magni
              fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora
              doloribus sed accusantium nobis eum praesentium quod.
            </span>
          </Fragment>
        }
        heading10={
          <Fragment>
            <h1 className="home-text45 thq-heading-2">Refund Policy</h1>
          </Fragment>
        }
        heading11={
          <Fragment>
            <h1 className="home-text46 thq-heading-3">General</h1>
          </Fragment>
        }
        heading12={
          <Fragment>
            <h1 className="home-text47 thq-heading-3">Damages and issues</h1>
          </Fragment>
        }
        heading13={
          <Fragment>
            <h1 className="home-text48 thq-heading-3">Refunds</h1>
          </Fragment>
        }
        rootClassName="content-list5-root-class-name"
      ></ContentList5>
      <HomeSiteFeatures
        sectionTitle={
          <Fragment>
            <h2 className="home-text49 thq-heading-2">
              Discover the Key Features
            </h2>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <h3 className="home-text50 thq-heading-3">
              Discover the Magic of Lorem Ipsum Text Generation
            </h3>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <strong className="home-text51 thq-heading-3">
              Discover the Magic of Lorem Ipsum Text Generation
            </strong>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <strong className="home-text52 thq-heading-3">
              Discover the Magic of Lorem Ipsum Text Generation
            </strong>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <strong className="home-text53 thq-heading-3">
              Discover the Magic of Lorem Ipsum Text Generation
            </strong>
          </Fragment>
        }
        feature1Button={
          <Fragment>
            <span className="home-text54 thq-body-small">Button</span>
          </Fragment>
        }
        feature2Button={
          <Fragment>
            <span className="home-text55 thq-body-small">Button</span>
          </Fragment>
        }
        feature3Button={
          <Fragment>
            <span className="home-text56 thq-body-small">Button</span>
          </Fragment>
        }
        feature4Button={
          <Fragment>
            <span className="home-text57 thq-body-small">Button</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text58 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text59 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text60 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        feature4Description={
          <Fragment>
            <span className="home-text61 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
      ></HomeSiteFeatures>
    </div>
  )
}

export default Home
