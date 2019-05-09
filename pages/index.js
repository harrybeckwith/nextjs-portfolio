import Layout from "../components/MyLayout.js";
import blog from "../static/content/blog.json";
import Front from '../components/Front.js';

class Index extends React.Component {
  state = {
    blog,
    front: []
  };


  render() {
 
    console.log(this.state.blog);

    const front = this.state.blog.main.map((item,index) => 
      <p key={index}>{item.front.title}</p>
    )


    return (
      <Layout>
        <p>Home</p>
        
      <div className="front">
      
          {this.state.blog.main.map((item, index) => (

                <Front info={item.front} key={index}/>
          ))}

        </div>
     

      </Layout>
    );
  }
}

export default Index;
