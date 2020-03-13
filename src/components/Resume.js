import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page page__resume">
        <Link className="print-hidden" to="/">&larr; Back to home</Link>
        <div className="resume">
          <div className="grid">

            <div className="grid-item header">
              <section>
                <h1>Joe Ruel</h1>
                <h2>Web Developer</h2>
              </section>
            </div>

            <div className="grid-item experiences">
              <h2>Professional Experience</h2>
              <section className="experience-item">
                <h3>Full Stack Developer<br />Sandstorm Design, Chicago, IL<br />2016-19</h3>
                <div className="experience-body">
                  <ul>
                    <li>Promoted from front end developer in 2018</li>
                    <li>Assist with implementation and iteration of internal patterns and devops tools</li>
                    <li>Manage multiple projects and collaborate cross functionally to align clients’ needs and the agency’s deliverables</li>
                    <li>Document processes to ensure better teamwork and efficiency, such as project developer documentation and requirements</li>
                    <li>Collaborate with QA to determine a test plan and proactively fix bugs before delivering to clients</li>
                    <li><em>Notable projects:</em>
                      <ul>
                        <li>Lead front end developer on a Hermes platinum award-winning site redesign for a national cleaning supply company</li>
                        <li>Front and back end developer for an ecommerce integration into an existing natural products site</li>
                        <li>Custom email digest system that collects activity over a period of time and notifies users</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="experience-item">
                <h3>Web Developer<br />Brella Productions, Evanston, IL<br />2014-16</h3>
                <div className="experience-body">
                  <ul>
                    <li><em>Notable projects:</em> enterprise iOS event app, backend editor tool, rest API for mobile app</li>
                    <li>Interned in summer of 2012</li>
                  </ul>
                </div>
              </section>
              <section className="experience-item">
                <h3>Developer, Summer 2013<br />Bradley University, Peoria IL</h3>
                <div className="experience-body">
                  <ul>
                    <li>Primary developer for Dapper, made in cooperation with a hospital to improve outcomes of patients with Type II Diabetes</li>
                  </ul>
                </div>
              </section>
              <h2>Education</h2>
              <section className="experience-item">
                <h3>Bradley University, Peoria IL</h3>
                <ul>
                  <li>B.S. in interactive media, game design concentration</li>
                  <li>Minors in computer science and studio art</li>
                </ul>
              </section>
            </div>

            <aside className="grid-item sidebar">
              <h2>Skills</h2>
              <div className="section-container">
                <section className="sidebar-section">
                  <h3>Languages</h3>
                  <ul>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>CSS/Sass</li>
                    <li>HTML</li>
                    <li>Python</li>
                    <li>Ruby</li>
                  </ul>
                </section>
                <section className="sidebar-section">
                  <h3>Tools/Utilities</h3>
                  <ul>
                    <li>Git</li>
                    <li>Gulp</li>
                    <li>Webpack</li>
                    <li>Babel</li>
                    <li>Vagrant </li>
                    <li>NPM / Composer / Bundler</li>
                    <li>NVM / RVM</li>
                    <li>Bash / Zsh</li>
                    <li>Editorconfig</li>
                    <li>ESLint</li>
                  </ul>
                </section>
                <section className="sidebar-section">
                  <h3>Frameworks/Libraries</h3>
                  <ul>
                    <li>Drupal</li>
                    <li>WordPress</li>
                    <li>Laravel</li>
                    <li>Rails</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Gatsby</li>
                    <li>jQuery</li>
                  </ul>
                </section>
                <section className="sidebar-section">
                  <h3>Software</h3>
                  <ul>
                    <li>Mac/Windows</li>
                    <li>CentOS/Ubuntu</li>
                    <li>LAMP Stack</li>
                    <li>VSCode/Sublime</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>InDesign</li>
                  </ul>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume;
