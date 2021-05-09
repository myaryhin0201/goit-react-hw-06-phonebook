import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import useStyles from './FilterStyles';
const Filter = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <label className={classes.Filter}>
      <span> Find contact by name</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
Filter.defaultProps = {
  value: '',
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
