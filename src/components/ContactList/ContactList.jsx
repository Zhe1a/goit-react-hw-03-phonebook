import s from './ContactList.module.css';

import PropTypes from 'prop-types';

function ContactList({ contacts, remove }) {
  return (
    <ul className={s.Item}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.list} key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              className={s.button}
              id={id}
              onClick={() => {
                remove(id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  remove: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
