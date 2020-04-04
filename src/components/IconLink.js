import React from 'react';
import Icon from './Icon';

const linkStyles = {
  display: 'inline-flex',
};

const IconLink = props => (
  <a className="icon-link" href={props.url} style={linkStyles} target="_blank" rel="noopener">
    <Icon icon={props.icon} />{props.text}
  </a>
);

export default IconLink;
