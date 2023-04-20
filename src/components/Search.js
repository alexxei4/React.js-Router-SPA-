import React from "react";


class Search extends React.Component
{

  
  constructor(props) {
    super(props);
    this.state = {
      pets_original:[],
      pets:[],
      keyword:"",
    };

   

    this.search_product = this.search_product.bind(this);
  }

  async componentDidMount()
  {
    let response = await fetch('http://localhost:3001/api?act=getall');
    let data = await response.json();

    this.setState({pets_original:data,pets:data});

    let keyword = this.props.match.params.keyword;

    if(keyword != undefined)
    {
      this.setState({keyword:keyword});

      let temp_arr = [];
    this.state.pets_original.forEach(element => {

      let animal = element.animal.toLowerCase();

      if(animal.includes(keyword.toLowerCase()))
      {
        temp_arr.push(element);
      }

    });


    this.setState({pets:temp_arr});
      
    }
  }

  search_product(e)
  {
    let keyword = e.target.value;

    this.setState({pets:this.state.pets_original,keyword:keyword});


    let temp_arr = [];
    this.state.pets_original.forEach(element => {

      let animal = element.animal.toLowerCase();

      if(animal.includes(keyword.toLowerCase()))
      {
        temp_arr.push(element);
      }

    });


    this.setState({pets:temp_arr});

  }

    render(){
        return(
            <div className="main">
              <div className="header-section">
                <h2 className="heading">Search Pets</h2>
                <p className="text">Here you can search pets</p>
              </div>

              <form>
                  <input value={this.state.keyword} onChange={this.search_product} className="search-box" type="text" placeholder="Search..." />
              </form>

              <div className="table">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Age</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {

                        this.state.pets.map((v,i)=>{
                         
                          return(
                            <tr key={i}>
                              <td>{v.id}</td>
                              <td>{v.animal}</td>
                              <td>{v.description}</td>
                              <td>{v.age}</td>
                              <td>{v.price}</td>
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

export default Search;