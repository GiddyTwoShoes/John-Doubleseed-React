import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './article-page3.css'

const ArticlePage3 = (props) => {
  return (
    <div className="article-page3-container">
      <Helmet>
        <title>ArticlePage3 - John Doubleseed</title>
        <meta property="og:title" content="ArticlePage3 - John Doubleseed" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="article-page3-navbar-interactive"
      >
        <span className="article-page3-logo">JOHN Doublewood</span>
        <div data-thq="thq-navbar-nav" className="article-page3-desktop-menu">
          <nav className="article-page3-links">
            <Link to="/">Home</Link>
            <Link to="/" className="article-page3-nav2">
              About Me
            </Link>
            <Link to="/" className="article-page3-nav3">
              Resume
            </Link>
            <Link to="/" className="article-page3-nav4">
              Articles
            </Link>
            <Link to="/" className="article-page3-nav5">
              Testimonials
            </Link>
            <Link to="/" className="article-page3-nav51">
              Contact Me
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="article-page3-burger-menu">
          <svg viewBox="0 0 1024 1024" className="article-page3-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="article-page3-mobile-menu">
          <div className="article-page3-nav">
            <div className="article-page3-top">
              <span className="article-page3-logo1">FINANCEXCEL</span>
              <div
                data-thq="thq-close-menu"
                className="article-page3-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="article-page3-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="article-page3-links1">
              <span className="article-page3-nav11">Home</span>
              <span className="article-page3-nav21">About Me</span>
              <span className="article-page3-nav31">Resume</span>
              <span className="article-page3-nav41">Portfolio</span>
              <span className="article-page3-nav52">Testimonials</span>
            </nav>
            <div className="article-page3-buttons">
              <button className="article-page3-login button">Login</button>
              <button className="article-page3-register button">
                Register
              </button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="article-page3-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="article-page3-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="article-page3-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="article-page3-hero">
        <img
          alt="image"
          src="/increaseinrevenue-1400w.jpg"
          className="article-page3-image"
        />
        <div className="article-page3-container1">
          <span className="article-page3-text sectionTitle">
            <span>Article</span>
            <br></br>
          </span>
          <h1 className="article-page3-text03">
            How I Helped a Company Increase Its Revenue by 25% in One Year
          </h1>
          <span className="article-page3-text04 sectionTitle">
            <span>By john dOUBLESEED</span>
            <br></br>
          </span>
          <span className="article-page3-text07">
            <span>
              Remember that sinking feeling when a project just isn&apos;t
              taking off? The frustration of stagnant numbers and missed
              targets? I do. But I also remember the exhilarating surge of
              seeing those numbers climb, defying expectations, and rewriting
              the company&apos;s story. This is the tale of how I helped a
              company skyrocket its revenue by 25% in a single year – a journey
              filled with unexpected lessons, strategic pivots, and the sweet
              taste of collective victory.
            </span>
            <br className="article-page3-text09"></br>
            <br></br>
            <br className="article-page3-text11"></br>
            <br></br>
            <span className="article-page3-text13">
              Stumbling Out of the Gate:
            </span>
            <br className="article-page3-text14"></br>
            <br></br>
            <br className="article-page3-text16"></br>
            <br></br>
            <span>
              When I joined this certain company, the air crackled with nervous
              energy. Sales were flatlining, morale was dwindling, and
              competition was circling like hungry sharks. The founders,
              passionate and brilliant, were lost in the maze of their own
              creation. Enter me, armed with a fresh perspective and a hunger
              for results.
            </span>
            <br className="article-page3-text19"></br>
            <br></br>
            <br className="article-page3-text21"></br>
            <br></br>
            <span className="article-page3-text23">
              Diagnosing the Ailment:
            </span>
            <br className="article-page3-text24"></br>
            <br></br>
            <br className="article-page3-text26"></br>
            <br></br>
            <span>
              My first move was to become a sponge, soaking up every facet of
              the business. Data dives, customer interviews, and competitor
              analysis became my daily bread. What I discovered was a company
              brimming with potential, hampered by internal roadblocks and
              missed opportunities. Marketing messages were muddled, the sales
              funnel leaked like a sieve, and customer loyalty was an endangered
              species.
            </span>
            <br className="article-page3-text29"></br>
            <br></br>
            <br className="article-page3-text31"></br>
            <br></br>
            <span className="article-page3-text33">
              The Phoenix From the Ashes:
            </span>
            <br className="article-page3-text34"></br>
            <br></br>
            <br className="article-page3-text36"></br>
            <br></br>
            <span>
              Armed with my diagnosis, I proposed a radical overhaul. We
              revamped the marketing strategy, crafting clear, targeted messages
              that resonated with our ideal customers. We plugged the holes in
              the sales pipeline, streamlining the journey from lead to loyal
              client. And most importantly, we rekindled the fire of customer
              focus, ensuring their needs were not just met, but exceeded.
            </span>
            <br className="article-page3-text39"></br>
            <br></br>
            <br className="article-page3-text41"></br>
            <br></br>
            <span className="article-page3-text43">The Climb Begins:</span>
            <br className="article-page3-text44"></br>
            <br></br>
            <br className="article-page3-text46"></br>
            <br></br>
            <span>
              Change, of course, wasn&apos;t easy. There were stumbles, missed
              deadlines, and moments of doubt. But the team, ignited by the
              shared vision of a brighter future, rallied around the plan. We
              celebrated small wins, learned from setbacks, and constantly
              iterated, always pushing the boundaries of what was possible.
            </span>
            <br className="article-page3-text49"></br>
            <br></br>
            <br className="article-page3-text51"></br>
            <br></br>
            <span className="article-page3-text53">
              And Then, the Breakthrough:
            </span>
            <br className="article-page3-text54"></br>
            <br></br>
            <br className="article-page3-text56"></br>
            <br></br>
            <span>
              The turning point came sooner than we expected. A new marketing
              campaign resonated like a sonic boom, attracting a wave of new
              customers. Our revamped sales process converted leads with
              laser-like precision. And most importantly, existing customers
              became vocal advocates, spreading the word about their newfound
              love for Acme Inc.
            </span>
            <br className="article-page3-text59"></br>
            <br></br>
            <br className="article-page3-text61"></br>
            <br></br>
            <span className="article-page3-text63">
              From 0 to 25 in One Year:
            </span>
            <br className="article-page3-text64"></br>
            <br></br>
            <br className="article-page3-text66"></br>
            <br></br>
            <span>
              The numbers tell the rest of the story. Within a year, revenue had
              soared by a staggering 25%. The atmosphere at Acme was transformed
              – one of infectious excitement, shared purpose, and the
              intoxicating taste of success.
            </span>
            <br className="article-page3-text69"></br>
            <br></br>
            <br className="article-page3-text71"></br>
            <br></br>
            <span className="article-page3-text73">
              Lessons Learned, Wisdom Shared:
            </span>
            <br className="article-page3-text74"></br>
            <br></br>
            <br className="article-page3-text76"></br>
            <br></br>
            <span>
              This journey taught me invaluable lessons. It taught me the power
              of a clear vision, the importance of unwavering conviction, and
              the magic that happens when a team unites behind a common goal. It
              also reminded me that even the most promising endeavors can
              stumble, and that resilience and adaptability are the keys to
              unlocking true potential.
            </span>
            <br className="article-page3-text79"></br>
            <br></br>
            <br className="article-page3-text81"></br>
            <br></br>
            <span>
              So, if you find yourself staring at a stagnant bottom line,
              remember this: change is possible. With a dose of grit, a dash of
              ingenuity, and a whole lot of heart, you too can help your company
              soar to unimaginable heights. Just remember, the climb may be
              steep, but the view from the top is breathtaking.
            </span>
          </span>
          <div className="article-page3-btn-group"></div>
        </div>
      </div>
      <div className="article-page3-footer">
        <footer className="article-page3-footer1">
          <div className="article-page3-container2">
            <span className="article-page3-logo2">JOHN DOUBLEWOOD</span>
            <nav className="article-page3-nav1 article-page3-nav1">
              <Link to="/" className="article-page3-nav12">
                Home
              </Link>
              <Link to="/" className="article-page3-nav22">
                About Me
              </Link>
              <Link to="/" className="article-page3-nav32">
                Resume
              </Link>
              <Link to="/" className="article-page3-nav42">
                Articles
              </Link>
              <Link to="/" className="article-page3-nav53">
                Testimonials
              </Link>
              <Link to="/" className="article-page3-nav54">
                Contact Me
              </Link>
            </nav>
          </div>
          <div className="article-page3-separator"></div>
          <div className="article-page3-container3">
            <span className="article-page3-text84">
              © 2023 JOHN DOUBLEWOOD, All Rights Reserved.
            </span>
            <div className="article-page3-icon-group1">
              <a
                href="https://twitter.com/JohnDS_SG"
                target="_blank"
                rel="noreferrer noopener"
                className="article-page3-link"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="article-page3-icon10"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/johnds_sg/"
                target="_blank"
                rel="noreferrer noopener"
                className="article-page3-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="article-page3-icon12"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61554900735068"
                target="_blank"
                rel="noreferrer noopener"
                className="article-page3-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="article-page3-icon14"
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

export default ArticlePage3
