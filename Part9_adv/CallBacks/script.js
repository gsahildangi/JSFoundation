// CallBacks

function loadScript(src, callback ,x) {
    var script = document.createElement('script');
    script.src = src;
     script.onload = function () {
        console.log("Script Loaded " + src);
        callback(x);
     }
    document.body.appendChild(script)  
    
}

function helloFun(name) {
    alert("HelloFun called by :" + name)
}

function byeFun() {
    alert("ByeFun called...")
}

loadScript("#Some script added",helloFun ,"Sahil");