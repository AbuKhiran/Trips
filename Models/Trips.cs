using System;
using System.ComponentModel.DataAnnotations;

namespace Trips.Models
{
    public class Trips{
        
        [Display(Name = "Trip ID")]
         public int Id { get; set; }
       [Display(Name = "Trip Name")]
        public string Name { get; set; }
                [Display(Name = "Trip Description")]

        public string Description { get; set; }  
                [Display(Name = "Trip Start")]
  
       public DateTime DateStarted { get; set; }
               [Display(Name = "Trip Completed")]

       public DateTime? DateCompleted { get; set; }
       
    }
}