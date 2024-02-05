import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './article-page1.css'

const ArticlePage1 = (props) => {
  return (
    <div className="article-page1-container">
      <Helmet>
        <title>ArticlePage1 - John Doubleseed</title>
        <meta property="og:title" content="ArticlePage1 - John Doubleseed" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="article-page1-navbar-interactive"
      >
        <span className="article-page1-logo">JOHN Doublewood</span>
        <div data-thq="thq-navbar-nav" className="article-page1-desktop-menu">
          <nav className="article-page1-links">
            <Link to="/">Home</Link>
            <Link to="/" className="article-page1-nav2">
              About Me
            </Link>
            <Link to="/" className="article-page1-nav3">
              Resume
            </Link>
            <Link to="/" className="article-page1-nav4">
              Articles
            </Link>
            <Link to="/" className="article-page1-nav5">
              Testimonials
            </Link>
            <Link to="/" className="article-page1-nav51">
              Contact Me
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="article-page1-burger-menu">
          <svg viewBox="0 0 1024 1024" className="article-page1-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="article-page1-mobile-menu">
          <div className="article-page1-nav">
            <div className="article-page1-top">
              <span className="article-page1-logo1">FINANCEXCEL</span>
              <div
                data-thq="thq-close-menu"
                className="article-page1-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="article-page1-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="article-page1-links1">
              <span className="article-page1-nav11">Home</span>
              <span className="article-page1-nav21">About Me</span>
              <span className="article-page1-nav31">Resume</span>
              <span className="article-page1-nav41">Portfolio</span>
              <span className="article-page1-nav52">Testimonials</span>
            </nav>
            <div className="article-page1-buttons">
              <button className="article-page1-login button">Login</button>
              <button className="article-page1-register button">
                Register
              </button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="article-page1-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="article-page1-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="article-page1-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="article-page1-hero">
        <img
          alt="image"
          src="/incomeintheage-1400w.jpg"
          className="article-page1-image"
        />
        <div className="article-page1-container1">
          <span className="article-page1-text sectionTitle">
            <span>Article</span>
            <br></br>
          </span>
          <h1 className="article-page1-text03">
            Income in the Age of Automation: Building a Sustainable Portfolio
            with Dividend Stocks
          </h1>
          <span className="article-page1-text04 sectionTitle">
            <span>By john dOUBLESEED</span>
            <br></br>
          </span>
          <span className="article-page1-text07">
            <span>
              The whirring of robots and the hum of algorithms are the
              undeniable soundtrack of the 21st century. Automation is reshaping
              industries, replacing human labor with tireless machines and
              complex software. While this technological revolution promises
              progress and efficiency, it also raises a crucial question: what
              happens to income when jobs are replaced by robots?
            </span>
            <br className="article-page1-text09"></br>
            <br></br>
            <br></br>
            <span>
              For investors, the answer lies in a time-tested strategy: dividend
              stocks. In an age of automation, where traditional employment
              might become increasingly precarious, owning a carefully curated
              portfolio of dividend-paying companies can provide a vital source
              of passive income.
            </span>
            <br className="article-page1-text13"></br>
            <br></br>
            <br className="article-page1-text15"></br>
            <br></br>
            <span className="article-page1-text17">
              WHY DIVIDENT STOCK MATTERS:
            </span>
            <br className="article-page1-text18"></br>
            <br className="article-page1-text19"></br>
            <br></br>
            <span>
              Stability: Dividend-paying companies tend to be mature and
              established, with a proven track record of profitability. This
              stability translates into dependable income for investors, even
              during economic downturns when other investments might falter.
            </span>
            <br className="article-page1-text22"></br>
            <br></br>
            <span>
              Growing Income: Many companies increase their dividend payouts
              over time, providing investors with a growing stream of income.
              This can help combat inflation and outpace the returns of other
              asset classes like bonds.
            </span>
            <br className="article-page1-text25"></br>
            <br></br>
            <span>
              Compounding Power: Reinvesting dividends allows investors to
              leverage the power of compounding, exponentially increasing their
              wealth over the long term.
            </span>
            <br className="article-page1-text28"></br>
            <br></br>
            <br className="article-page1-text30"></br>
            <span className="article-page1-text31">
              NAVIGATING THE AGE OF AUTOMATION:
            </span>
            <br className="article-page1-text32"></br>
            <br className="article-page1-text33"></br>
            <br></br>
            <span>
              While dividend stocks offer a valuable shield against the
              uncertainties of automation, building a sustainable portfolio
              requires careful consideration. Here are some key factors to keep
              in mind:
            </span>
            <br className="article-page1-text36"></br>
            <br></br>
            <span>
              Company Selection: Focus on companies with strong fundamentals,
              healthy balance sheets, and a history of consistent dividend
              payments. Prioritize industries less vulnerable to automation,
              such as consumer staples, utilities, and healthcare.
            </span>
            <br className="article-page1-text39"></br>
            <br></br>
            <span>
              Diversification: Don&apos;t put all your eggs in one basket.
              Spread your investments across different sectors and company sizes
              to mitigate risk.
            </span>
            <br className="article-page1-text42"></br>
            <br></br>
            <span>
              Reinvestment Strategy: Decide whether to reinvest dividends for
              long-term growth or use them to supplement your current income.
            </span>
            <br className="article-page1-text45"></br>
            <br></br>
            <span>
              Professional Guidance: Seek the advice of a financial advisor if
              needed, especially when navigating complex investment decisions.
            </span>
            <br className="article-page1-text48"></br>
            <br className="article-page1-text49"></br>
            <br className="article-page1-text50"></br>
            <span className="article-page1-text51">
              BUILDING A SUSTAINABLE FUTURE:
            </span>
            <br className="article-page1-text52"></br>
            <br></br>
            <span>
              Owning dividend stocks is not a get-rich-quick scheme. It&apos;s a
              long-term strategy that requires patience, discipline, and a
              thorough understanding of the market. However, in the age of
              automation, where job security is no longer a guarantee, a
              well-constructed dividend portfolio can offer a powerful safety
              net and a sustainable source of income, empowering you to navigate
              the future with confidence.
            </span>
            <br className="article-page1-text55"></br>
            <br className="article-page1-text56"></br>
            <br></br>
            <span>
              Remember, even as robots take over certain tasks, human ingenuity
              and adaptability remain irreplaceable. By investing in yourself
              and acquiring new skills, you can ensure that your own income
              potential remains secure, regardless of the technological
              landscape.
            </span>
          </span>
          <div className="article-page1-btn-group"></div>
        </div>
      </div>
      <div className="article-page1-footer">
        <footer className="article-page1-footer1">
          <div className="article-page1-container2">
            <span className="article-page1-logo2">JOHN DOUBLEWOOD</span>
            <nav className="article-page1-nav1 article-page1-nav1">
              <Link to="/" className="article-page1-nav12">
                Home
              </Link>
              <Link to="/" className="article-page1-nav22">
                About Me
              </Link>
              <Link to="/" className="article-page1-nav32">
                Resume
              </Link>
              <Link to="/" className="article-page1-nav42">
                Articles
              </Link>
              <Link to="/" className="article-page1-nav53">
                Testimonials
              </Link>
              <Link to="/" className="article-page1-nav54">
                Contact Me
              </Link>
            </nav>
          </div>
          <div className="article-page1-separator"></div>
          <div className="article-page1-container3">
            <span className="article-page1-text59">
              © 2023 JOHN DOUBLEWOOD All Rights Reserved.
            </span>
            <div className="article-page1-icon-group1">
              <a
                href="https://twitter.com/JohnDS_SG"
                target="_blank"
                rel="noreferrer noopener"
                className="article-page1-link"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="article-page1-icon10"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/johnds_sg/"
                target="_blank"
                rel="noreferrer noopener"
                className="article-page1-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="article-page1-icon12"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61554900735068"
                target="_blank"
                rel="noreferrer noopener"
                className="article-page1-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="article-page1-icon14"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ArticlePage1
