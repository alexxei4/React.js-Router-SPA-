import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Edit extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      pets_original:[],
      pets:[]
    };

   

  }
  delete_product(id)
  {
    
   axios.get('http://localhost:3001/api?act=delete&id='+id);

   let arr = [...this.state.pets_original];

   arr.forEach((e,i)=>{

     if(e.id === id)
     {
       arr.splice(i,1);
      
     }

   });

   this.setState({
     pets_original:arr
   });

     
  }
  async componentDidMount()
  {
    let response = await fetch('http://localhost:3001/api?act=getall');
    let data = await response.json();
    this.setState({pets_original:data,pets:data});
  }
    render(){
        return(
            <div className="main">
              <div className="header-section">
                <h2 className="heading">Edit Pets</h2>
                <p className="text">This is a awesome pet inventory store where you can manage your inventory</p>
              </div>
              <Link to="/add-item" className="button-primary" >Add New Item</Link>
              <div className="table">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Age</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.pets_original.map((v,i)=>{
                          return(
                            <tr key={i}>
                              <td>{v.id}</td>
                              <td>{v.animal}</td>
                              <td>{v.description}</td>
                              <td>{v.age}</td>
                              <td>{v.price}</td>
                              <td>
                                <span onClick={this.delete_product.bind(this,v.id)} className="button-red">Delete</span>
                               <Link to={'/edit-item/'+v.id} className="button-primary">Edit</Link>
                              </td>
                          </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
              </div>
            </div>
        );
    }
}
export default Edit;