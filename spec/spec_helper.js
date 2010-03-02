if(!this.jasmine){
  document.write("<script type='text/javascript' src='" + jazz_root + "/lib/jazz/jasmine/jasmine.js'></script>");
  document.write("<script type='text/javascript' src='" + jazz_root + "/lib/jazz/jasmine/TrivialReporter.js'></script>");
  if(this.Envjs){
    document.write("<script type='text/javascript' src='" + jazz_root + "/lib/jazz/jasmine/EnvjsReporter.js'></script>");
  }
  (function(){
    var headID = document.getElementsByTagName("head")[0];         
    var cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.href = jazz_root + "/vendor/jasmine/lib/jasmine.css";
    cssNode.media = 'screen';
    headID.appendChild(cssNode);
  })();
};
document.write("<script type='text/javascript' src='" + jazz_root + "/vendor/jquery/dist/jquery.js'></script>");
document.write("<script type='text/javascript' src='" + jazz_root + "/spec/spec_runner.js'></script>");
