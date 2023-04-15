import {faker} from '@faker-js/faker';
import arrowDownIcon from '../images/arrow_down.png'
import plusicon from '../images/plus.png'
import Items from '../components/Items'
import foodItem from '../images/dummy/food.png'
import AddMenu from '../components/AddMenu'
import { useEffect, useState, useContext } from 'react';
import { AddItemContext, AddItemContextProvider} from '../context/AddItemContext';
import { ItemEditContext } from '../context/ItemEditContext';

function FoodMenus(props) {
  const {setAddItem} = useContext(AddItemContext)
  const {setItemEdit} = useContext(ItemEditContext)
 
  const fakeMenu = [
    {
      catName: 'Biriyani',
      items: [
        {
          name: 'Chicken Biriyani',
          desc: `Succulent bone-in chicken pieces cooked in rich spices and steeped in seeraga samba rice and cooked to perfection! From Kongu Nadu with love.`,
          price: 352,
          veg: false,
          image:foodItem,
        },
        {
          name: 'Mushroom Biriyani',
          desc: `Steeped in seeraga samba rice and cooked to perfection! From Kongu Nadu with love.`,
          price:471,
          veg: true,
          image:foodItem,
        },
        {
          name: 'Mutton Biriyani',
          desc: `Soft and tender pieces of mutton in rich spices and steeped in seeraga samba rice and cooked to perfection from Kongu Nadu with love`,
          price:340,
          veg: false,
          image:foodItem,
        }
      ]
    },
    {
      catName: 'Rice',
      items: [
        {
          name: 'Szechwan Veg Fried Rice',
          desc: 'A spicy Indo-Chinese intermix of vegetables and rice tossed in Schezwan sauce that adds a unique peppery flavour to the dish.',
          price: 250,
          veg: true,
          image:foodItem,
        },
        {
          name: 'Veg Fried Rice',
          desc: 'A deliciously aromatic and flavourful dish prepared from rice and stir-fried vegetables.',
          price:240,
          veg: true,
          image:foodItem,
        },
        {
          name: 'Chicken Fried Rice',
          desc: 'A satisfying combination of stir-fried vegetables, chicken and rice with a tinge of vinegar.',
          price:275,
          veg: false,
          image:foodItem,
        }
      ]
    },
    {
      catName: 'Juice',
      items: [
        {
          name: 'Apple Juice',
          desc: 'A revitalizing juice made from fresh apples.',
          price: 175,
          veg: true,
          image:foodItem,
        },
        {
          name: 'Orange Juice',
          desc: 'Freshly squeezed orange juice packed with vitamins and minerals.',
          price:185,
          veg: true,
          image:foodItem,
        },
        {
          name: 'Pineapple Juice',
          desc: 'Sweet and tangy pineapple juice blended until smooth and frothy.',
          price:197,
          veg: true,
          image:foodItem,
        }
      ]
    },
  ]


  const addItemClk = () => {
    setAddItem(true)
  }
  
  return (
    <div className="foodMenus">
      <div className="top">
        {/* <div className="categories">
          <span>Categories</span>
          <img src={arrowDownIcon} height={12}/>
        </div> */}
        <div className="addItem" onClick={addItemClk} >
          <span>Add Item </span>
          <img src={plusicon} height={12} />
        </div>
      </div>
      <div className="wrapper">
        <Items items={JSON.stringify(fakeMenu)}/>
      </div>
      <AddMenu />
    </div> );
}

export default FoodMenus;