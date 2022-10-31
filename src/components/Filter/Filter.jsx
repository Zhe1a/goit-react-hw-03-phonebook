import s from './Filter.module.css';

import PropTypes from 'prop-types';

function Filter({ filter, value }) {
  return (
    <div className={s['heder']}>
      <input
        value={value}
        className={s['input']}
        onChange={e => {
          filter(e);
        }}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
