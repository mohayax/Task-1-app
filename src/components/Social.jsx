import React from 'react';
import Github from '../images/github.png';
import Slack from '../images/slack.png';

const Social = () => {
  return (
    <div className="icons">
        <img src={Slack} alt="" />
        <img src={Github} alt="" />
    </div>
  )
}

export default Social