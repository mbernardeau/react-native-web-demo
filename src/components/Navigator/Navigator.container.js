import { connect } from 'react-redux';

import Navigator from './Navigator';

const mapStateToProps = ({ navigation }) => ({
  route: navigation.route,
});

export default connect(mapStateToProps)(Navigator);
