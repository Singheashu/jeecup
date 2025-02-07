using jeecup.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace jeecup.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        conn db = new conn();
        public ActionResult Home()
        {
            return View();
        }
        [HttpPost]
        public ActionResult khushi(Jeecup_tbl je)
        {
            

            
            db.SaveChanges();
            Response.Write("<script>alert('send data')</script>");
            return View("Home");

        }
    }
}