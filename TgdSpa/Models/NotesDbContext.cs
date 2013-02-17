using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace TgdSpa.Models
{
    public class NotesDbContext : DbContext
    {
        public NotesDbContext()
            : base("name=app")
        {
        }

        public DbSet<Note> Notes { get; set; }

    }
}