import { Alert } from '@edx/paragon';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Banner() {
  return (
    <Alert className="mb-0" variant="warning" dismissible>
      <Alert.Heading><FontAwesomeIcon icon={faPlug} /> The site will be undergoing maintenance.</Alert.Heading>
      <p className="mb-0">Also, your homework is due.</p>
    </Alert>
  );
}
