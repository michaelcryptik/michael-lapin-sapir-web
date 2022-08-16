import React, { useContext, useEffect } from "react";
import { useState } from 'react'
import Header from '../components/Header'
import Items from '../components/Items'
import Categories from '../components/Categories';

import { itemsContext } from '../contexts/itemsContext'


function Home() {

  const [items, setitems] = useContext(itemsContext)

  const SelectSortValue = (e) => {
    const itemsToSort = [...items]
    var sortedItems

    switch (e.target.value) {
      case "1":
        sortedItems = itemsToSort.sort((a, b) => {
          if (parseFloat(a.price.replace(",", "")) > parseFloat(b.price.replace(",", ""))) {
            return 1;
          }
          return -1;
        })
        break;
      case "2":
        sortedItems = itemsToSort.sort((a, b) => {
          if (parseFloat(a.price.replace(",", "")) < parseFloat(b.price.replace(",", ""))) {
            return 1;
          }
          return -1;
        })
        break;
    }

    setitems(sortedItems)
  }


  return (
    <div className="itemsContainer">
      <span className="SelectSort">
        <label>Sort By </label>
        <select onChange={SelectSortValue}>
          <option value="1">Low to High</option>
          <option value="2">High to Low</option>
        </select>
      </span>

      <Items items={items} />
    </div>
  );
}


export default Home;