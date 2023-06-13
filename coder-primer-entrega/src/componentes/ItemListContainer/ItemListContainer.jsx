import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <main>
        <h2 className='text-center m-6 p-5'> {greeting} </h2>
    </main>
  )
}

export default ItemListContainer