import React from "react";
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            description:"",
            age:"",
            price:""
        };
        this.save_item = this.save_item.bind(this);
        this.handle_name = this.handle_name.bind(this);
        this.handle_description = this.handle_description.bind(this);
        this.handle_age = this.handle_age.bind(this);
        this.handle_price = this.handle_price.bind(this);
    }
    save_item(e) {
        e.preventDefault();
        axios.get('http://localhost:3001/api?act=add&animal='+this.state.name+'&description='+this.state.description+'&age='+this.state.age+'&price='+this.state.price);
        this.setState({
            name:"",
            description:"",
            age:"",
            price:"",
            msg:"New item added"
        });
    }
    handle_name(e)
    {
        let value = e.target.value;
        this.setState({name:value});
    }
    handle_description(e)
    {
        let value = e.target.value;
        this.setState({description:value});
    }
    handle_age(e)
    {
        let value = e.target.value;
        this.setState({age:value});
    }
    handle_price(e)
    {
        let value = e.target.value;
        this.setState({price:value});
    }
    render() {
        return (
            <div className="main">
                <div className="header-section">
                    <h2 className="heading">Add New Item</h2>
                    <p className="text">You can add new items here</p>
                </div>
                <div className="center-section-1__body">
                    <form className="form-1" action="#">
                        <div className="group">
                            <input type="text" onChange={this.handle_name} placeholder="Animal name" value={this.state.name} required />
                        </div>
                        <div className="group">
                            <textarea placeholder="Animal description" onChange={this.handle_description} value={this.state.description} required></textarea>
                        </div>
                        <div className="group">
                            <input type="text" placeholder="Animal age" onChange={this.handle_age} required value={this.state.age} />
                        </div>
                        <div className="group">
                            <input type="text" placeholder="Animal price" onChange={this.handle_price} value={this.state.price} required />
                        </div>
                        <div className="group">
                            <input onClick={this.save_item} type="submit" className="button button-primary button-block" value="Save" />
                        </div>
                        <div className="group text-center">
                            <Link to='/edit' className="button-red button-block">Back</Link>
                        </div>
                    </form>
                </div>
                <div className="group text-center">
                    <p>{this.state.msg}</p>
                </div>
               
            </div>
        );
    }
}
export default AddItem;