import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header, { Footer } from '../Partials/Theme';

const RolePage = ({ dataurl }) => {

    const [linkItems, setLinkItems] = useState(['']);
    const [divLink, setDivLink] = useState(['']);
    const navigate = useNavigate();
    
    useEffect(() => {
        getLinkItems();
      }, []);

    function getLinkItems() {
        fetch(dataurl)
          .then(res => res.json())
          .then(data => {
            setLinkItems(data.data);
        })
    }

    function OpenDivLink()
    {
        navigate(divLink);
    }

    return (
        <div>

        <Header />
        
        <div style={{ backgroundColor: '#EEEEEE'}}>
            <div className="container">
                <div className="row" style={{minHeight: 'calc(100vh - 380px)'}}>
                    <div className="col-12">
                        <div className="d-flex justify-content-center align-items-center h-100 w-100">
                            <div className="text-center w-100 py-3" style={{fontSize: '32px'}}>
                                What will be your role<br />on the platform?
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-center h-100 w-100">
                            <div>
                                <div className="w-100">

                                {linkItems && linkItems.length > 0 &&
                                    <div className="w-100 h-100 d-flex justify-content-start">
                                        {linkItems.map
                                            (i => 
                                                (
                                                    <div key={i.id} onClick={() => setDivLink(i.value)}
                                                        className={`d-inline-block p-3 text-decoration-none text-dark ${divLink === i.value ? 'active' : null}`} >
                                                        <img src="/images/Placeholder Square.png" width={'155px'} height={'155px'} alt="Buyer" />
                                                        <div className="text-center my-2" style={{fontSize: '26px'}}>{i.label}</div>
                                                    </div>
                                                )
                                            )
                                        }
                                    </div>
                                }

                                </div>
                                <div className="w-100 mx-auto text-center my-3"  onClick={() => OpenDivLink()}
                                    style={{maxWidth: '240px', backgroundColor: 'white', borderRadius: '12px', padding: '12px 16px'}}>
                                    Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
  
        </div>
    );
}

export default RolePage;