"use strict"
Tinytest.add("Scrollbar integration",(function(e){var i=document.createElement("div")
i.className="scrollbar-inner",i.value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in."
var l=jQuery(".scrollbar-inner").scrollbar()
console.log(l),e.isNotNull(l,"instantiation OK")}))
