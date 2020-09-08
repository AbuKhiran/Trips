using System.Collections.Generic;
using System.Linq;

namespace Trips.Models
{
    public class TripServices : ITrips
    {
        public TripsContext _tripsContext;

        public TripServices(TripsContext tripsContext)
        {
            _tripsContext = tripsContext;
        }
        public void delete(int id)
        {
            var e = _tripsContext.Trip.FirstOrDefault(m=>m.Id == id);
            if (e!= null){
                _tripsContext.Trip.Remove(e);
                 _tripsContext.SaveChanges();

            }
        }

        public List<Trips> Getall()
        {
        return(_tripsContext.Trip.ToList());
        }

        public Trips GetbyID(int Id)
        {
            return (_tripsContext.Trip.FirstOrDefault(m=> m.Id == Id));
        }

        public void Insert(Trips trip)
        {
            if(trip!=null){
                _tripsContext.Trip.Add(trip);
                _tripsContext.SaveChanges();
            }
        }

        public void Update(int id, Trips trip)
        {
            var e = _tripsContext.Trip.FirstOrDefault(m=>m.Id == id);
            if(e!=null){
                 e.Name =trip.Name;
                 e.Description =trip.Description;
                 e.DateStarted =trip.DateStarted;
                 e.DateCompleted =trip.DateCompleted; 
                 _tripsContext.SaveChanges();
                

            }

        }
    }
}