import { Component } from 'react';
import { create } from '../../utilities/notes-api';

export default class CreateNewNote extends Component {
  state = {
    content: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {content} = this.state
      const formData = {content}
      const newNote = await create(formData);
      this.props.setNotes([...this.props.notes, newNote]);
      this.setState({
        content: ''
      });
    } catch {
      this.setState({ error: 'Failed to create note - Try again'})
    }
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <label>Note:</label>
            <input type="text" name="content" placeholder='Add Note' value={this.state.content} onChange={this.handleChange} required/>
            <button type="submit">Add Note</button>
          </form>
        </div>
      </div>
    )
  }
}