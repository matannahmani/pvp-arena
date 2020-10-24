import React, { Fragment } from "react";
import Link from 'next/link';
import Head from 'next/head'
import { ReactSVG } from "react-svg";
import Countdown from "react-countdown";
import Renderer from "../components/countdown/Renderer";
import SubscribeEmail from "../components/newsletter/SubscribeEmail";

const ComingSoon12 = () => {

  return (
    <Fragment>
      <Head>
      <meta name="description" content="PVP ARENA, play win earn."/>
      <title>PVP ARENA</title>
      </Head>
      <div
        className="cs-12-page-wrapper h-100 bg-img d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(
            "/backgrounds/coming-soon-12.jpg")`
        }}
      >
        {/*====================  header ====================*/}
        <header className="cs-12-header space-pt--30 space-pb--30" />
        {/*====================  End of header  ====================*/}
        {/*====================  content ====================*/}
        <div className="cs-12-content">
          <div className="container">
            <div className="row">
              <div className="col-6 ml-auto mr-auto">
                {/* logo */}
                <div className="cs-12-logo text-center space-mb--35">
                  <Link href="/">
                    <img
                      src="/logo.png"
                      className="img-fluid brand"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 ml-auto mr-auto">
                <h2 className="cs-12-content__title text-center">
                  WE ARE COMING SOON
                </h2>
                {/* countdown */}
                <div className="cs-12-countdown space-mt--50">
                  <Countdown
                    date={new Date("Novemember 10, 2020")}
                    renderer={Renderer}
                  />
                </div>
                <div className="cs-12-subscription-wrapper space-mt--50 text-center">
                  <div className="cs-12-subscription-wrapper space-mt--50 text-center">
                  {/* subscribe email */}
                  
                  <SubscribeEmail mailchimpUrl="https://pvparena.us2.list-manage.com/subscribe/post?u=9f59987dcf861e712d841ab7e&amp;id=92714c21d4" />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of content  ====================*/}
        {/*====================  footer ====================*/}
        <footer className="cs-12-footer space-pt--25 space-pb--25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                {/* copyright */}
                <div className="cs-12-copyright">
                  &copy; {new Date().getFullYear() + " "}
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PVPARENA
                  </a>
                  , all rights reserved
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* social icons */}
                <ul className="cs-12-social-icons d-flex align-items-center justify-content-center justify-content-md-end">
                  <li>
                    <a
                      href="http://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src="/icons/facebook-04.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src="/icons/twitter-04.svg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/*====================  End of footer  ====================*/}
      </div>
    </Fragment>
  );
};

export default ComingSoon12;
