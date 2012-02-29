jQuery(document).ready(function(a){
a(".swt-wrapper").tabs();
// CHANGES!!
a(".swt-accordion-wrapper").accordion();
a(".swt-accordion-wrapper-collapsible").accordion({collapsible: true});
// ***
a(".swt-height-fix").each(function(c,f)
{
var d=a(f).css("display");
var b=a(f).css("display","inline-block").height();
a(f).css("display",d).height(b)
}

)});