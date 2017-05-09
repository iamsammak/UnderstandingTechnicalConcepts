import React from 'react';
import { Link, withRouter } from 'react-router';

import BenchMap from '../bench_map/bench_map';

class BenchShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 5, body: "", reviewForm: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toReviewForm = this.toReviewForm.bind(this);
    this.toReviewButton = this.toReviewButton.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const benchId = parseInt(this.props.params.benchId);
    const review = Object.assign({}, this.state, {
      bench_id: benchId
    });
    this.props.createReview({review});
    this.toReviewButton();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  reviewButton() {
    return (
      <button
        className="review-button"
        onClick={this.toReviewForm }>
        Leave a Review
      </button>
    );
  }

  reviewForm() {
    return (
      <div className="review-form">
        <form onSubmit={ this.handleSubmit }>
          <label>Rating</label>
          <br/>
          <input type="number"
            value={ this.state.rating }
            onChange={ this.update("rating") }/>
          <br/>

          <label>Comment</label>
          <br/>
          <textarea
            cols='30'
            rows='10'
            value={ this.state.body }
            onChange={ this.update("body") }></textarea>
          <br/>
          <input type="submit"/>
        </form>
        <button onClick={ this.toReviewButton }>Cancel</button>
      </div>
    );
  }

  reviewList(reviews = []) {
    return (
      reviews.map((review) => {
        return(
          <div key={review.id}>
            <ul className="review-list">
              <li>Rating: { review.rating }</li>
              <li>{ review.body }</li>
            </ul>
          </div>
        );
      })
    );
  }

  toReviewForm() {
    debugger;
    if (this.props.currentUser) {
      this.setState({reviewForm: true});
    } else {
      this.props.router.push('/login');
    }
  }

  toReviewButton() {
    this.setState({reviewForm: false});
  }

  reviewSection() {
    if (this.state.reviewForm) {
      return(this.reviewForm());
    } else {
      return(this.reviewButton());
    }
  }

  render() {
    const { bench, benchId, fetchBench, children } = this.props;
    const benches = {
      [benchId]: bench
    };
    return(
      <div className="single-bench-show">
        <div className="single-bench-map">
          <Link to="/">Back to Benches Index</Link>
          <BenchMap
            benches={benches}
            benchId={benchId}
            singleBench={true}
            fetchBench={fetchBench}
            />
        </div>
        <div className="right-half bench-details">
          <div>
            <ul className="bench-list">
              <img className="index-image" src={bench.picture_url}/>
              <li>Rating: {bench.average_rating || "No reviews yet"}</li>
              <li>Description: {bench.description}</li>
              <li>Seats: {bench.seating}</li>
              <li>Latitude: {bench.lat}</li>
              <li>Longitude: {bench.lng}</li>
            </ul>
            <br/>
            <div className="reviews">
              <h3>Reviews</h3>
              {this.reviewList(bench.reviews)}
            </div>
          </div>
          { this.reviewSection() }
        </div>
      </div>
    );
  }
}

export default withRouter(BenchShow);
