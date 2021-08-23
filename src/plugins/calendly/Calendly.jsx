import React from 'react';
import PropTypes from 'prop-types';

import { Hyperlink } from '@edx/paragon';

import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPlug } from '@fortawesome/free-solid-svg-icons';

export default function Calendly({ username }) {
  return (
    <article>
      <h4>Confused?</h4>
      <div><Hyperlink destination={`https://calendly.com/${username}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCalendarAlt} /> Book time with your instructor</Hyperlink></div>
      <small><FontAwesomeIcon icon={faPlug} /> via Calendly</small>
    </article>
  );
}

Calendly.propTypes = {
  username: PropTypes.string.isRequired,
};
