namespace TgdSpa.Models
{
    using System.Data.Entity;

    public class NotesDbContext : DbContext
    {
        static NotesDbContext()
        {
            Database.SetInitializer(new NoteDbInitializer());
        }

        public NotesDbContext()
            : base("name=app")
        {
        }

        public DbSet<Note> Notes { get; set; }
    }
}