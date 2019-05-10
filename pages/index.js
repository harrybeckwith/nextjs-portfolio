import Layout from "../components/MyLayout.js";
import blog from "../static/content/blog.json";
import Front from '../components/Front.js';

class Index extends React.Component {
  state = {
    blog,
    front: [],
    currentBlog: '',
  };


  cardClick = (pos) => {
    console.log(pos);
  }

  render() {
 
    // click of card
    // gets position inside object
    // loads that object into blogpage component


    return (
      <Layout>
        <p>Home</p>
        
      <div className="front">
      
          {this.state.blog.main.map((item, index) => (

                <Front info={item.front} key={index} curr={index} cardClick={this.cardClick}/>
          ))}

        </div>
     

      </Layout>
    );
  }
}

export default Index;
