import React, {Compo} from 'react';
import Title from './Compo/Title';
import Name from './Compo/Name';
import './intro.css';

function App() {
  return (
    <div class="mainbox">
        <Title introbox = "Ku jimin"/>
        <Name nametext = "멋쟁이 사자처럼 10기"/>
    </div>
  );  
}

export default App;