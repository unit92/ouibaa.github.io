import React from 'react';
import './App.css';



function App() {
  var source = "https://human.biodigital.com/widget/?m=cochlear_implant&dk=" + "d35f19e377d3f4ecff9cb2abce7e2441032108c0"

  return (
    <div className="App">
      <div className="cochlear">
        <iframe id="myWidget"
            src={source}
            width="100%"
            height="100%">
        </iframe>
        </div>
    </div>
  );
}

export default App;
