import {Menu} from 'antd';
import { Link } from 'react-router-dom';
export const menu = (
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
    