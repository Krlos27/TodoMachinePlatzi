import React from 'react'

function useLocalStorage(itemName, initValue) {

  const [sincronizedItem, setSincronizedItem] = React.useState(false)
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
        setSincronizedItem(true)
      } catch (err) {
        setError(err)
      }
    }, 1000)
  }, [sincronizedItem])


  const saveItem = (itemToSave) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(itemToSave))
      setItem(itemToSave)
    } catch (err) {
      setError(err)
    }
  }

  const syncItem = () => {
    setLoading(true)
    setSincronizedItem(false)
  }

  return {
    item,
    saveItem,
    loading,
    error,
    syncItem,
    sincronizedItem
  }

}

export { useLocalStorage }