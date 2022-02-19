import React from 'react'

function useLocalStorage(itemName, initValue) {

  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initValue)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let itemLS = localStorage.getItem(itemName)
        let parsedItem
        
        if (itemLS=='[]' || !itemLS) {
          localStorage.setItem(itemName, JSON.stringify(initValue))
          parsedItem = initValue
        }else{
          parsedItem = JSON.parse(itemLS)
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (err) {
        setError(err)
      }
    }, 1000)
  })


  const saveItem = (itemToSave) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(itemToSave))
      setItem(itemToSave)
    } catch (err) {
      setError(err)
    }
  }

  return [
    item,
    saveItem,
    loading,
    error,
  ]

}

export { useLocalStorage }