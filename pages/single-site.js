import Layout from "../components/MyLayout.js";
import sites from "../static/content/sites.json";
import Router from "next/router";

class SingleSite extends React.Component {
  state = {
    sites,
    content: '',
  }


  componentWillMount() {

    this.setState({
      content: this.state.sites.main[this.props.url.query.current].content
    })

    console.log(this.state);

  }


  render() {


    console.log(this.state.content);
 
    // click of card
    // gets position inside object
    // loads that object into blogpage component


    return (
      <Layout>

        <div className="overview">

          <div className="overview__container">

          <div className="overview__img" style={{backgroundImage: `url(${this.state.content.largeImg})`}}>

            {/* <img className="overview__img__pic" src={this.state.content.largeImg} /> */}

            </div>

            <div className="overview__content">

                <h2 className="overview__title title--md">
                  {this.state.content.title}
                </h2>

                {this.state.content.topContent.map((item,index) => (
                    <p key={index} href={item}className="overview__text">{item}</p>
                  ))}

                <h2 className="overview__title--md title--md">
                  {this.state.content.titleTwo}
                </h2>

                <ul className="overview__code">
                  {this.state.content.code.map((item,index) => (

                    <li key={index} className="overview__code__item">- {item}</li>

                    ))}
                </ul>
                
                <h2 className="overview__title--md title--md">
                  {this.state.content.titleThree}
                </h2>

                <div className="overview__links">
                  {this.state.content.code.map((item,index) => (
                      <a key={index} href={item} className="overview__links__link">{item}</a>
                    ))}
                </div>
             
            </div>

          </div>
     
        </div>
  
      </Layout>
    );
  }
}

export default SingleSite;
