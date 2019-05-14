import Layout from "../components/MyLayout.js";


const Index = () => {

    return (
      <Layout>
        
        <div className="home">
        <img class="home__img" src="/static/images/gallery/croatia/4.jpg" alt=""/>
          <div className="home__content">
            <div>
                <h2>
                  Hello, my name is <br></br>
                  Harry Beckwith
                </h2>
                </div>
                <div>
                <p>
                  I am a Front-end Developer.  I have 5 years commercial experience providing front-end development, producing high quality responsive websites and exceptional user experience.
                </p>

                  <p>current skills: </p>
                  <p>
                      Responsive HTML/CSS, JavaScript, Vue Js, React Js, sass, Git, Agile
                  </p>

                  </div>
                </div>
              </div>
      </Layout>
    );

}

export default Index;
