import React, { useState } from "react";
import "./Tabs.css";
import tabContent1 from "./images/tab-content-1.png";
import tabContent21 from "./images/tab-content-2-1.png";
import tabContent22 from "./images/tab-content-2-2.png";
import tabContent23 from "./images/tab-content-2-3.png";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTabs = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="tabs">
        <div className="container">
          <div
            className={toggleState === 1 ? "tab-item active-tab" : "tab-item"}
            onClick={() => toggleTabs(1)}
          >
            <i className="fas fa-door-open fa-3x"></i>
            <p className="hide-text">Cancel anytime</p>
          </div>
          <div
            className={toggleState === 2 ? "tab-item active-tab" : "tab-item"}
            onClick={() => toggleTabs(2)}
          >
            <i className="fas fa-tablet-alt fa-3x"></i>
            <p className="hide-text">Watch anywhere</p>
          </div>
          <div
            className={toggleState === 3 ? "tab-item active-tab" : "tab-item"}
            onClick={() => toggleTabs(3)}
          >
            <i className="fas fa-tags fa-3x"></i>
            <p className="hide-text">Pick your price</p>
          </div>
        </div>
      </section>

      <section className="tab-content">
        <div className="container">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <div className="inner-content1">
              <div>
                <p className="text-large">
                  If you decide Netflix isnt for you - no problem. No
                  commitment. Cancel online anytime.
                </p>
                <a className="btn btn-large" href="#">
                  Watch free for 30 days
                </a>
              </div>
              <img src={tabContent1} alt="tab-pic" />
            </div>
          </div>

          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <div className="inner-content2">
              <div className="content-top">
                <p className="text-large">
                  Watch Tv shows and movies anytime, anywhere - personalized for
                  you
                </p>
                <a href="#" className="btn btn-large">
                  Watch free for 30 days
                </a>
              </div>
              <div className="content-bottom">
                <div>
                  <img src={tabContent21} alt="pic1" />
                  <p className="text-medium">Watch on your TV</p>
                  <p className="text-dark">
                    Smart TV's, Playstation, XBox, Chromecast, Apple TV, Blu-ray
                    players and more.
                  </p>
                </div>
                <div>
                  <img src={tabContent22} alt="pic2" />
                  <p className="text-medium">
                    Watch instantly or download for later
                  </p>
                  <p className="text-dark">
                    Available on phone and tablet, wherever you go.
                  </p>
                </div>
                <div>
                  <img src={tabContent23} alt="pic3" />
                  <p className="text-medium">Use any computer</p>
                  <p className="text-dark">Watch right on Netflix.com</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <div className="inner-content3">
              <div className="text-center">
                <p className="text-large">
                  Choose one plan and Watch everythimg on netflix
                </p>
                <a className="btn btn-large">Watch free for 30 days</a>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Basic</th>
                    <th>Standard</th>
                    <th>Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly price after free month ends on 6/20/20</td>
                    <td>$8.99</td>
                    <td>$12.99</td>
                    <td>$15.99</td>
                  </tr>
                  <tr>
                    <td>HD Available</td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Uktra HD Available</td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Screens you can watch at the same time</td>
                    <td>1</td>
                    <td>2</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Watch on your TV, phone and tablet</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Unlimited movies and TV shows</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Cancel anytime</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>First month free</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tabs;
