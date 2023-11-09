(function(){
    var element = document.createElement('a');
    function getURL(e) {
        element.href = e;
        return element.href
    }
    var popupStyle = {
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        border: "1px solid black",
        zIndex: 27577,
        display: "flex",
        flexDirection: "column"
    }
    var popup = document.createElement('div');
    var iframe = document.createElement('iframe')
    iframe.width="100%"
    iframe.height="100%"
    iframe.src = "https://axutebils74.github.io/sr/#" + encodeURIComponent(getURL("."));
    for(i in popupStyle){
        popup.style[i] = popupStyle[i];
    }
    var button = document.createElement('button')
    button.innerHTML = "关闭"
    button.addEventListener('click',function(){
        popup.parentNode.removeChild(popup)
    })
    var bdiv = document.createElement('div');
    bdiv.appendChild(button)
    button.style.width="100%"
    popup.appendChild(bdiv);
    popup.appendChild(iframe);
    document.body.appendChild(popup)
})()
