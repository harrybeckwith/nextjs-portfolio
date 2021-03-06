import Layout from "../components/MyLayout.js";
import sites from "../static/content/sites.json";
import Front from '../components/Front.js';
import Router from "next/router";

class Index extends React.Component {
  state = {
    sites,
    currentsites: '',
  };


  cardClick = (current) => {

    Router.push({
        pathname: '/single-site',
        query: {current}
    })
  }

  render() {

    return (
      <Layout>

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
