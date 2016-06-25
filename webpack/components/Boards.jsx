import React from 'react';

class Boards extends React.Component {
  constructor(props) {
      super(props);
      this.state = { boards: [] };
  }

  componentWillMount() {
      $.ajax({
            url: '/api/boards',
            type: 'GET',
            dataType: 'JSON',
            data: {param1: 'value1'},
        }).done( boards => {
            this.setState({ boards })
        }).fail( data => {
            console.log(data);
        })
  }

  addBoard(e) {
    // prevent default form submit from happening
    e.preventDefault();
    // make ajax call to create a new board
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    $.ajax({
      url: '/boards',
      type: 'POST',
      data: { board: { name, description } },
      dataType: 'JSON'
    }).done( board => {
      this.props.addBoard(board);
      this.refs.addForm.reset();
    }).fail( response => {
      alert(response.errors.toString());
    });
  }


render() {
  return(
    <div className="container">
      <div className='col s12 m10 offset-m1'>
        <h4>Create New Budget</h4>
        <form ref='addForm' onSubmit={this.addBoard.bind(this)}>
          <input type='text' placeholder='Board Name' ref='name' required />
          <textarea placeholder='Board Description' ref='description'></textarea>
          <input type='submit' className='btn' />
        </form>
<hr/>
<br/>
    </div>       
    <div className="card medium">
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">Category<i className="material-icons right">more_vert</i></span>
        <p><a className='btn' href="#">Edit</a></p>
        <p><a className='btn' href="#">Delete</a></p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">Category<i className="material-icons right">close</i></span>
          <div className="container">
                <table>
              <thead>
                <tr>
                  <th data-field="name">Sub category</th>
                  <th data-field="name">Money:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

   );
  }
}

export default Boards;