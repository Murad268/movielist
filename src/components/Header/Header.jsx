import React from 'react';
import 'antd/dist/antd.min.css';
import styles from './header.module.scss';
import { Button, PageHeader, Dropdown, Menu  } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
const Header = () => {
  const navigate = useNavigate()

   const menu = (
      <Menu
        items={[
          {
            key: '1',
            label: (
              <Link to="/latest" rel="noopener noreferrer" >
                Latest
              </Link>
            ),
          },
          {
            key: '2',
            label: (
              <Link to="/now_playing" rel="noopener noreferrer" href="https://www.aliyun.com">
                Get Now Playing
              </Link>
            ),
          },
          {
            key: '3',
            label: (
              <Link to="/popular" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Polular
              </Link>
            ),
          },
          {
            key: '4',
            label: (
              <Link to="/top_rated" rel="noopener noreferrer" >
                Top Rated
              </Link>
            ),
          },
          {
            key: '5',
            label: (
              <Link to="/upcoming" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Upcoming
              </Link>
            ),
          }
        ]}
      />
    );
      
    const go = (pathname) => {
        navigate("/"+pathname)
    }

   return (
         <PageHeader
            className={styles.header}
            ghost={false}
            extra={[
            <Dropdown key="4" className={styles.header__dropdown} overlay={menu} placement="bottomLeft" arrow>
               <Button>Categories</Button>
            </Dropdown>,
            <Button onClick={() => go("favorites")} key="3">Favorites</Button>,
            <Button  onClick={() => go("watch_list")} key="2">Watch List</Button>,
            <Button className={styles.header__suggetsBtn} key="1">Suggest me</Button>,
            ]}>
               <Link to="/"><img src={logo} alt="" /></Link>
         </PageHeader>
   );
};

export default Header;