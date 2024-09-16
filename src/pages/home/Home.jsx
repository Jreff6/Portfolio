import React from 'react';
import './home.scss'
import Navbar from '../../components/navbar/navbar'
import Presentation from '../../components/presentation/Presentation'
import Menu from '../../components/Menu/Menu'

function Home() {
    return (
      <React.Fragment>
        <div className='home-container'>
          <Navbar />
          <Presentation />
          <Menu />
        </div>
      </React.Fragment>   
    );
}

export default Home