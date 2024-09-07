import React from 'react'

const page = ({params}) => {
    if (params.slug.length === 2) {
            return <h1>Viewing docs for fetue {params.slug[0]} and concept {params.slug[1]} </h1>
        } else if(params.slug.length  === 1){
            return <h1>viewing docs 😢</h1>
        }
  return 
    <div>
        
        Documentation home page  </div>
  
}

export default page