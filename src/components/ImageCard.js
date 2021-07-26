import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state goes inside the constructor!
    this.state = { spans: 0 };
    // Create a ref to access the DOM
    this.imageRef = React.createRef();
  }

  // Once the component has rendered, it will run this code, you can then invoke another method.
  componentDidMount() {
    // listen for load event, use setSpans as a callback
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
    // Get image height from imageRef in the DOM
    const height = this.imageRef.current.clientHeight;
    // calculate the number of spans
    const spans = Math.ceil(height / 10);

    // Set state to spans
    this.setState({ spans: spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
