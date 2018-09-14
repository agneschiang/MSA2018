import * as React from 'react';
import Loader from 'react-loader-spinner'

interface IState{
    news: any[], 
    isLoading: any, 
    error: any
}

const API = 'http://webhose.io/filterWebContent?token=7da966c4-3117-4ce7-a94a-b77760be77b0&format=json&sort=crawled&q=New%20Zealand%20site_type%3Anews';


export default class ThirdComponent extends React.Component<{}, IState>{
    constructor(props: any){
        super(props)
        this.state = {
            news: [], 
            isLoading: false, 
            error: null
        }
    };


    public componentDidMount(){
        fetch(API)
        .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
        .then(data => this.setState({news: data.posts, isLoading: false}))
        .catch(error => this.setState({error, isLoading: false})) 
    }


    public render() {
        const { news, isLoading, error } = this.state;
        
        if(error){
            alert("You have type a wrong location, please try again");
            location.reload();    
            
          }
      
          if(isLoading){
            return (
                <p>The page is Loading: 
                    <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/></p>
            
            );
          }

        return (
            <div className="TopSection">
                <div className = "Second Section">
                    <table className="table">
                        <tr><th/><th/></tr>
                        {
                            news.map((item) => 
                                <tr key={item}><td><img src={item.thread.main_image} height="200" width="250" /> 
                                <br/><br/>{item.thread.title_full} <br/><br/>{item.text}<br/><br/>
                                <a href={item.thread.url}> More...</a></td><td> Date: {item.published}</td></tr>
                            
                            )
                        }
                    </table>
            </div>
          </div>
        );
      


    }

}