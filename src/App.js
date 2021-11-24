import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/cardList';
import FreeComponent from './components/FreeComponent';


function App() {

  const [dataUser, setData] = useState()
  const axios = require('axios');

  useEffect(() => {
    if (!dataUser) { getUser(); }
  });

  async function getUser(dataUser) {
    try {
      const response = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users');
      return dataUser = setData(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="Employees" >
            <h2>Employees</h2>
            {(dataUser) && <CardList dataUser={dataUser} />}
          </div>
          <div className='Employees birthday'>
            <h2>Employees birthday</h2>
            <FreeComponent />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
