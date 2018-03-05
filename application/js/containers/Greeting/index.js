import React, { Component } from 'react';

import S from './greeting.sass';

export default class Greeting extends Component {
  render () {
    return (
      <div className={S.container}>
        <i className={S.logo} />
        <h1 className={S.title}>Greeting Human!</h1>
        <h2>I'm Space Alient</h2>
        <p>I use inside</p>
        <p className={S.text}>React</p>
        <p className={S.text}>Redux</p>
        <p className={S.text}>Webpack</p>
      </div>
    );
  }
}
