using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CreditCardCRUD.Models
{
    public class PaymenDetailContext:DbContext
    {
        public PaymenDetailContext(DbContextOptions<PaymenDetailContext> options):base(options)
        {

        }
        public DbSet<PaymentDetail>  PaymentDetails { get; set; }
    }
}
