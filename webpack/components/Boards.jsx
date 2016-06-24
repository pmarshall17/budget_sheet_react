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



    render() {
        return(
            <div className="container">
                        
                      <div className="card medium">
                        <div className="card-content">
                          <span className="card-title activator grey-text text-darken-4">Category<i className="material-icons right">more_vert</i></span>
                          <p><a href="#">Add</a></p>
                          <p><a href="#">Edit</a></p>
                          <p><a href="#">Delete</a></p>
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