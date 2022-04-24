import React from 'react';

const App = () => {

  const title = "Namaste";

  return(
    <div>
      <h1>{title}</h1>
      <h2 onClick={() => alert("Kyiu chua usko?")}>
        Ye mera React app hai! 
      </h2>
    </div>
  )
}

export default App;