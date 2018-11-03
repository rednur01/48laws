import React, { useState } from 'react'

const CatOverview = () => {
  // eslint-disable-next-line
  const [ placeholder, setPlaceholder ] = useState("Categories Coming soon")
  return (
    <div className="CatOverview">
      {placeholder}
    </div>
  )
}

export default CatOverview
