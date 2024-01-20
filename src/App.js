import React, { useState } from 'react'
import {data} from './data'

const App = () => {
  const [selectedItem,setSelectedItem] = useState(data);
  
  const filterItems = (eachItem) => {
    switch(eachItem) {
      case 'all' :
        setSelectedItem(data);
        break;
      case 'breakfast' :
        setSelectedItem(data.filter((items, index) => index  % 3 === 0));
        break;
      case 'lunch' :
        setSelectedItem(data.filter((items, index) => index % 3 === 1));
        break;
      case 'shakes' :
        setSelectedItem(data.filter((items, index)=> index % 3 === 2));
        break;

      default:
        setSelectedItem(selectedItem);
    }

  }

/*   const oddNumbers = mappedList.filter(number => number % 2 !== 0); */

return (
    <>
    <section className='flex flex-col items-center gap-8 py-16'>
      
      <article className='flex  flex-col items-center gap-8'>
        <header className='flex items-center flex-col gap-2'>
          <h1 className='text-5xl'>Our Menu</h1>
          <div className='border-2 border-[#f59e0b] w-24'></div>
        </header>

        <aside className='flex items-center gap-4'>
          <button className='bg-[#f59e0b] hover:bg-[#b45309] hover:shadow-lg text-white px-4 rounded-sm text-center' onClick={() => filterItems('all')}>All</button>
          <button className='bg-[#f59e0b] hover:bg-[#b45309] hover:shadow-lg text-white px-4 rounded-sm text-center'  onClick={() => filterItems('breakfast')}>Breakfast</button>
          <button className='bg-[#f59e0b] hover:bg-[#b45309] hover:shadow-lg text-white px-4 rounded-sm text-center' onClick={() => filterItems('lunch')}>Lunch</button>
          <button className='bg-[#f59e0b] hover:bg-[#b45309] hover:shadow-lg text-white px-4 rounded-sm text-center' onClick={() => filterItems('shakes')}>Shakes</button>
        </aside>
        
      </article>
    
      <section className='flex flex-col items-start md:w-[90%] w-[75%] md:flex-wrap md:flex-row md:gap-8 justify-center'>
      {selectedItem.map((items, index) => {
      console.log(index)
      return <>
      
      <ListItem key={index} items={items} />
        
  
      </>})}
      </section>
    </section>
    </>
  )
}

const ListItem = ({items}) => {

  
  return (
    <>
    <section className='bg-white my-4 rounded-md md:max-w-[23rem] shadow'>
    <img src={items.image} alt={items.title} className='w-[30rem] h-64 object-cover rounded-t-md'/>
        <aside className='p-7'>
          <article className='flex justify-between'>
        <h1 className='text-xl font-semibold'>{items.title}</h1>
        <h1 className='text-md rounded text-white bg-[#f59e0b] px-4'>{items.price}</h1>
        </article>
        <p className='py-4 leading-loose text-gray-400'>{items.content}</p>
        </aside>
      </section>
    </>
    )

}

export default App