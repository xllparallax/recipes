import React, { useEffect, useState } from 'react'

function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState('recipe1')

  useEffect(() => {
    const script = document.createElement('script')

    script.src =
      'https://storage.googleapis.com/saboresolimpica/7productLoader.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleSelectChange = (event: any) => {
    setSelectedRecipe(event.target.value)
  }

  return (
    <div>
      <select
        id="recipe-selector"
        value={selectedRecipe}
        onChange={handleSelectChange}
      >
        <option value="recipe1">Sándwich gourmet con vegetales asados</option>
        <option value="recipe2">Ensalada mediterránea de quinoa</option>
      </select>
      <div id="recipe-container" />
    </div>
  )
}

export default Recipes
