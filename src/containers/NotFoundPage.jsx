import React from 'react';
import { icons } from '../utils/iconUtils';
const NotFoundPage = () => {
   return (
      <div>
         <img style={{"width": "100%", "height": "100vh"}} src={icons.pageNotFound} alt="" />
      </div>
   );
};

export default NotFoundPage;