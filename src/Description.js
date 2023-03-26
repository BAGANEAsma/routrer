import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

function Description(props) {

const id=useParams();
console.log(id)
const item=props.movies[id.id]
console.log(item)
  return (
    <div>
      {item&&item.description}
    </div>
  )
}

export default Description
