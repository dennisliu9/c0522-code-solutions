import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      maxImageIndex: this.props.imagesArray.length - 1,
      intervalId: null
    };
    this.generateImages = this.generateImages.bind(this);
    this.generateCircles = this.generateCircles.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  generateImages(props) {
    // ex: [{imageUrl: '../img/cat23.png', alt: 'Raymond'}, {imageUrl: '../img/chn02.png', alt: 'Eggbert'}...]
    return this.props.imagesArray.map((imageDetail, index) => {
      const hiddenState = (this.state.currentImageIndex === index) ? '' : 'hidden-image';
      return <img key={index} src={imageDetail.imageUrl} alt={imageDetail.alt} className={`image-fit ${hiddenState}`}></img>;
    });
  }

  generateCircles(props) {
    return this.props.imagesArray.map((imageDetail, index) => {
      const highlightedState = (this.state.currentImageIndex === index) ? 'fa-solid' : 'fa-regular';
      return <i key={index} className={`mlr-5 ${highlightedState} fa-circle`} data-imageindex={index} onClick={this.handleClick}></i>;
    });
  }

  changeImage(keyValue) {
    if (keyValue === undefined) {
      this.changeImage(this.state.currentImageIndex + 1);
    } else if (keyValue > this.state.maxImageIndex) {
      this.setState({ currentImageIndex: 0 });
    } else if (keyValue < 0) {
      this.setState({ currentImageIndex: this.state.maxImageIndex });
    } else {
      this.setState({ currentImageIndex: keyValue });
    }
  }

  handleClick(event) {
    clearInterval(this.state.intervalId);
    this.startImageTimer();
    if (event.currentTarget.id === 'left-arrow') {
      this.changeImage(this.state.currentImageIndex - 1);
    } else if (event.currentTarget.id === 'right-arrow') {
      this.changeImage(this.state.currentImageIndex + 1);
    } else {
      this.changeImage(parseInt(event.currentTarget.dataset.imageindex));
    }
  }

  startImageTimer() {
    const intervalId = setInterval(() => {
      this.changeImage();
    }, 3000);
    this.setState({ intervalId });
  }

  componentDidMount() {
    this.startImageTimer();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  }

  render() {
    return (
      <div className="page-center flex-col ai-center jc-center">
        <div className="container">
          <div className="row">
            <div className="column-1-10 flex-col jc-center ai-center">
              <button type='button' id='left-arrow' className='arrow-button' onClick={this.handleClick}>
                <i className="fa-solid fa-angle-left fs-2"></i>
              </button>
            </div>
            <div className="column-4-5 flex-col jc-center ai-center">
              {this.generateImages(this.props)}
            </div>
            <div className="column-1-10 flex-col jc-center ai-center">
              <button type='button' id='right-arrow' className='arrow-button' onClick={this.handleClick}>
                <i className="fa-solid fa-angle-right fs-2"></i>
              </button>
            </div>
          </div>
          <div className="row jc-center">
            <div className="column-full mt-10">
              {this.generateCircles(this.props)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
