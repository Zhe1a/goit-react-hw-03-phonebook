import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onForm = e => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addTodo({ id: uuidv4(), ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { handleSubmit, onForm } = this;
    const { name, number } = this.state;
    return (
      <section className={s.ContactForm}>
        <form
          className={s['form']}
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <p className={s['text']}>Name</p>
          <input
            className={s['input']}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onForm}
          />
          <p className={s['text']}>Numder</p>
          <input
            className={s['input']}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onForm}
          />
          <button className={s['button']} type="sumdit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}
ContactForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default ContactForm;
