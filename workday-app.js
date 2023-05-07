var safari = Application("Safari");
safari.includeStandardAdditions = true;

var jsScript = "";

jsScript += "document.getElementById('input-16').value ='Testing';";

safari.doJavaScript(jsScript, { in: safari.windows[0].currentTab });