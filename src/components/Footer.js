import React from "react";


class Footer extends React.Component
{
    render(){
        return(
            <div className="footer">
            <div className="container-fluid gutter__default">
              <div className="row">
                <div className="col-xs-12">
                  <p className="copyrights pull-left">© All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;