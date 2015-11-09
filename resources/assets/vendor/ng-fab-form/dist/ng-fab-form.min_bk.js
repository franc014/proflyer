angular.module("ngFabForm",["ngMessages"]),angular.module("ngFabForm").directive("form",["$compile","$timeout","ngFabForm",function(a,b,c){"use strict";function d(a){a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation()}function e(a){for(var b,c,d=arguments,e=d.length;e>1&&a.length;)for(b=d[--e];-1!==(c=a.indexOf(b));)a.splice(c,1);return a}function f(){var a=(new Date).getTime();return"xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=(a+16*Math.random())%16|0;return a=Math.floor(a/16),("x"==b?c:3&c|8).toString(16)})}function g(a,b){var c;b.name?j.indexOf(b.name)>-1&&(c=b.name+"_"+f(),console.warn('ngFabForm: duplicate form name "'+b.name+'", setting name to: '+c)):(c="ngFabForm_"+f(),console.warn("ngFabForm: all forms should have a unique name set, setting name to: "+c)),c&&(a.attr("name",c),b.name=c),j.push(b.name)}function h(a,b){if(b.disableForm){a.contents().wrap("<fieldset>");var c=a.children();b.$observe("disableForm",function(){"true"===b.disableForm||b.disableForm===!0?c.attr("disabled",!0):c.attr("disabled",!1)})}}function i(a,b,d,e){var f=a[0].querySelector(".ng-invalid");f&&b.$invalid&&c.scrollTo(f,parseInt(d),e)}var j=[];return{restrict:"E",scope:!1,require:"form",compile:function(a,f){var k,l=c.config;return g(a,f),!f.novalidate&&l.setNovalidate&&(a.attr("novalidate",!0),f.novalidate=!0),{pre:function(a,c,e,f){c.bind("submit",function(e){l.setFormDirtyOnSubmit&&a.$apply(function(){f.$triedSubmit=!0}),l.preventInvalidSubmit&&!f.$valid?d(e):l.preventDoubleSubmit&&(f.$preventDoubleSubmit&&d(e),k&&b.cancel(k),f.$preventDoubleSubmit=!0,k=b(function(){f.$preventDoubleSubmit=!1},l.preventDoubleSubmitTimeoutLength)),l.scrollToAndFocusFirstErrorOnSubmit&&i(c,f,l.scrollAnimationTime,l.scrollOffset)})},post:function(a,c,d,f){f.$triedSubmit=!1,f.$preventDoubleSubmit=!1,f.ngFabFormConfig=l,l.disabledForms&&h(c,d),d.ngFabFormOptions&&a.$watch(d.ngFabFormOptions,function(b){if(b){var c=angular.copy(l);l=f.ngFabFormConfig=angular.extend(l,b),a.$broadcast("NG_FAB_FORM_OPTIONS_CHANGED_FOR_"+f.$name,l,c)}},!0),a.$on("$destroy",function(){k&&b.cancel(k),e(j,f.$name)})}}}}}]),angular.module("ngFabForm").directive("input",["ngFabFormValidationsDirective",function(a){"use strict";return a}]),angular.module("ngFabForm").directive("textarea",["$compile","ngFabFormValidationsDirective",function(a,b){"use strict";return b}]),angular.module("ngFabForm").directive("select",["ngFabFormValidationsDirective",function(a){"use strict";return a}]),angular.module("ngFabForm").provider("ngFabForm",function(){"use strict";function a(a,c){var d=angular.element(angular.element("<div/>").html(a));return angular.forEach(c,function(a,c){var e=new RegExp(b.validationMsgPrefix);if(c.match(e)){var f=c.replace(b.validationMsgPrefix,"");f=f.charAt(0).toLowerCase()+f.slice(1);var g=d[0].querySelector('[ng-message="'+f+'"]');angular.element(g).text(a)}}),d}var b={validationsTemplate:"default-validation-msgs.html",preventInvalidSubmit:!0,preventDoubleSubmit:!0,preventDoubleSubmitTimeoutLength:1e3,setFormDirtyOnSubmit:!0,scrollToAndFocusFirstErrorOnSubmit:!0,scrollAnimationTime:500,scrollOffset:-100,disabledForms:!0,setNovalidate:!0,setNamesByNgModel:!0,setAsteriskForRequiredLabel:!1,asteriskStr:"*",validationMsgPrefix:"validationMsg"},c=function(a,b,c){"checkbox"===c.type||"radio"===c.type?b.parent().after(a):b.after(a)},d=function(){function a(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}function b(a,b){var c=500,d=Math.abs(a),e=b/10;return b*d/c+e}return function(c,d,e){function f(){l+=m;var b=a(l,j,k,i);window.scrollTo(h,b),i>l?setTimeout(f,m):c.focus()}var g=c.getBoundingClientRect().top+parseInt(e),h=c.getBoundingClientRect().left,i=b(g,d),j=window.pageYOffset,k=g,l=0,m=20;return 0===k?void c.focus():void f()}}();return{extendConfig:function(a){b=angular.extend(b,a)},setInsertErrorTplFn:function(a){c=a},setScrollToFn:function(a){d=a},$get:function(){return{insertErrorTpl:c,addCustomValidations:a,scrollTo:d,config:b}}}}),angular.module("ngFabForm").run(["$templateCache",function(a){"use strict";a.put("default-validation-msgs.html",'<div ng-messages="field.$error"\n     class="validation">\n    <ul class="list-unstyled validation-errors"\n        ng-show="field.$invalid && (field.$touched || field.$dirty || form.$triedSubmit)">\n        <li ng-message="required">This field is required</li>\n        <li ng-message="password">This is not a valid password</li>\n        <li ng-message="email"> This is not a valid email-address</li>\n        <li ng-message="pattern">Your input does not match the requirements</li>\n        <li ng-message="date">This is not a valid date</li>\n        <li ng-message="time">This is not a valid time</li>\n        <li ng-message="datetime"> This is no valid datetime</li>\n        <li ng-message="datetime-local">This is no valid local datetime</li>\n        <li ng-message="number">This is no valid number</li>\n        <li ng-message="color">This no valid color</li>\n        <li ng-message="range">This is not a valid range</li>\n        <li ng-message="month">This is not a valid month</li>\n        <li ng-message="url">This is not a valid url</li>\n        <li ng-message="file">This not a valid file</li>\n\n        <li ng-message="minlength">Your field should have at least {{ attrs.minlength }} characters</li>\n        <li ng-message="maxlength">Your field should have max {{ attrs.maxlength }} characters</li>\n\n        <li ng-if="attrs.type == \'time\' "\n            ng-message="min">The time provided should be no earlier than {{ attrs.min |date: \'HH:MM\' }}\n        </li>\n        <li ng-message="max"\n            ng-if="attrs.type == \'time\' ">The time should be no later than {{attrs.max |date: \'HH:MM\'}}\n        </li>\n        <li ng-message="min"\n            ng-if="attrs.type == \'date\' ">The date provided should be no earlier than then {{attrs.max\n            |date:\'dd.MM.yy\'}}\n        </li>\n        <li ng-message="max"\n            ng-if="attrs.type == \'date\' ">The time should be no later than {{attrs.max |date: \'dd.MM.yy\'}}\n        </li>\n    </ul>\n    <div class="validation-success"\n         ng-show="field.$valid && !field.$invalid">\n    </div>\n</div>\n')}]),angular.module("ngFabForm").directive("ngFabVal",function(){"use strict";return{restrict:"E",scope:{},templateUrl:"ng-fab-val-d.html",link:function(){}}}),angular.module("ngFabForm").factory("ngFabFormValidationsDirective",["ngFabForm","$compile","$templateRequest","$rootScope","$timeout",function(a,b,c,d,e){"use strict";function f(e){var f=(e.scope,e.el),g=e.cfg,h=e.formCtrl,i=e.ngModelCtrl,j=e.attrs;e.currentValidationVars.tpl&&0!==Object.keys(e.currentValidationVars.tpl).length&&angular.element(e.currentValidationVars.tpl).remove(),c(g.validationsTemplate).then(function(c){c=a.addCustomValidations(c,j);var g=d.$new(!0);g.attrs=j,g.form=h,g.field=i;var k=b(c.children())(g);e.currentValidationVars.tpl=k[0],a.insertErrorTpl(k[0],f,j)})}function g(a,b,c){var d=document.querySelectorAll('label[for="'+b.name+'"]');if(!d||d.length<1){var e=a[0].previousElementSibling;e&&"LABEL"===e.tagName&&(d=[e])}if(d&&d.length>0&&"radio"!==b.type&&"checkbox"!==b.type)for(var f=0;f<d.length;f++){var g=d[f];g.innerText.slice(-c.asteriskStr.length)!==c.asteriskStr&&(g.innerText=g.innerText+c.asteriskStr)}}return{restrict:"E",require:["?^form","?ngModel"],compile:function(b,c){return!c.type||"submit"!==c.type.toLowerCase()&&"button"!==c.type.toLowerCase()?(a.config.setNamesByNgModel&&c.ngModel&&!c.name&&(b.attr("name",c.ngModel),c.name=c.ngModel),function(a,b,c,d){function h(d){!k||!i.validationsTemplate||0===Object.keys(k.$validators).length&&0===Object.keys(k.$asyncValidators).length||d&&i.validationsTemplate===d.validationsTemplate?!i.validationsTemplate&&l.tpl&&0!==Object.keys(l.tpl).length&&angular.element(l.tpl).remove():f({scope:a,el:b,cfg:i,formCtrl:j,ngModelCtrl:k,attrs:c,currentValidationVars:l}),!i.setAsteriskForRequiredLabel||c.required!==!0||d&&i.setAsteriskForRequiredLabel===d.setAsteriskForRequiredLabel&&i.asteriskStr===d.asteriskStr||g(b,c,i)}var i,j=d[0],k=d[1],l={tpl:void 0};e(function(){j&&(i||(i=j.ngFabFormConfig),h(),a.$on("NG_FAB_FORM_OPTIONS_CHANGED_FOR_"+j.$name,function(a,b,c){i=b,h(c)}))},0)}):void 0}}}]);