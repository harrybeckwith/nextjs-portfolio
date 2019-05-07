import Layout from "../components/MyLayout.js";
import axios from "axios";

class Index extends React.Component {
  state = {
    blog: [],
    front: []
  };

  componentDidMount() {
    axios.get(`static/content/blog.json`).then(res => {
      const blog = res.data;
      this.setState({ blog });
    });
  }

  render() {
    const blogItems = Object.keys(this.state.blog).map((item, index) => {
      const blogItem = this.state.blog[item].map(v => {
        console.log(v.front.title);
      });
    });

    return (
      <Layout>
        <p>Home</p>
        {Object.keys(this.state.blog).map((item, index) => {
          this.state.blog[item].map(v => `<p> ${v.front.title}</p>`).join("");
        })}
      </Layout>
    );
  }
}

export default Index;
