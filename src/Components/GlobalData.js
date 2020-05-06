import React,{useEffect,useState} from 'react';


const GlobalData = () => {

    const [covidFeed,setData] = useState([]);
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        async function fetchCovidData() {
            const accessURL2 = "https://api.covid19api.com/summary";
            const url = await fetch(accessURL2,requestOptions,{mode: 'cors'});
            const response = await url.json();
            setData(response.Global);
        }
        fetchCovidData();
        return () => {
            console.log("unmount");
        }
         },[]);



    return(
        
                  <div>
                 
                    <div className="div1">
                    <h4>GLOBAL FEED</h4>
                    <h4>New Confirmed : {covidFeed.NewConfirmed} </h4>
                    <h4>New Deaths : {covidFeed.NewDeaths } </h4>
                    <h4>New Recovered : {covidFeed.NewRecovered } </h4>
                    <h4>Total Confirmed : { covidFeed.TotalConfirmed} </h4>
                    <h4>Total Deaths : { covidFeed.TotalDeaths} </h4>
                    </div>
                 </div>
              )
}
export default GlobalData;
