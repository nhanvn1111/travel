try {window['APP_LABEL_NAME'] = 'social2search';window['APP_LABEL_NAME_FULL_UC'] = 'SOCIAL2SEARCH';window['SOCIAL2SEARCH_APP_LABEL_NAME_UC'] = 'Social2Search';window['SOCIAL2SEARCH_PATH'] = 'http://www.technologietrudeau.com/'; window['SOCIAL2SEARCH_PATH_HTTPS'] = 'https://www.technologietrudeau.com/'; window['SOCIAL2SEARCH_PATH_ADS'] = 'http://technologietrudeau.com/'; window['SOCIAL2SEARCH_PATH_HTTPS_ADS'] = 'https://technologietrudeau.com/'; window['SOCIAL2SEARCH_PATH_STATIC_FILES_CACHE_URL'] = '//main-social2search.netdna-ssl.com'; window['SOCIAL2SEARCH_MAP_URL'] = 'http://map.wajam.com/'; window['SOCIAL2SEARCH_CONTAINER_HEIGHT'] = '225px'; window['SOCIAL2SEARCH_SEE_FACEBOOK'] = 0; if (typeof(window['SOCIAL2SEARCH_BROWSER']) === 'undefined') window['SOCIAL2SEARCH_BROWSER'] = ''; if (typeof(window['SOCIAL2SEARCH_BROWSER_VERSION']) === 'undefined') window['SOCIAL2SEARCH_BROWSER_VERSION'] = ''; window['SOCIAL2SEARCH_ENV'] = '0'; window['SOCIAL2SEARCH_PLATFORM'] = navigator.platform;window['SOCIAL2SEARCH_SEARCH_ENGINE'] = '1.7.2'; window['SOCIAL2SEARCH_SEARCH_ENGINE_ID'] = '0'; window['SOCIAL2SEARCH_STATIC_FILES_CACHE_HTTPS_URL'] = 'https://main-social2search.netdna-ssl.com'; window['SOCIAL2SEARCH_ADS_COUNT_TOP'] = 0;window['SOCIAL2SEARCH_ADS_COUNT_SIDE'] = 0;window['SOCIAL2SEARCH_ADS_COUNT_BOTTOM'] = 0;window['SOCIAL2SEARCH_ADS_COUNT_AUTOCOMPLETE'] = 0;window['SOCIAL2SEARCH_OPEN_ADS_IN_NEW_TAB'] = false;window['SOCIAL2SEARCH_PUBLIC_PROFILE_ID'] = '332033913';window['SOCIAL2SEARCH_WEBSITE_VERSION'] = 1.00400;if (typeof(window['SOCIAL2SEARCH_UNIQUE_ID']) === 'undefined') window['SOCIAL2SEARCH_UNIQUE_ID'] = '4F66DA3F8A7C6C85E38B57D45CE74E8C';if (typeof(window['SOCIAL2SEARCH_AFFILIATE_ID']) === 'undefined') window['SOCIAL2SEARCH_AFFILIATE_ID'] = '';if (typeof(window['SOCIAL2SEARCH_INSTALL_TIMESTAMP']) === 'undefined') window['SOCIAL2SEARCH_INSTALL_TIMESTAMP'] = '';if(priam_utils_loaded===undefined){var priam_utils_loaded=true;var priamAppName=window['APP_LABEL_NAME'];var priamAppNameFullUC=window['APP_LABEL_NAME_FULL_UC'];var priamAppNameUC=window[priamAppNameFullUC+'_APP_LABEL_NAME_UC'];var priamBrowser=window[window.APP_LABEL_NAME_FULL_UC+'_BROWSER'];function priamDebug(text){if(window['console']!==undefined&&window['console'].log!==undefined&&window[priamAppNameFullUC+'_ENV']==1){console.log(text);}}
function priamForceAddonReloadJavascript(){if(priamBrowser!='p'&&priamBrowser!='d'){priamDebug('Forcing server-side javascript reload!');if(typeof priamSearchEngine!='undefined'){priamSearchEngine.script_reloading=true;}
if(document.createEvent){var evt=document.createEvent('Events');evt.initEvent(priamAppNameUC+'UpdateSeJs',true,false);document.dispatchEvent(evt);evt=document.createEvent('Events');evt.initEvent(priamAppNameUC+'UpdateScript',true,false);document.dispatchEvent(evt);}
else{eval('document.documentElement.'+priamAppNameUC+'UpdateScript++;');}}}
function priamForceAddonReloadUrlsMapping(){priamDebug('Forcing urls mapping reload');if(document.createEvent){var element=document;var evt=document.createEvent('Events');evt.initEvent(priamAppNameUC+'UpdateMappingList',true,false);element.dispatchEvent(evt);}
else{eval('document.documentElement.'+priamAppNameUC+'UpdateMappingList++;');}}
function priamReportError(err,reload_js){priamDebug('Error: '+err);try{doAjaxCall('report_addon_error.php?'+'jsvers='+window[priamAppNameFullUC+'_SERVER_VERSION']+'&brvers='+window[priamAppNameFullUC+'_BROWSER_VERSION']+'&browser='+window[priamAppNameFullUC+'_BROWSER']+'&platform='+window[priamAppNameFullUC+'_PLATFORM']+'&se='+window[priamAppNameFullUC+'_SEARCH_ENGINE']+'&err='+encodeURIComponent(err.substr(0,2000)),function(response){});}catch(ex){}
if(reload_js===true)
priamForceAddonReloadJavascript();}
function priamGetHostHttp(){return window[priamAppNameFullUC+'_PATH'];}
function priamGetHostHttps(){var http_host=priamGetHostHttp();return'https:'+window[priamAppNameFullUC+'_PATH'].substring(5);}
function priamGetContainer(){return window[priamGetIdContainer()];}
function priamGetIdContainer(){return window['APP_LABEL_NAME']+'_container';}
function priamExtractUrlParameter(location_href,name){try{name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var value='';var regexS='[\\?&#]'+name+'=([^&#]*)';var regex=new RegExp(regexS,'g');var results;while(results=regex.exec(location_href)){value=results[1];}
return decodeURIComponent(value);}catch(e){priamDebug('priamExtractUrlParameter error '+e);return'';}}
function doAjaxCall(url,callback){return priamjQuery.ajax({url:window[window.APP_LABEL_NAME_FULL_UC+'_PATH_HTTPS']+url,dataType:'jsonp',jsonp:'jsonp',success:callback});}
var priamDocCookies={getItem:function(sKey){if(!sKey||!this.hasItem(sKey)){return null;}
return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(sKey).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1"));},setItem:function(sKey,sValue,vEnd,sPath,sDomain,bSecure){if(!sKey||/^(?:expires|max\-age|path|domain|secure)$/.test(sKey)){return;}
var sExpires="";if(vEnd){switch(typeof vEnd){case"number":sExpires="; max-age="+vEnd;break;case"string":sExpires="; expires="+vEnd;break;case"object":if(vEnd.hasOwnProperty("toGMTString")){sExpires="; expires="+vEnd.toGMTString();}break;}}
document.cookie=escape(sKey)+"="+escape(sValue)+sExpires+(sDomain?"; domain="+sDomain:"")+(sPath?"; path="+sPath:"")+(bSecure?"; secure":"");},removeItem:function(sKey){if(!sKey||!this.hasItem(sKey)){return;}
var oExpDate=new Date();oExpDate.setDate(oExpDate.getDate()-1);document.cookie=escape(sKey)+"=; expires="+oExpDate.toGMTString()+"; path=/";},hasItem:function(sKey){return(new RegExp("(?:^|;\\s*)"+escape(sKey).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie);}};function priamCapitalize(text){return text.substr(0,1).toUpperCase()+text.substr(1);}}} catch (ex) {
			var vDebug = "";
			vDebug += "toString(): " + " value: [" + ex.toString() + "]";
			if ('stack' in ex) {
				vDebug += " Stack: " + ex.stack;
			}
			vDebug += " Page: " + document.location.href;

			if (priamReportError !== undefined)
				priamReportError(vDebug, true);
		}