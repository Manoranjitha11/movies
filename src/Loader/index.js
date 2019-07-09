// @flow

import React from 'react';

import LoadingLogo from '../../img/loading.svg';

import './Loader.css';

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
