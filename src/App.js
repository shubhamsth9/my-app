import React, {useState, useEffect}  from 'react';
import ContactCard from './contactCard';
import './App.css'

const App = () => {
  
  const [results, setResults] = useState([]);

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=3")
    .then(response => response.json())
    .then(data => {
      setResults(data.results)
    });
  }, [])

  return(
    <div className='container'>
      {results.map((result, index)=> {
        return(
          <ContactCard key = {index}
            name = {result.name.first +" "+ result.name.last} 
            email = {result.email}
            age = {result.dob.age}
            img = {result.picture.large} />
        )
      })}
    </div>
  )
}

export default App;