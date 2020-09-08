import React , {Component} from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

export class Trip extends Component
{
    
    constructor(props)
    {
        super(props);
        this.onTripUpdate = this.onTripUpdate.bind(this);
        this.onTripDelete = this.onTripDelete.bind(this);
      
        this.state = {
            Trips:[],
            error:''
        }
    }
    componentDidMount(){
        this.populateTripsData();
    }

    populateTripsData(){
        axios.get("api/Trips/GetTrips").then(result => {
            const response = result.data;
            this.setState({Trips: response,error:''});
        }).catch(error =>{
            this.setState({Trips: [],error:'the trips could not load'});

        });
    }
    onTripUpdate(id)
    {
        const{history} = this.props;
        history.push('/Update/'+id);
    } 

    Delete(id){
        //const {id} = this.props.match.params;
        confirmAlert({
          title: 'Confirm to Delete',
          message: 'Are you sure to Delete Record '+id,
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.onTripDelete(id)
            },
            {
              label: 'No',
              
            }
          ]
        });
      }
     

    
    onTripDelete(id)
    {
        const {history} = this.props;
        axios.delete("api/Trips/DeleteTrip/"+id).then(result => {
            this.populateTripsData();
          
        })
     
    } 
   
    PopulateTrips(trips)
    {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td></td>
                        <td>Name</td>
                        <td>Decriptions</td>
                        <td>Date -Start </td>
                        <td>Date -Completed</td>
                        <td></td>

                    </tr>
                </thead>
                <tbody>
                {
                        trips.map(trip => (
                        <tr key={trip.id}>
                            <td>{trip.id}</td>
                            <td>{trip.name}</td>
                            <td>{trip.description}</td>
                            <td>{new Date(trip.dateStarted).toLocaleDateString()}</td>
                            <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toLocaleDateString() :  '-' }</td>
                            <td> 
                            <div className="from-group">
                                <button onClick ={() => this.onTripUpdate(trip.id)} className="btn btn-success">Update</button>
                                <div class="divider"/>
                                <button onClick ={() => this.Delete(trip.id)} className="btn btn-danger">Delete</button>

                            </div>    
                             </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
    handleClick = () => {
        this.props.history.push("/Create");
    }
    render()
    {
      
        let content = this.PopulateTrips(this.state.Trips);
        return(
            <div>
                <h1>All Trips</h1> 
                <br></br> 
            <div>{this.state.error}</div>            
                <button onClick={this.handleClick} type="button" className="btn btn-primary">New Trip</button>
                <br></br>  
                <br></br>
                {content}
            </div>
        )
    }

}