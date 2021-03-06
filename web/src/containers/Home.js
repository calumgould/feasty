import React from 'react';

import 'styles/Main.css';
import 'styles/Home.css';

const Home = ({history}) => {
    return ( 
        <div className='page-background'>
            <div className='home-page'>
                <h1 className='logo'>trend.</h1>
                <div className='button-wrapper'>
                    <button 
                    className='button'
                    onClick={() => history.push('/shop')}>Enter
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;