import React from 'react';

import { images } from "../../constants";


const SubHeading = ({title}) => (
  <div style={{ marginBottom: '1rem'}}>
    <h2 className='p__Cormorant' style={{ color: 'white'}}>{title}</h2>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
