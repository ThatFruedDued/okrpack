window.okrUnPack = function(content, extpack = null){
  function okrToJavascript(string){
    if(string.indexOf('okrpack#') !== -1){
      string = string.split(")#").join(")h");
      var data = string.split("#");
    }
  }
  if(content instanceof Blob){
    var reader = new FileReader();
    reader.onload = function(event) {
      okrToJavascript(event.target.result);
    };
    reader.readAsText(content);
  }
};
