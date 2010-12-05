function addPopUpLink() {
    if(!document.getElementById || !document.createTextNode) {
        return;
    }
    var popupClass='smallpopup';
    var popupMessage= ' (opens in new window)';
    var pop,t;
    var as=document.getElementsByTagName('a');
    for(var i=0;i<as.length;i++) {
        t=as[i].className;
        if(t && t.toString().indexOf(popupClass)!=-1) {
            as[i].appendChild(document.createTextNode(popupMessage));
            as[i].onclick= function() {
                pop=window.open(this.href,'popup','width=400,height=400');
                return false;
            }
        }
    }
}

function createLink(linkTarget,linkName) {
    if (linkTarget == null) {
        linkTarget = '#';
    }
    if (linkName == null) {
        linkName = 'dummy';
    }
    var tempLink=document.createElement('a');
    tempLink.setAttribute('href',linkTarget);
    tempLink.appendChild(document.createTextNode(linkName));
    return tempLink;
}

function appendLink(sourceLink,elementId) {
    var element=false;
    if (elementId==null || !document.getElementById(elementId)) {
        element=document.body;
    }
    if(!element) {
        element=document.getElementById(elementId);
    }
    element.appendChild(sourceLink);
}

function linksInit() {
    if (!document.getElementById || !document.createTextNode) {
        return;
    }
    var openLink=createLink('#','open');
    appendLink(openLink);
    var closeLink=createLink('closed.html','close');
    appendLink(closeLink,'main');
}