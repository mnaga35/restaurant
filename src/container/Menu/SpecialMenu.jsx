import React from 'react';

import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__sepcialMenu-title'>
      <SubHeading title="Menu that fits you palatte" />
      <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__sepcialMenu-menu_juice flex__center'>
        <p className='app__specialMenu-menu_heading'>Juice</p>
        <div className='app__specialMenu-menu_items'>
          {data.juice.map((juice, index) => (
            <MenuItem key={juice.title + index} title={juice.title} price={juice.price} tags={juice.tags} />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu img" />
      </div>

      <div className='app__sepcialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
        </div>
      </div>
      
    </div>

    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'> view More</button>
    </div>
    
  </div>
);

export default SpecialMenu;
