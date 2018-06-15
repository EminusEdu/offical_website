import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';


import './styles/reset.css';
import './styles/grid.css';
import './styles/common.css';
import './styles/main.css';

var FontAwesome = require('react-fontawesome');
var splash = require('./images/splash.jpg');
var divider = require('./images/divider.jpg');

const mylogger = (store) => (next) => (action) => {
  next(action);
}
const store = createStore(allReducers, {}, applyMiddleware(thunk, createLogger()));

store.dispatch({type: "RECEIVE_TESTS", name: "Bob"})



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div>
        <section className="landing_splash" style ={ { backgroundImage: "url("+splash+")" } } >
          <nav className="row container_c">
            <div className="col-sm-12 col-md-3 eminus_logo">
              <a href="#"><img
                src={require('./images/eminus_logo.png')}
              /></a>
            </div>
            <div className="col-sm-12 col-md-9">
              <a href="#">Time Now</a>
              <a href="#">Sign Up</a>
              <a href="#">Sign In</a>
            </div>
          </nav>
          
          <div className="row container_c landing_text">
            <div className="col-sm-12">
              <h1>What Lanuage Would You Like to Perfect?</h1>
              <span>Languages, experiences, services. All in one service.</span>
              <form>
                <input type="text" placeholder="Search..." />
                <button>Start Learning</button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="popular_languages">
          <div className="row container_c">
            <div className="col-sm-12">
              <h1>Popular Languages</h1>
            </div>
          </div>
          <div className="row container_c pop_langs">
            <div className="col-sm-12 col-md-2">
              <a href="#">
              <img
                src={require('./images/pop_lang.jpg')}
              />
              <span>English</span>
              </a>
            </div>
            <div className="col-sm-12 col-md-2">
              <a href="#">
              <img
                src={require('./images/pop_lang.jpg')}
              />
              <span>English</span>
              </a>
            </div>
            <div className="col-sm-12 col-md-2">
              <a href="#">
              <img
                src={require('./images/pop_lang.jpg')}
              />
              <span>English</span>
              </a>
            </div>
            <div className="col-sm-12 col-md-2">
              <a href="#">
              <img
                src={require('./images/pop_lang.jpg')}
              />
              <span>English</span>
              </a>
            </div>
            <div className="col-sm-12 col-md-2">
              <a href="#">
              <img
                src={require('./images/pop_lang.jpg')}
              />
              <span>English</span>
              </a>
            </div>
            <div className="col-sm-12 col-md-2">
              <a href="#">
              <img
                src={require('./images/pop_lang.jpg')}
              />
              <span>English</span>
              </a>
            </div>
          </div>
        </section>
        
        <section className="tutors">
          <div className="row container_c">
            <div className="col-sm-12">
              <h1>Recommended English Tutors of the Day</h1>
            </div>
          </div>
          <div className="row container_c tutors_list">
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="divider" style ={ { backgroundImage: "url("+divider+")" } } >
        </section>
        
        <section className="tutors">
          <div className="row container_c">
            <div className="col-sm-12">
              <h1>Recommended English Tutors of the Day</h1>
            </div>
          </div>
          <div className="row container_c tutors_list">
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="tutors">
          <div className="row container_c">
            <div className="col-sm-12">
              <h1>Recommended English Tutors of the Day</h1>
            </div>
          </div>
          <div className="row container_c tutors_list">
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="tutors">
          <div className="row container_c">
            <div className="col-sm-12">
              <h1>Recommended English Tutors of the Day</h1>
            </div>
          </div>
          <div className="row container_c tutors_list">
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="tutors">
          <div className="row container_c">
            <div className="col-sm-12">
              <h1>Recommended English Tutors of the Day</h1>
            </div>
          </div>
          <div className="row container_c tutors_list">
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 card">
              <div className="user_card">
                <img
                src={require('./images/user.png')}
                />
                <span className="price"><strong>$15.00</strong> / 1 hr</span>
                <span className="fav">♥</span>
              </div>
              <div className="user_profile">
                <p>
                  <strong>Emilee</strong>
                  <i className="rating">★★★★★</i>
                </p>
                <p>
                  <i>English & Spanish Tutor</i>
                </p>
                <p>
                  <strong>From</strong> United States of America
                </p>
                <p>
                  <strong>Speaks</strong> English, Spanish
                </p>
                <p>
                  An ex-Java coder teaching INTERVIEW SKILLS, Business & Conversation 
                  English for over 10 years. I'm perfect for Chinese students & I well 
                  understand Chinese culture & living abroad. I'm fun, encouraging, & patient ^^
                </p>
                <div className="row tutor_details">
                  <div className="col-sm-6">
                    <strong>105</strong><br />
                    lessons taught
                  </div>
                  <div className="col-sm-6">
                    <strong>88</strong><br />
                    reviews
                  </div>
                </div>
                <div className="row tutors_btn">
                  <div className="col-sm-6">
                    <button>Book Trial</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="alt_btn">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="prefooter">
          <div className="row container_c">
            <div className="col-sm-12 col-md-3">
              <h1>Tutors</h1>
                <ul>
                  <li><a href="#">English Tutors</a></li>
                  <li><a href="#">Japanes Tutors</a></li>
                  <li><a href="#">Korean Tutors</a></li>
                  <li><a href="#">French Tutors</a></li>
                  <li><a href="#">Spanish Tutors</a></li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-3">
              <h1>Eminus Languages</h1>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Apply to Teach</a></li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-3">
              <h1>Customer Support</h1>
                <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">System Update</a></li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-3">
              <ul>
                <li><a href="#">Dropdown menus</a></li>
                <li><a href="#">Dropdown menus</a></li>
              </ul>
            </div>
          </div>
        </section>
        
        <footer className="footer">
          <div className="row container_c">
            <div className="col-sm-9">
              &copy; Eminus Languages
            </div>
            
            <div className="col-sm-3">
              <a href="#">Sitemap</a> ∙ 
              <a href="#">Privacy and Terms</a>
              <a href="#"><FontAwesome name='Facebook' /></a>
              <a href="#"><FontAwesome name='Facebook' /></a>
              <a href="#"><FontAwesome name='Facebook' /></a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
