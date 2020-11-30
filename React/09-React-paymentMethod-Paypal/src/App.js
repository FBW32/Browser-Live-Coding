
import React,{useState} from 'react';
import PaypalPage from './PaypalPage';

function App() {
  const [checkout,setCheckout]=useState(false)
  return (
    <div className="App">
      <h1>E-Shop</h1>
      {checkout? <PaypalPage/>:<div className="product">
        <img src="https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/2C/DB/55f1b1b6-388e-4f12-bb16-295d5dba9697.jpg" alt="" width="300"/>
        <h3>Wrist Watch</h3>
        <h4>Price : 200</h4>
        <button onClick={()=>setCheckout(true)}>checkout</button>
      </div> }
      
      
    </div>
  );
}


export default App;