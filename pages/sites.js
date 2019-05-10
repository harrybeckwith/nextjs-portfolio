import Layout from "../components/MyLayout.js";
import sites from "../static/content/sites.json";
import Front from '../components/Front.js';
import Router from "next/router";

class Index extends React.Component {
  state = {
    sites,
    front: [],
    currentsites: '',
  };


  cardClick = (current) => {

    Router.push({
        pathname: '/single-site',
        query: {current}
    })
  }

  render() {
 
    // click of card
    // gets position inside object
    // loads that object into sitespage component


    return (
      <Layout>
        <h2></h2>
        
      <div className="front">
      
          {this.state.sites.main.map((item, index) => (

                <Front info={item.front} key={index} curr={index} cardClick={this.cardClick}/>
          ))}

        </div>
     

      </Layout>
    );
  }
}

export default Index;
