using System;
using Microsoft.AspNetCore.Mvc;
using Trips.Models;

namespace Trips.Controllers
{ 
     [Route("api/[controller]")]
    public class TripsController:Controller
    {
        public ITrips _tripsServices;

        public TripsController(ITrips tripsServices)
        {
            _tripsServices =tripsServices;
        }
        [HttpGet("[action]")]
        public IActionResult GetTrips()
        {
           
            var allTrips = _tripsServices.Getall();
             return Ok(allTrips);
            
           
            
        }

        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id)
        {
            var trip = _tripsServices.GetbyID(id);
            return Ok(trip);
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody]Trips.Models.Trips trip)
        {
            if(trip != null) 
            {
                _tripsServices.Insert(trip);
            }
            return Ok();
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody]Trips.Models.Trips trip)
        {
            _tripsServices.Update(id, trip);
            return Ok(trip);
        }

        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id)
        {
            _tripsServices.delete(id);
            return Ok();
        }

    }
}