import React, { Fragment } from "react";
import Link from 'next/link';
import { Helmet } from "react-helmet";
import { ReactSVG } from "react-svg";
import Countdown from "react-countdown";
import Renderer from "../components/countdown/Renderer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ValidateEmail = (mail)=> {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value))
  {
    toast.success('YAY you just subscribed 🦄!', {
      position:"bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      return true;
  }
  toast.error('Please enter a valid email!', {
    position:"bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
    return false;
}
const post = async () =>{
  const email = document.getElementById('subemail');
  if (ValidateEmail(email) === false) return false ; // breaks if email invaild
  const rawResponse = await fetch(location.origin+'/api/post/sub', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email.value})
  });
  const content = await rawResponse.json();

  console.log(content);
}
const ComingSoon12 = () => {

  return (
    <Fragment>
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
                    date={new Date("Novemember 01, 2020")}
                    renderer={Renderer}
                  />
                </div>
                <div className="cs-12-subscription-wrapper space-mt--50 text-center">
                  {/* subscribe email */}
                  <div className="mc-newsletter-form space-mb--10">
                    <input id="subemail" type="email" placeholder="Your email here" required/>
                    <button onClick={ () => post() }>NOTIFY ME</button>
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
            <ToastContainer
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </Fragment>
  );
};

export default ComingSoon12;
