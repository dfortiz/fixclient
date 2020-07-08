import  React, { Component } from  'react';
import  QuoteRequest  from  './QuoteRequest';

const  quoteRequest  =  new  QuoteRequest();



class  QuoteForm  extends  Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSendOrder(){
        quoteRequest.createCustomer(
            {
            "asset_type":  this.refs.assetType.value,
            "trading_pair1":  this.refs.tradingPair1.value,
            "trading_pair2":  this.refs.tradingPair2.value,
            "live_chart":  this.refs.liveChart.value,
            "config_file":  this.refs.configFile.value
            }).then((result)=>{
                    alert("FIX Quote Order Sending...");
            }).catch(()=>{
                    alert('There was an error! Please re-check your form.');
            });
    }

    handleUpdate(pk){
        quoteRequest.updateCustomer(
            {
            "pk":  pk,
            "first_name":  this.refs.firstName.value,
            "last_name":  this.refs.lastName.value,
            "email":  this.refs.email.value,
            "phone":  this.refs.phone.value,
            "address":  this.refs.address.value,
            "fixserver": this.refs.fixserver.value,
            "description":  this.refs.description.value
            }
            ).then((result)=>{

                alert("Customer updated!");
            }).catch(()=>{
                alert('There was an error! Please re-check your form.');
            });
    }

    handleSubmit(event) {
        const { match: { params } } =  this.props;
        if(params  &&  params.pk){
            this.handleSendOrder(params.pk);
        }
        else
        {
            this.handleCreate();
        }
        event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Asset Type: </label>
              <select ref="assetType">
                <option value="forex">forex</option>
              </select>

            <br/>
            <div className="input-group">
              <label>
                Trading Pairs: </label>
                <input className="form-control" type="text" ref='tradingPair1'/>
                <span class="input-group-addon">/</span>
                <input className="form-control" type="text" ref='tradingPair2'/>
            </div>


            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="liveChart" ref="liveChart" />
              <label className="custom-control-label" for="liveChart">Live Chart</label>
            </div>

            <label>
              Select config file: </label>
              <select ref="configFile">
                <option value="forex">twoSess_tier1.cfg</option>
              </select>
            <br/>

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
    }

}
export default QuoteForm;
