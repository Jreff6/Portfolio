import React from 'react';
import './home.css'
import Navbar from '../../components/navbar/navbar'
import Presentation from '../../components/presentation/Presentation'
import Menu from '../../components/Menu/Menu'

function Home() {
    return (
      <React.Fragment>
        <div className='top'>
          <Navbar />
        </div>
        <div className='mid'>
          <Presentation />
        </div>
        <div className='bottom'>
            <Menu />
        </div>
      </React.Fragment>   
    );
  }
  
  export default Home;