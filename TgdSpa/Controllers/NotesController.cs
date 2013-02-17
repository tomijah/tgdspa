using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TgdSpa.Models;
using Breeze.WebApi;

namespace TgdSpa.Controllers
{
    public class NotesController : ApiController
    {
        private readonly EFContextProvider<NotesDbContext> contextProvider = new EFContextProvider<NotesDbContext>();

        [HttpGet]
        public string Metadata()
        {
            return contextProvider.Metadata();
        }

        [HttpGet]
        public IQueryable<Note> Notes()
        {
            return contextProvider.Context.Notes;
        }
    }
}
