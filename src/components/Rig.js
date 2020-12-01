import React, { Component } from 'react';

class Rig extends Component {

    cpuValue = 0;
    motherBoardValue = 0;
    memoryValue = 0;
    storageValue = 0;
    videoCardValue = 0;
    caseValue = 0;
    powerSupplyValue = 0;
    totalValue = 0;

    constructor() {
        super();
        this.state = {
            name: "React",
        };
        this.onCPUChangeValue = this.onCPUChangeValue.bind(this);
        this.onMotherboardChangeValue = this.onMotherboardChangeValue.bind(this);
        this.onMemoryChangeValue = this.onMemoryChangeValue.bind(this);
        this.onStorageChangeValue = this.onStorageChangeValue.bind(this);
        this.onVideoCardChangeValue = this.onVideoCardChangeValue.bind(this);
        this.onCaseChangeValue = this.onCaseChangeValue.bind(this);
        this.onPowerSupplyChangeValue = this.onPowerSupplyChangeValue.bind(this);

    }

    calculateTotal() {
        // console.log("calculate total method called -"+this.totalValue);
        this.totalValue = parseInt(this.cpuValue) + parseInt(this.motherBoardValue) + parseInt(this.memoryValue) + parseInt(this.storageValue) + parseInt(this.videoCardValue) + parseInt(this.caseValue) + parseInt(this.powerSupplyValue);

        // console.log("calculate total method after-"+this.totalValue);
    }


    onCPUChangeValue(event) {
        //storing the value in cpu constatn
        this.cpuValue = event.target.value;
        this.setState({ v1: event.target.value });
        // this calculates the total
        this.calculateTotal()
    }
    //   motherboard
    onMotherboardChangeValue(event) {
        this.motherBoardValue = event.target.value;
        this.setState({ v1: event.target.value });
        // console.log(this.state.v1+" is the v");        
        // this.totalValue = parseInt(this.cpuValue)+ parseInt(this.motherBoardValue);
        this.calculateTotal()

    }
    // memory
    onMemoryChangeValue(event) {
        this.memoryValue = event.target.value;
        this.setState({ v1: event.target.value });
        this.calculateTotal()
    }
    //storage
    onStorageChangeValue(event) {
        this.storageValue = event.target.value;
        this.setState({ v1: event.target.value });
        this.calculateTotal()
    }
    //VideoCard
    onVideoCardChangeValue(event) {
        this.videoCardValue = event.target.value;
        this.setState({ v1: event.target.value });
        this.calculateTotal()
    }
    onCaseChangeValue(event) {
        this.caseValue = event.target.value;
        this.setState({ v1: event.target.value });
        this.calculateTotal()
    }
    onPowerSupplyChangeValue(event) {
        this.powerSupplyValue = event.target.value;
        this.setState({ v1: event.target.value });
        this.calculateTotal()
    }


