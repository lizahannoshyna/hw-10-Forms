import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleCahange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([\x27 \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleCahange}
          />

          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-\\.\s]?\(?\d{1,3}?\)?[\-\\.\s]?\d{1,4}[\-\\.\s]?\d{1,4}[\-\\.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleCahange}
          />


          <button type="submit">Save</button>
        </form>
      </>
    );
  }
}

export default Form;
