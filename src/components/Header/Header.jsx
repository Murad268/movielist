import React from 'react';
import 'antd/dist/antd.min.css';
import styles from './header.module.scss';
import { Button, PageHeader, Dropdown, Menu  } from 'antd';
import logo from '../../assets/icons/logo.png';
const Header = () => {


   const menu = (
      <Menu
        items={[
          {
            key: '1',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Latest
              </a>
            ),
          },
          {
            key: '2',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Get Now Playing
              </a>
            ),
          },
          {
            key: '3',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Polular
              </a>
            ),
          },
          {
            key: '4',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Top Rated
              </a>
            ),
          },
          {
            key: '5',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Upcoming
              </a>
            ),
          },
          {
            key: '6',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                All
              </a>
            ),
          },
        ]}
      />
    );


   return (
         <PageHeader
            className={styles.header}
            ghost={false}
            extra={[
            <Dropdown className={styles.header__dropdown} overlay={menu} placement="bottomLeft" arrow>
               <Button>Categories</Button>
            </Dropdown>,
            <Button key="3">Movies</Button>,
            <Button key="2">TV Shows</Button>,
            <Button className={styles.header__suggetsBtn} key="1">Suggest me</Button>,
            ]}>
               <div><img src={logo} alt="" /></div>
         </PageHeader>
   );
};

export default Header;