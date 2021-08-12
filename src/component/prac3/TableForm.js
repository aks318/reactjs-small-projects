import React, { Component } from 'react'
import axios from 'axios'
import "./TableForm.css"

class TableForm extends Component {

    state = {
        data : []
    }

    componentDidMount(){
        axios.get("https://reqres.in/api/users")
        .then(res => this.setState({data : res.data.data}))
    }
    render() {
        // console.log(this.state.data)
        return (
            
            <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((e) =>{
                  return(
                      <tr key = {e.id}>
                          <td>{e.id}</td>
                          <td>{e.email}</td>
                          <td>{e.first_name}</td>
                          <td>{e.last_name}</td>
                      </tr>
                  )
              })}
            </tbody>
          </table>
        )
    }
}

export default TableForm
