import React, {Component} from 'react';
import styles from './styles.scss'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.mainBody}>
        <div className={styles.topNav}>
          Jeff Klein
        </div>
        <div className={styles.contentArea}>
          Under construction...
        </div>
      </div>
    )
  }
}
