import React from 'react';
import PropTypes from 'prop-types';
import { asyncConnect } from 'redux-connect';
import isEmpty from 'lodash/isEmpty';
import { contentActionCreators } from '../../redux/ducks';
import Testimonials from '../../components/Testimonials/Testimonials';
import './landingPage.css';

const LandingPage = ({
  content: { testimonials },
}) => (
  <div className="landing-page">
    <h1>BookMyshow Movie Listing Page</h1>
    <p>Show your own movie</p>
    <Testimonials testimonials={testimonials} />
  </div>
);

LandingPage.propTypes = {
  content: PropTypes.object.isRequired,
};

const beforeRouteEnter = [{
  promise: ({ store: { dispatch, getState } }) => {
    const promise = isEmpty(getState().content.testimonials)
      ? dispatch(contentActionCreators.getTestimonials(3)) : null;
    return __BROWSER__ ? null : promise;
  },
}];

const mapStateToProps = (state) => ({
  content: state.content,
});

export default asyncConnect(
  beforeRouteEnter,
  mapStateToProps,
)(LandingPage);
