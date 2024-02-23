import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
    e.target.reset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form_style}>
        <div className={css.input_container}>
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className={css.input_container}>
          <label htmlFor="inputPhoneNumber">Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
