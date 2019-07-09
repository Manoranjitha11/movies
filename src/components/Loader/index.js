// @flow

import React from 'react';

import LoadingLogo from '../../images/loading.svg';

import './Loader.css';

// to display the laoder in the screen center when data is loading
export default (props: Props) => {
  const {
    type
  } = props;
  let loaderClassName = 'loader-overlay';
  if (type && type === 'relative') { loaderClassName = 'loader-relative'; }
  return (
    <div className="loader-overlay-wrap">
      <div className={loaderClassName} >
        <img className="logo" src={LoadingLogo} alt="loading..." />
      </div>
    </div>
  );
};
