using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace TgdSpa.Models
{
    public class Note
    {
        public Note()
        {
            CreateDate = DateTime.Now;
        }

        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public DateTime CreateDate { get; set; }
    }
}