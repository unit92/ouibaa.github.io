import React from 'react';
import './App.css';



function App() {
  var source = "https://human.biodigital.com/viewer/?be=3RFq&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=d35f19e377d3f4ecff9cb2abce7e2441032108c0"


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
