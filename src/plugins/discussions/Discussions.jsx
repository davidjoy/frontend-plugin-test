import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import { ProgressBar } from '@edx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';

export default function Discussions({ activeUnit, unitIds }) {
  const count = unitIds.length;

  const index = unitIds.indexOf(activeUnit.id);
  return (
    <article>
      <h4><FontAwesomeIcon icon={faPlug} /> Course Progress</h4>
      <ProgressBar striped variant="success" max={count} now={index} label={`${Math.floor((index / count) * 100)}%`} />
    </article>
  );
}

Discussions.propTypes = {
  activeUnit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  unitIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
