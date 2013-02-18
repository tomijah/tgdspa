namespace TgdSpa.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using System.Data.Entity;

    public class NoteDbInitializer : DropCreateDatabaseIfModelChanges<NotesDbContext>
    {
        protected override void Seed(NotesDbContext context)
        {
            context.Notes.Add(new Note { Content = "Note1", Title = "Title1", CreateDate = DateTime.Now });
            context.Notes.Add(new Note { Content = "Note2", Title = "Title2", CreateDate = DateTime.Now });
            context.Notes.Add(new Note { Content = "Note3", Title = "Title3", CreateDate = DateTime.Now });
            context.Notes.Add(new Note { Content = "Note4", Title = "Title4", CreateDate = DateTime.Now });
            context.Notes.Add(new Note { Content = "Note5", Title = "Title5", CreateDate = DateTime.Now });
        }
    }
}