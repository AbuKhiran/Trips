using Microsoft.EntityFrameworkCore;

namespace Trips.Models
{
    public class TripsContext:DbContext
    {
        public TripsContext(DbContextOptions<TripsContext> options):base(options)
        {

        }
        public DbSet<Trips> Trip { get; set; }
    }
}