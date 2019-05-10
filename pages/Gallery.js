
import "../styles/gallery.scss";
import Layout from '../components/MyLayout.js'
import London from '../static/gallery/london';
import Crotia from '../static/gallery/croatia';

class Gallery extends React.Component {
    state = {
        gallery: London,
        current: 0,
        active: false
    }
    imageClick = (current) => {

        this.setState({
            current,
            active: true
        })
    }
    hideLb = () => {
        this.setState({
            active: false
        })
    }
    next = () => {
        if (this.state.current < this.state.gallery.length - 1) {
            this.setState({
                current: this.state.current + 1
            })
        } else {
            this.setState({
                current: 0
            })
        }

    }
    prev = () => {
        if (this.state.current > 0) {
            this.setState({
                current: this.state.current - 1
            })
        } else {
            this.setState({
                current: this.state.gallery.length - 1
            })
        }

    }

    changeGallery = (name) => {

        if (name === 'london') {
            this.setState({
                gallery: London,
            })
        }
        if (name === 'croatia') {
            this.setState({
                gallery: Crotia,
            })
        }

    }

    render() {
        return (
            <Layout>
                <div className={`lightbox__bg ${this.state.active ? 'show' : 'hide'}`} onClick={this.hideLb}>

                </div>
                <div className="container">
                    <div className="lightbox__btns">
                        <div className="btn btn--ldn" onClick={() => this.changeGallery('london')}>London</div>
                        <div className="btn btn--berlin">Berlin</div>
                        <div className="btn btn--croatia" onClick={() => this.changeGallery('croatia')}>Croatia</div>
                        <div className="btn btn--croatia">Corsica</div>
                    </div>
                    <div className="gallery">
                        <div className="thumbnails">
                            {this.state.gallery.map((item, index) => (

                                <div
                                    className="thumbnails__thumbnail"
                                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                                    key={index}
                                    onClick={() => this.imageClick(index)} >

                                </div>

                            ))
                            }

                        </div>
                    </div>
                </div>
                <div className={`${this.state.active ? 'show' : 'hide'}`}>
                    <img className="lightbox__close" src="/lightbox/close.svg" onClick={this.hideLb} />
                    <img className="lightbox__arrow lightbox__arrow--prev" src="/lightbox/prev.svg" onClick={this.prev} />
                    <img className={`lightbox__img ${this.state.active ? 'show' : 'hide'}`} src={this.state.gallery[this.state.current].lightbox} alt={this.state.current.alt} />
                    <p className="lightbox__caption">{this.state.gallery[this.state.current].caption}</p>
                    <img className="lightbox__arrow lightbox__arrow--next" src="/lightbox/next.svg" onClick={this.next} />
                </div>

                </Layout>
        )
    }

}

export default Gallery;