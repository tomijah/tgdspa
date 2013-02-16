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
                .Include("~/Scripts/knockout-{version}.debug.js")
                .Include("~/Scripts/sammy-{version}.js")
                .Include("~/scripts/q.js")
                .Include("~/scripts/breeze.debug.js")
              );

            bundles.Add(
              new StyleBundle("~/content/css")
                .Include("~/Content/css/modern.css")
                .Include("~/Content/css/app.css")
              );
        }
    }
}