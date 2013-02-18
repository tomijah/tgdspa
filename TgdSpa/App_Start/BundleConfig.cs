using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace TgdSpa
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();

            bundles.Add(
              new ScriptBundle("~/scripts/lib")
                .Include("~/Scripts/jquery-{version}.js")
                .Include("~/Scripts/jquery.ba-bbq.js")
                .Include("~/Scripts/knockout-{version}.debug.js")
                .Include("~/Scripts/knockout.validation.debug.js")
                .Include("~/Scripts/knockout.command.js")
                .Include("~/Scripts/knockout.activity.js")
                .Include("~/scripts/q.js")
                .Include("~/scripts/breeze.debug.js")
              );

            bundles.Add(new ScriptBundle("~/scripts/app").IncludeDirectory("~/Scripts/app", "*.js", false));

            bundles.Add(
              new StyleBundle("~/content/styles")
                .Include("~/Content/css/modern.css")
                .Include("~/Content/css/app.css")
              );
        }
    }
}