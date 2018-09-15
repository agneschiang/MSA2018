import Button from '@material-ui/core/Button';
import * as React from 'react';

interface IState{

  weathers:any[],
  location: any, 
  isLoading: any, 
  error: any
  
 
}


export default class ThirdComponent extends React.Component<{}, IState> {
  constructor(props:any){
    super(props)
    this.state = {
      weathers:[],
      location: "",
      isLoading: false, 
      error: null
          
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  public handleChange(event: any) {
    this.setState({location: event.target.value});
    
  }

  public handleSubmit(event: any) {
    const city = this.state.location;
    const api = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=4cc8aca9ef202233ba22ab2b26cec92c';  
     
    fetch(api)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .then(data => this.setState({weathers: data.list, isLoading: false}))
    .catch(error => this.setState({error, isLoading: false}))
    event.preventDefault();
  }

  


  public render() {
     const {weathers, isLoading, error} = this.state;

     if(error){
      alert("You have type a wrong location, please try again");
      location.reload();    
      
    }

    if(isLoading){
      return<p>Loading ...</p>;
    }

    


    return (
      <div className= "centreText">
      <h2>Temperature in 5 days and 5 hours time </h2>
        <form onSubmit={this.handleSubmit}>
          <label>
          Location: 
             <input type="text" placeholder="Enter the Loaction" value={this.state.location} onChange={this.handleChange} />
          </label>
          
          <Button variant="contained" type="submit" size="medium" style={{maxWidth: '40px', maxHeight: '40px', minWidth: '10px', minHeight: '10px'}} > Submit </Button>
          

        </form>
        <div className="showWeather">
        <table className="table">
        <tbody>
            <tr><th> Date </th><th> Description </th><th> Temperature Range </th></tr>
            {
              weathers.map((hit) =>
              
                <tr key={hit}><td>{hit.dt_txt}</td><td>{hit.weather[0].main} and {hit.weather[0].description}. High {Math.round(hit.main.temp_max -273.15)}. Winds is at {hit.wind.speed} km/h </td>
                <td><img src="https://imgur.com/19uj8tj.jpg"  height="25" width="25"/>{Math.round(hit.main.temp_min -273.15)}°C - {Math.round(hit.main.temp_max  -273.15)}°C<br/><img src="https://imgur.com/JSTATIY.jpg" height="25" width="25"/> Pressure: {hit.main.pressure}<br/><img src="https://imgur.com/Xz9sgO5.jpg" height="25" width="25"/> {hit.wind.speed} km/h <br/> <img src="https://imgur.com/YkohH8M.jpg" height="25" width="17"/> {hit.main.humidity}%</td></tr>
              )}

          </tbody>
          </table>
        </div>
      </div>
      
    );
  }
  
}



