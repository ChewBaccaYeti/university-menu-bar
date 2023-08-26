import React, { Component } from 'react';
import styles from './App.module.css';
import AppButton from 'Components/Buttons';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <AppButton />
        </div>
      </div>
    );
  }
}

export default App;
