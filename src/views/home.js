import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BlogPostCard4 from '../components/blog-post-card4'
import BlogPostCard3 from '../components/blog-post-card3'
import BlogPostCard2 from '../components/blog-post-card2'
import TestimonialCard3 from '../components/testimonial-card3'
import TestimonialCard31 from '../components/testimonial-card31'
import TestimonialCard311 from '../components/testimonial-card311'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>John Doubleseed</title>
        <meta property="og:title" content="John Doubleseed" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span className="home-logo">JOHN DoubleWOOD</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <a href="#HomePageTitle">Home</a>
              <a href="#AboutMe" className="home-nav2">
                About Me
              </a>
              <a href="#ResumeTitle" className="home-nav3">
                Resume
              </a>
              <a href="#ArticleTitle" className="home-nav4">
                Articles
              </a>
              <a href="#TestimonialTitle" className="home-nav5">
                Testimonials
              </a>
              <a href="#contactTitle" className="home-nav51">
                Contact Me
              </a>
            </nav>
            <div className="home-buttons"></div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">FINANCEXCEL</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav11">Home</span>
                <span className="home-nav21">About Me</span>
                <span className="home-nav31">Resume</span>
                <span className="home-nav41">Portfolio</span>
                <span className="home-nav52">Testimonials</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login button">Login</button>
                <button className="home-register button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div id="HomePageTitle" className="home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              <span className="home-text">Guten Tag!</span>
              <br></br>
            </h1>
            <img
              alt="image"
              src="/johndoubleseed3-400h.jpg"
              className="home-details-image"
            />
            <span className="home-hero-sub-heading">
              John Doublewood - Finance Professional
            </span>
            <div className="home-btn-group">
              <a href="#AboutMe" className="home-hero-button1 button">
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div id="AboutMe" className="home-details1">
          <div className="home-container02">
            <span className="home-text002 sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              About John Doublewood
            </h2>
            <span className="home-details-sub-heading">
              With 9 years of experience as a hedge fund analyst in the finance
              industry, John Doublewood has worked multiple different
              multinational companies. His expertise lies in financial analysis,
              investment strategies, and risk management.
            </span>
          </div>
          <img
            alt="image"
            src="/john%20doubleseed-400h.jpg"
            className="home-details-image1"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div id="ResumeTitle" className="home-features1">
            <div className="home-container03">
              <span id="ResumeTitle" className="home-text005 sectionTitle">
                <span>Resume</span>
                <br></br>
              </span>
            </div>
            <div className="home-container04">
              <div className="home-card-experience">
                <h2 className="home-card-experience-title Section-Heading">
                  Experience
                </h2>
                <div className="home-card-ops-support">
                  <img
                    alt="image"
                    src="/xyz%20investment-200h.jpg"
                    className="home-image"
                  />
                  <div className="home-container05">
                    <h2 className="home-text008">
                      Senior Hedge Fund Analyst
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h2>
                    <h2 className="home-text009">
                      <span>XYZ Investments, Singapore</span>
                      <br></br>
                    </h2>
                    <h2 className="home-text012">June 2021 - Present</h2>
                    <span>
                      <span>
                        Conducted fundamental and technical analysis of various
                        asset classes, such as equities, fixed income,
                        commodities, and currencies
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Developed and implemented investment strategies and
                        recommendations for a hedge fund with over $1 billion in
                        assets under management
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Monitored and evaluated portfolio performance and risk
                        exposure, using tools such as Bloomberg, FactSet, and
                        MATLAB
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Prepared and presented monthly and quarterly reports and
                        presentations to senior management and clients
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-card-ops-support1">
                  <img
                    alt="image"
                    src="/logoforlmn-300h.jpg"
                    className="home-image1"
                  />
                  <div className="home-container06">
                    <h2 className="home-text025">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h2>
                    <h2 className="home-text026">
                      Hedge Fund Analyst
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h2>
                    <div className="home-container07">
                      <h2 className="home-text027">LMN Capital, Singapore</h2>
                    </div>
                    <h2 className="home-text028">August 2014 - May 2021</h2>
                    <span>
                      <span>
                        Performed due diligence and research on hedge fund
                        managers and strategies, using sources such as Preqin,
                        Morningstar, and HFR
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Assisted in the selection and allocation of hedge funds
                        for a fund of funds with over $500 million in assets
                        under management
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Maintained and updated hedge fund database and portfolio
                        management system, using tools such as Excel and VBA
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Collaborated with internal and external stakeholders,
                        such as auditors, custodians, and regulators
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-card-intern">
                  <img
                    alt="image"
                    src="/gmpg-300h.jpg"
                    className="home-image2"
                  />
                  <div className="home-container08">
                    <h2 className="home-text042">Senior Financial Analyst</h2>
                    <h2 className="home-text043">
                      <span>GPMG, Singapore</span>
                      <br></br>
                    </h2>
                    <h2 className="home-text046">November 2009 - July 2014</h2>
                    <span>
                      <span>
                        Prepared and reviewed financial plans, budgets, and
                        forecasts for various business units, ensuring alignment
                        with strategic goals and objectives
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Conducted financial analysis, such as profitability
                        analysis, variance analysis, and scenario analysis, to
                        identify and explain financial performance and risks
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Performed financial modelling, using tools such as
                        Excel, Power BI, and SQL, to support decision-making and
                        optimization
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Communicated findings and recommendations to clients and
                        stakeholders, using tools such as Excel, PowerPoint, and
                        Xero
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-card-intern1">
                  <img
                    alt="image"
                    src="/gmpg-300h.jpg"
                    className="home-image3"
                  />
                  <div className="home-container09">
                    <h2 className="home-text062">Financial Analyst</h2>
                    <h2 className="home-text063">GPMG, Australia</h2>
                    <h2 className="home-text064">January 2008- July 2009</h2>
                    <span>
                      <span>
                        Provided financial advisory services to clients across
                        various industries, such as mergers and acquisitions,
                        valuations, and restructuring
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Conducted financial modelling, analysis, and
                        forecasting, using tools such as Excel and PowerPoint
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Prepared and reviewed financial statements, business
                        plans, and pitch books, ensuring compliance with
                        accounting standards and best practices
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Supported senior managers and partners in business
                        development and client relationship management
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-card-intern2">
                  <img
                    alt="image"
                    src="/gmpg-300h.jpg"
                    className="home-image4"
                  />
                  <div className="home-container10">
                    <h2 className="home-text077">
                      Associate Financial Analyst
                    </h2>
                    <h2 className="home-text078">GPMG, Australia</h2>
                    <h2 className="home-text079">
                      December 2006 - December 2007
                    </h2>
                    <span>
                      <span>
                        Supported senior financial analysts in providing
                        financial advisory services to clients across various
                        industries, such as mergers and acquisitions,
                        valuations, and restructuring
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Conducted financial modelling, analysis, and
                        forecasting, using tools such as Excel, PowerPoint, and
                        SQL
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Prepared and reviewed financial statements, business
                        plans, and pitch books, ensuring compliance with
                        accounting standards and best practices
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Communicated insights and recommendations to clients and
                        stakeholders using data visualisation and storytelling
                        techniques
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-card-experience1">
                <h2 className="home-card-experience-title1 Section-Heading">
                  Education
                </h2>
                <div className="home-card-ops-support2">
                  <img
                    alt="image"
                    src="/logo-200h.jpg"
                    className="home-image5"
                  />
                  <div className="home-container11">
                    <h2 className="home-text093">
                      University of New North Wales
                    </h2>
                    <h2 className="home-text094">
                      Bachelor of Economics, UNNW
                    </h2>
                    <h2 className="home-text095">February 2003 -  June 2006</h2>
                    <span>
                      <span>
                        NSW WAM: 87 Relevant coursework: Microeconomics,
                        Macroeconomics, Econometrics, Mathematical Economics,
                        Public Economics, International Economics Thesis: The
                        Impact of Trade Liberalisation on Income Inequality: A
                        Panel Data Analysis of 20 Developing Countries
                        Supervisor: Dr. Jane Smith
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-card-ops-support3">
                  <img
                    alt="image"
                    src="/logo%20highschool-200h.jpg"
                    className="home-image6"
                  />
                  <div className="home-container12">
                    <h2 className="home-text099">Westwood Highschool</h2>
                    <h2 className="home-text100">Highschool Certificate</h2>
                    <h2 className="home-text101">
                      January 1997 - November 2002
                    </h2>
                    <span>
                      <span>NSW HSC: 90.00</span>
                      <br></br>
                      <span>
                        {' '}
                        Relevant coursework: Business Studies, Economics,
                        Mathematics, English School activities: Debating team,
                        Chess club, Peer tutoring program
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="ArticleTitle" className="home-blog">
            <span className="home-text107 sectionTitle">
              <span>Articles</span>
              <br></br>
            </span>
            <div className="home-container13"></div>
            <div className="home-container14"></div>
            <Link to="/article-page1" className="home-navlink">
              <BlogPostCard4
                rootClassName="blog-post-card4-root-class-name"
                className="home-component"
              ></BlogPostCard4>
            </Link>
            <Link to="/article-page2" className="home-navlink1">
              <BlogPostCard3
                rootClassName="blog-post-card3-root-class-name"
                className="home-component1"
              ></BlogPostCard3>
            </Link>
            <Link to="/article-page3" className="home-navlink2">
              <BlogPostCard2
                profileSrc="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName3"
                className="home-component2"
              ></BlogPostCard2>
            </Link>
          </div>
        </div>
      </div>
      <div id="TestimonialTitle" className="home-testimonial">
        <h1 id="TestimonialTitle" className="home-text110">
          Testimonial
        </h1>
        <span className="home-text111">
          John Doubleseed: A Financial Wizard Who Guides You Through the Market
          Maze
        </span>
        <div className="home-container15">
          <TestimonialCard3
            name="Lucas Tan"
            pictureAlt="Lucas"
            pictureSrc="/lucastanweihan-200h.png"
            rootClassName="rootClassName"
          ></TestimonialCard3>
          <TestimonialCard31 rootClassName="testimonial-card31-root-class-name"></TestimonialCard31>
          <TestimonialCard311 rootClassName="testimonial-card311-root-class-name"></TestimonialCard311>
        </div>
      </div>
      <div id="contactTitle" className="home-banner">
        <h1 id="contactTitle" className="home-text112">
          Contact me!
        </h1>
        <span className="home-text113">
          <span className="home-text114">
            If you have any question and would like to get in touch with me
            regarding investment or job opportunity,
          </span>
          <br></br>
          <span>please feel free to reach me via my contacts:</span>
          <br></br>
          <br></br>
          <span>Phone: +65 9123 4567</span>
          <br></br>
          <span>Email: john.doublewood@email.sg</span>
          <br></br>
        </span>
        <div className="home-container16"></div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container"></div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container17">
            <span className="home-logo2">JOHN DOUBLEWOOD</span>
            <nav className="home-nav1 home-nav1">
              <a href="#HomePageTitle" className="home-nav12">
                Home
              </a>
              <a href="#AboutMe" className="home-nav22">
                About Me
              </a>
              <a href="#ResumeTitle" className="home-nav32">
                Resume
              </a>
              <a href="#ArticleTitle" className="home-nav42">
                Articles
              </a>
              <a href="#TestimonialTitle" className="home-nav53">
                Testimonials
              </a>
              <a href="#contactTitle" className="home-nav54">
                Contact Me
              </a>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container18">
            <span className="home-text123">
              © 2023 JOHN DOUBLEWOOD, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
