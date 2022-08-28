import React from 'react';
import { Audio } from 'react-loader-spinner'
import { useSelector } from 'react-redux';
import styles from './loading.module.scss';
const Loading = () => {
   const spinner = useSelector(state => state.appReducer.loading)
   return (
      <div className={styles.loader}>
         <Audio
               height="180"
               width="180"
               radius="9"
               color="yellow"
               ariaLabel="three-dots-loading"
               wrapperStyle
               visible={spinner}
         />
      </div>
   );
};

export default Loading;