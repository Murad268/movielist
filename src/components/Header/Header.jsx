import React from 'react';
import { Button, PageHeader, Dropdown  } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {menu} from '../../utils/linkUtils'
import { icons } from '../../utils/iconUtils';
import 'antd/dist/antd.min.css';
import styles from './header.module.scss';
const Header = () => {
  const navigate = useNavigate()

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
               <Link to="/"><img src={icons.logo} alt="" /></Link>
         </PageHeader>
   );
};

export default Header;