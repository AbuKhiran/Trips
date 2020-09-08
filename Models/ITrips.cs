using System.Collections.Generic;

namespace Trips.Models
{
    public interface ITrips
    {
        List<Trips>Getall();
        Trips GetbyID(int Id);

        void Insert(Trips trip);
        void Update(int id , Trips trip);

        void delete(int id);
    }
    
}