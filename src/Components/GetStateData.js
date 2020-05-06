import React from 'react';

class GetStateData extends React.Component {

  constructor(props)
  {
      super(props);
      this.fetchCountryName = this.fetchCountryName.bind(this);
     this.fetchCountryData = this.fetchCountryData.bind(this);
      this.state = {
          countryFeeds : [] ,
          countryName : null,
          dstatus : false

        };
  }

  fetchCountryName = (e) => {
     const cname = e.charAt(0).toUpperCase() + e.slice(1);
    console.log(cname);
    this.setState(() => {
        return{
            countryName : cname
        }
    })
  }
      
    fetchCountryData = async (e) => {

        e.preventDefault();
        const cn = this.state.countryName;
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        const accessURL = "https://api.covid19api.com/summary";
        const url2 =  await fetch(accessURL,requestOptions,{mode: 'cors'});
        const countryData = await url2.json();
        const data1 = JSON.parse(JSON.stringify(countryData.Countries));
        for(var i=0;i<data1.length;i++)
        {
          if( data1[i].Country === cn)
          {
            const fdata = data1[i];
            this.setState(() => {
                    return{
                        countryFeeds : fdata,
                        dstatus : true
          
                    }
                })
          }
        }
} 

   

 render()
 {  
    const cdata = this.state.countryFeeds;
     return(
         <div className="div2">
        <p>Enter the Country Name :</p>
        <form onSubmit={this.fetchCountryData}>
        <input type="text" id="countryName" className="inputF"
        onChange={e => this.fetchCountryName(e.target.value)} required/>
        <button className="getstat">Get Stats</button>
        </form>
       <div>
       <h4>Country : {cdata.Country}</h4>
       <h4>Active Cases : {cdata.TotalConfirmed} </h4>
       <h4>Deaths : {cdata.TotalDeaths } </h4>
       <h4>Recovered : {cdata.TotalRecovered } </h4>
       <h4>New Confirmed : { cdata.NewConfirmed} </h4>
       <h4>New Deaths : {cdata.NewDeaths}</h4>
       <h4>New Recovered : {cdata.NewRecovered}</h4>
       </div>
       </div>
     )
 }
}

export default GetStateData;





    //  const url2 =  await fetch('https://api.covid19api.com/summary/Countries'+cn,requestOptions);
    //  const countryData = await url2.json();
    //  const max = countryData.length - 1;
    //  const fdata = countryData[max];
    //   this.setState(() => {
    //       return{
    //           countryFeeds : fdata,
    //           dstatus : true

    //       }
    //   })
    