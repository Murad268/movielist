import React from 'react';
import { Typography } from 'antd';
import styles from './count.module.scss'
const Count = ({total, title}) => {
   return (
      <Typography.Title level={4} className={styles.title}>
         {title}
         <span>{` ( ${total} results)`}</span>
      </Typography.Title>
   );
};

export default Count;