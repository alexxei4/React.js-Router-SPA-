import React from "react";


class About extends React.Component
{
    render(){
        return(
            <div className="main">
              <div className="header-section">
                <h2 className="heading">About Inventory Store Management</h2>
                <p className="text">This page will help you how to use this system & what it is for</p>
              </div>

              <div className="faq-section">
                  <div className="faq">
                      <h2>1. How to use this system ? </h2>
                      <p>
                          User can navigate to home, search, about & edit page. Home page shows the welcome message to the user. 
                          On searche page user can search & filter the pets products in the inventory.
                          On the about page there are guidlines and help for users.
                          Edit page lets users to edit the products that are curreently available
                      </p>
                     
                  </div>
                  <div className="faq">
                     
                      <h2>2. Purpose of the system</h2>
                      <p>
                          The purpose of this system is to allow people to manage their pet invetory.
                      </p>
                  </div>
              </div>

            </div>
        );
    }
}

export default About;