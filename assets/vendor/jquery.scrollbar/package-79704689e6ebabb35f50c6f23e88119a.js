"use strict"
var packageName="gromo:jquery.scrollbar",where="client"
Package.describe({name:packageName,version:"0.2.11",summary:"Cross-browser CSS customizable scrollbar with advanced features.",git:"git@github.com:gromo/jquery.scrollbar.git"}),Package.onUse((function(e){e.versionsFrom(["METEOR@0.9.0","METEOR@1.0"]),e.use("jquery",where),e.addFiles(["jquery.scrollbar.js","jquery.scrollbar-564b61712f1463164cfa38a51e9bb02f.css"],where)})),Package.onTest((function(e){e.use([packageName,"sanjo:jasmine"],where),e.use(["webapp","tinytest"],where),e.addFiles("meteor/tests-cc8200a11203c5c7d2cbfbdeba95c58f.js",where)}))