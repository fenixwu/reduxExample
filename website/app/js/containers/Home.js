import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getInitialApiRequest } from 'actions/actions';

class home extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getInitialApiRequest();
  }

  render() {
    const { apiReady, apiError, apiData } = this.props.initialApi.toObject();

    return (
      <div>
        {!apiReady && <p>Loading data...</p>}
        {apiError && <p>Loading data ERROR.</p>}
        <p>{apiData.message}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialApi: state.initialApi,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getInitialApiRequest,
  }, dispatch),
});

// connect App with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
