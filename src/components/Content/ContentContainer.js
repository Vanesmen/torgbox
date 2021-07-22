import React from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getTimezone } from "../../redux/timezone-reducer";
import { Spinner } from 'react-bootstrap';


class ContentContainer extends React.Component {

  componentDidMount() {
    this.props.getTimezone();
  }

  render() {
    return (
      <>
        {!this.props.clockCard.isReady ?
          <Spinner animation="border" variant="primary" /> :
          <Content clockCard={this.props.clockCard} />}
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    clockCard: state.clockCard,
  }
};

export default compose(
  connect(mapStateToProps, { getTimezone })
)(ContentContainer);