import Layout from "../components/MyLayout.js";
import axios from "axios";

class Index extends React.Component {
  state = {
    blog: []
  };

  componentDidMount() {
    axios.get(`static/content/blog.json`).then(res => {
      const blog = res.data;
      this.setState({ blog });
    });
  }

  render() {
    return (
      <Layout>
        <p>Hello Next.js</p>
      </Layout>
    );
  }
}

export default Index;
