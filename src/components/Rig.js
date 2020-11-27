import React from 'react';


const Rig = (props) => {
    return (

        <section className="page-section bg-primary" id="rig">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Design Your Own Rig!</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row" >
                    <div className="col-7 text-white">
                        <h3> Pick your gear</h3>
                        {/* This will be a component */}
                        {/* Table code starts here */}
                        <div className="card bg-table">
                            <div className="table-responsive">
                                <table className="table table-striped text-white">
                                    <tbody>
                                        <tr>
                                            <th className="table-header">CPU</th>
                                            <td className="float-left">
                                                {/* this will populated from the backend */}
                                                <label >
                                                <input type="radio" id="male" name="gender" value="100"/>
                                                &nbsp; Core i3-9100F</label>
                                                <br />
                                                <label >
                                                <input type="radio" id="female" name="gender" value="150"/>
                                                &nbsp; Core i5-9400F</label>
                                                <br />
                                                <label >
                                                <input type="radio" id="other" name="gender" value="200"/>
                                                &nbsp; Core i5-10400</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table code starts here */}
                        <div className="card bg-table rig-table">
                            <div className="table-responsive">
                                <table className="table table-striped text-white">
                                    <tbody>
                                        <tr>
                                            <th className="table-header">Motherboard</th>
                                            <td>
                                                <span  className="float-left">
                                                    <label > <input type="radio" id="male" name="gender" value="100"/>
                                                    &nbsp; Gigabyte B365M DS3H Micro ATX LGA1151</label><br />
                                                </span>
                                                <span className="float-left">
                                                    <label >
                                                    <input type="radio" id="female" name="gender" value="150"/>
                                                    &nbsp; Gigabyte B460M DS3H  Micro ATX LGA1200</label><br />
 
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Table code starts here */}
                        <div className="card bg-table rig-table">
                            <div className="table-responsive">
                                <table className="table table-striped text-white">
                                    <tbody>
                                        <tr>
                                            <th className="table-header">Memory</th>
                                            <td>
                                                <span  className="float-left">
                                                    <label >
                                                    <input type="radio" id="male" name="gender" value="100"/>
                                                    &nbsp; Team Elite Plus 16 GB (2 x 8GB) DDR4-2400 CL16</label><br />
                                                </span>
                                                <span  className="float-left">

                                                    <label >
                                                    <input type="radio" id="female" name="gender" value="150"/>
                                                    &nbsp; G.Skill Aegis 16 GB (2 x 8GB) DDR4-3000 CL16</label><br />
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* End Table */}
                        
                        {/* Table code starts here */}
                        <div className="card bg-table rig-table">
                            <div className="table-responsive">
                                <table className="table table-striped text-white">
                                    <tbody>
                                        <tr>
                                            <th className="table-header">Storage</th>
                                            <td>
                                                <span  className="float-left">
                                                    <label >
                                                    <input type="radio" id="male" name="gender" value="100"/>
                                                    &nbsp; Team GX1 480 GB 2.5"</label><br />
                                                </span>
                                                <span  className="float-left">
                                                    <label > <input type="radio" id="female" name="gender" value="150"/>
                                                    &nbsp; Mushkin Enhanced Helix-L 1 TB M.2-2280 NVME</label><br />
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* End Table */}

                        {/* Table code starts here */}
                        <div className="card bg-table rig-table">
                            <div className="table-responsive">
                                <table className="table table-striped text-white">
                                    <tbody>
                                        <tr>
                                            <th className="table-header">Video Card</th>
                                            <td>
                                                <span  className="float-left">
                                                    <label >
                                                    <input type="radio" id="male" name="gender" value="100"/>
                                                    &nbsp; XFX Radeon RX 570 4 GB XXX Edition</label><br />
                                                </span>
                                                <span  className="float-left">
                                                    <label > <input type="radio" id="female" name="gender" value="150"/>
                                                    &nbsp; Asus GetForce GTX 1660 SUPER 6 GB DUAL EVO OC </label><br />
                                                </span>
                                                
                                                <span  className="float-left">
                                                    <label >
                                                    <input type="radio" id="female" name="gender" value="150"/>
                                                    &nbsp; ASRock Radeon RX 5700 XT 8 GB CHALLANGER D OC</label><br />
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* End Table */}

                        {/* Table code starts here */}
                        <div className="card bg-table rig-table">
                            <div className="table-responsive">
                                <table className="table table-striped text-white">
                                    <tbody>
                                        <tr>
                                            <th className="table-header">Case</th>
                                            <td>
                                                <span  className="float-left">
                                                    <label >
                                                    <input type="radio" id="male" name="gender" value="100"/>
                                                    &nbsp; Cooler Master MasterBox Q300L MicroATX Mini Tower</label><br />
                                                </span>
                                                <span  className="float-left">
                                                    <label >
                                                    <input type="radio" id="female" name="gender" value="150"/>
                                                    &nbsp; Cougar MX330-G ATX Mid Tower </label><br />
                                                </span>
                                                
                                                <span  className="float-left">
                                                    <label >
                                                    <input type="radio" id="female" name="gender" value="150"/>
                                                    &nbsp; Corsair 275R Airflow ATX Mid Tower</label><br />
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* End Table */}

                        
                        {/* Table code starts here */}
                        <div className="card bg-table rig-table">
                            <div className="table-responsive">
                                <table className="table table-striped text-white">
                                    <tbody>
                                        <tr>
                                            <th className="table-header">Power Supply</th>
                                            <td>
                                                <span  className="float-left">
                                                    <label >
                                                        <input type="radio" id="male" name="gender" value="100"/>
                                                        &nbsp; Consair CXM (2015) 450 W 80+ Bronze Certified Semi-modular ATX    
                                                    </label><br />
                                                </span>
                                                <span  className="float-left">
                                                    <label>
                                                    <input type="radio" id="female" name="gender" value="150"/> 
                                                    &nbsp; Antec NeoECO Gold ZEN 500 W 80+ Gold Certified ATX </label><br />
                                                </span>
                                                
                                                <span  className="float-left">
                                                    <label >
                                                        
                                                    <input type="radio" id="female" name="gender" value="150"/>
                                                    &nbsp; EVGA B5 550 W 80+ Bronze Certified Fully Modular ATX</label><br />
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* End Table */}
                    </div>
                    {/* end tables */}
                    <div className="col-5 text-white">
                        <h3> Summary</h3>
                        <div className="card">
                            <div className="table-responsive">
                                <table className="table text-uppercase">
                                    <tbody>
                                        <tr className="bottom-border"> 
                                            <td className="table-header-2">CPU</td>
                                            <td className="float-right">
                                                
                                               <span className="badge badge-primary">$75</span>
                                            </td>
                                        </tr>
                                        
                                        <tr className="bottom-border">
                                            <td className="table-header-2">Motherboard</td>
                                            <td className="float-right">
                                               <span className="badge badge-primary">$70</span>
                                            </td>
                                        </tr>
                                        
                                        <tr className="bottom-border">
                                            <td className="table-header-2">Memory</td>
                                            <td className="float-right">
                                                
                                               <span className="badge badge-primary">$50</span>
                                            </td>
                                        </tr>
                                        
                                        <tr className="bottom-border">
                                            <td className="table-header-2">Storage</td>
                                            <td className="float-right">
                                                
                                               <span className="badge badge-primary">$50</span>
                                            </td>
                                        </tr>
                                        
                                        <tr className="bottom-border">
                                            <td className="table-header-2">Video card</td>
                                            <td className="float-right">
                                                
                                               <span className="badge badge-primary">$150</span>
                                            </td>
                                        </tr>
                                        
                                        <tr className="bottom-border">
                                            <td className="table-header-2">Case</td>
                                            <td className="float-right">
                                                
                                               <span className="badge badge-primary">$45</span>
                                            </td>
                                        </tr>
                                        
                                        <tr className="bottom-border">
                                            <td className="table-header-2">Power Supply</td>
                                            <td className="float-right">
                                                
                                               <span className="badge badge-primary">$70</span>
                                            </td>
                                        </tr>
                                        
                                        <tr className="bottom-border">
                                            <th className="table-header-2">Total</th>
                                            <td className="float-right">
                                                
                                               <span className="badge badge-primary">$510</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br />
                        <h3 className="float-left"> Contact us!</h3>
                        <div className="input-group">
                            <input type="text" className="form-control bg-secondary" placeholder="First Name"/>
                        
                            <span className="input-group-addon">&nbsp;</span>
                        
                            <input type="text" className="form-control bg-secondary" placeholder="Last Name"/>
                        </div>
                        
                        <input type="email" className="form-control bg-secondary contact-input" placeholder="Email"/>
                        
                        <div className="form-group">    
                            <button className="btn btn-primary float-left" id="sendMessageButton" type="submit">Send</button>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Rig;