    render() {
        const cpu = this.cpuValue
        const motherboard = this.motherBoardValue
        const memory = this.memoryValue;
        const storage = this.storageValue;
        const videoCard = this.videoCardValue;
        const theCase = this.caseValue;
        const powerSupply = this.powerSupplyValue;
        const total = this.totalValue;
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
                                            <tr onChange={this.onCPUChangeValue}>
                                                <th className="table-header">CPU</th>
                                                <td className="float-left">
                                                    {/* this will populated from the backend */}
                                                    <label >
                                                        <input type="radio" id="i3_9100f" name="cpu" value="50" />
                                                    &nbsp; Core i3-9100F</label>
                                                    <br />
                                                    <label >
                                                        <input type="radio" id="i5_9400f" name="cpu" value="70" />
                                                    &nbsp; Core i5-9400F</label>
                                                    <br />
                                                    <label >
                                                        <input type="radio" id="i5_10400" name="cpu" value="80" />
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
                                            <tr onChange={this.onMotherboardChangeValue}>
                                                <th className="table-header">Motherboard</th>
                                                <td>
                                                    <span className="float-left">
                                                        <label > <input type="radio" id="option1" name="motherboard" value="100" />
                                                        &nbsp; Gigabyte B365M DS3H Micro ATX LGA1151</label><br />
                                                    </span>
                                                    <span className="float-left">
                                                        <label >
                                                            <input type="radio" id="option2" name="motherboard" value="150" />
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
                                            <tr onChange={this.onMemoryChangeValue}>
                                                <th className="table-header">Memory</th>
                                                <td>
                                                    <span className="float-left">
                                                        <label >
                                                            <input type="radio" id="memory1" name="memory" value="120" />
                                                        &nbsp; Team Elite Plus 16 GB (2 x 8GB) DDR4-2400 CL16</label><br />
                                                    </span>
                                                    <span className="float-left">

                                                        <label >
                                                            <input type="radio" id="memory2" name="memory" value="150" />
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
                                            <tr onChange={this.onStorageChangeValue}>
                                                <th className="table-header">Storage</th>
                                                <td>
                                                    <span className="float-left">
                                                        <label >
                                                            <input type="radio" id="storage1" name="storage" value="100" />
                                                        &nbsp; Team GX1 480 GB 2.5"</label><br />
                                                    </span>
                                                    <span className="float-left">
                                                        <label > <input type="radio" id="storage2" name="storage" value="150" />
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
                                            <tr onChange={this.onVideoCardChangeValue}>
                                                <th className="table-header">Video Card</th>
                                                <td>
                                                    <span className="float-left">
                                                        <label >
                                                            <input type="radio" id="videoCard1" name="videoCard" value="100" />
                                                        &nbsp; XFX Radeon RX 570 4 GB XXX Edition</label><br />
                                                    </span>
                                                    <span className="float-left">
                                                        <label > <input type="radio" id="videoCard2" name="videoCard" value="150" />
                                                        &nbsp; Asus GetForce GTX 1660 SUPER 6 GB DUAL EVO OC </label><br />
                                                    </span>

                                                    <span className="float-left">
                                                        <label >
                                                            <input type="radio" id="videoCard3" name="videoCard" value="150" />
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
                                            <tr onChange={this.onCaseChangeValue}>
                                                <th className="table-header">Case</th>
                                                <td>
                                                    <span className="float-left">
                                                        <label >
                                                            <input type="radio" id="case1" name="case" value="100" />
                                                        &nbsp; Cooler Master MasterBox Q300L MicroATX Mini Tower</label><br />
                                                    </span>
                                                    <span className="float-left">
                                                        <label >
                                                            <input type="radio" id="case2" name="case" value="150" />
                                                        &nbsp; Cougar MX330-G ATX Mid Tower </label><br />
                                                    </span>

                                                    <span className="float-left">
                                                        <label >
                                                            <input type="radio" id="case3" name="case" value="150" />
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
                                            <tr onChange={this.onPowerSupplyChangeValue}>
                                                <th className="table-header">Power Supply</th>
                                                <td>
                                                    <span className="float-left">
                                                        <label >
                                                            <input type="radio" id="powerSupply1" name="powerSupply" value="100" />
                                                            &nbsp; Consair CXM (2015) 450 W 80+ Bronze Certified Semi-modular ATX
                                                        </label><br />
                                                    </span>
                                                    <span className="float-left">
                                                        <label>
                                                            <input type="radio" id="powerSupply2" name="powerSupply" value="150" />
                                                        &nbsp; Antec NeoECO Gold ZEN 500 W 80+ Gold Certified ATX </label><br />
                                                    </span>

                                                    <span className="float-left">
                                                        <label >

                                                            <input type="radio" id="powerSupply3" name="powerSupply" value="150" />
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
                                            {cpu != 0 &&
                                                <tr className="bottom-border" >
                                                    <td className="table-header-2">CPU</td>
                                                    <td className="float-right">
                                                        <span className="badge badge-primary">${cpu}</span>
                                                    </td>
                                                </tr>
                                            }
                                            {motherboard != 0 &&
                                                <tr className="bottom-border">
                                                    <td className="table-header-2">Motherboard</td>
                                                    <td className="float-right">
                                                        <span className="badge badge-primary">${motherboard}</span>
                                                    </td>
                                                </tr>
                                            }

                                            {memory != 0 &&
                                                <tr className="bottom-border">
                                                    <td className="table-header-2">Memory</td>
                                                    <td className="float-right">

                                                        <span className="badge badge-primary">${memory}</span>
                                                    </td>
                                                </tr>
                                            }
                                            {storage != 0 &&
                                                <tr className="bottom-border">
                                                    <td className="table-header-2">Storage</td>
                                                    <td className="float-right">

                                                        <span className="badge badge-primary">${storage}</span>
                                                    </td>
                                                </tr>
                                            }

                                            {videoCard != 0 &&
                                                <tr className="bottom-border">
                                                    <td className="table-header-2">Video card</td>
                                                    <td className="float-right">

                                                        <span className="badge badge-primary">${videoCard}</span>
                                                    </td>
                                                </tr>
                                            }

                                            {theCase != 0 &&
                                                <tr className="bottom-border">
                                                    <td className="table-header-2">Case</td>
                                                    <td className="float-right">

                                                        <span className="badge badge-primary">${theCase}</span>
                                                    </td>
                                                </tr>
                                            }

                                            {powerSupply != 0 && <tr className="bottom-border">
                                                <td className="table-header-2">Power Supply</td>
                                                <td className="float-right">

                                                    <span className="badge badge-primary">${powerSupply}</span>
                                                </td>
                                            </tr>
                                            }
                                            {total != 0 && <tr className="bottom-border">
                                                <th className="table-header-2">Total</th>
                                                <td className="float-right">

                                                    <span className="badge badge-primary">${total}</span>
                                                </td>
                                            </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br />
                            <h3 className="float-left"> Contact us!</h3>
                            <div className="input-group">
                                <input type="text" className="form-control bg-secondary" placeholder="First Name" />

                                <span className="input-group-addon">&nbsp;</span>

                                <input type="text" className="form-control bg-secondary" placeholder="Last Name" />
                            </div>

                            <input type="email" className="form-control bg-secondary contact-input" placeholder="Email" />

                            <div className="form-group">
                                <button className="btn btn-primary float-left" id="sendMessageButton" type="submit">Send</button>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        );
    }

}

export default Rig;