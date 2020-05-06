import React  from 'react';
import './App.css';
import Sidebar from './Components/SideBar';
import GlobalData from './Components/GlobalData';
import GetStateData from './Components/GetStateData';


const App = () => {

    return(
                <div>
                <Sidebar />
                
<GlobalData />
<GetStateData />

                </div>
              )
}
export default App;


