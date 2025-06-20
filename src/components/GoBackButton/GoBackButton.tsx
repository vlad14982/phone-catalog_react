/* eslint-disable max-len */
import React from 'react';
import { TransitionLink } from '../TransitionLink';
import styles from './GoBackButton.module.scss';

type Props = {
  linkTo: string;
};

export const GoBackButton: React.FC<Props> = ({ linkTo }) => {
  return (
    <TransitionLink to={linkTo} className={styles.goBack}>
      <svg
        className={styles.goBackIcon}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4712 3.52851C10.2109 3.26816 9.78878 3.26816 9.52843 3.52851L5.52843 7.52851C5.26808 7.78886 5.26808 8.21097 5.52843 8.47132L9.52843 12.4713C9.78878 12.7317 10.2109 12.7317 10.4712 12.4713C10.7316 12.211 10.7316 11.7889 10.4712 11.5285L6.94265 7.99992L10.4712 4.47132C10.7316 4.21097 10.7316 3.78886 10.4712 3.52851Z"
        />
      </svg>

      <span className={styles.goBackLabel}>Back</span>
    </TransitionLink>
  );
};
