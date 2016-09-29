import React, {Component} from 'react';
import styles from './styles.scss'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Jeff Klein',
    }
  }

  render() {
    return (
      <div className={styles.outerBody}>
        <div className={styles.mainBody}>
          <div className={styles.topNav}>
            { this.state.name }
          </div>
          <div className={styles.contentArea}>
            <div className={styles.leftContent}>
              <div className={styles.contentBox}>
                Software Engineer.
              </div>
              <div className={styles.contentBox}>
                Skills include C++, JavaScript, Ruby, Python, Java, node.js, React, bash, UNIX, CSS/HTML, MongoDB.
              </div>
            </div>
            <div className={styles.middleContent}>
            </div>
            <div className={styles.rightContent}>
              <a className={styles.sideLink} href='jeffrey_klein_resume.pdf' target='_blank'>
                Resume
              </a>
              <a className={styles.sideLink} href='http://www.linkedin.com/pub/jeffrey-klein/69/190/35a' target='_blank'>
                LinkedIn
              </a>
              <a className={styles.sideLink} href='https://github.com/jeffwklein' target='_blank'>
                GitHub
              </a>
              <a className={styles.sideLink} href='mailto:jeffwklein@gmail.com' target='_blank'>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
