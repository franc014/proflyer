'use strict';

var JQuery = require('jquery/dist/jquery.min');
var angular = require('./../vendor/angular/index.js');
var angular_restmod = require('./../vendor/angular-restmod/dist/angular-restmod-bundle.min.js');
var res_style = require('./../vendor/angular-restmod/dist/styles/ams.min.js');
var stc_messages = require('./config/messages.js');


var ngFabForm = require('./../vendor/ng-fab-form/dist/ng-fab-form.min.js');
var ngMessages = require('./../vendor/angular-messages/angular-messages.min.js');
/*var froala = require('./../vendor/angular-froala/src/angular-froala.js');
var froalasan = require('./../vendor/angular-froala/src/froala-sanitize.js');*/
/*var textAngular = require('./../vendor/textAngular/dist/textAngular-rangy.min.js');
var sanitize = require('./../vendor/textAngular/dist/textAngular-sanitize.min.js');
var rangy = require('./../vendor/textAngular/dist/textAngular.min.js');*/
/*var sanitize = require('./../vendor/textAngular/dist/textAngular-sanitize.min.js');*/
var uploadLibp1 = require('../vendor/angularjs-file-upload/angular-file-upload-shim.min.js');
var uploadLibp2 = require('../vendor/angularjs-file-upload/angular-file-upload.min.js');


var nganimate = require('./../vendor/angular_animate/angular-animate.min.js');

window.rangy = require('rangy/lib/rangy-core');
window.rangy.saveSelection = require('rangy/lib/rangy-selectionsaverestore');

require('textangular/dist/textAngular-sanitize.min');
require('textangular/dist/textAngular.min');
require('textangular/dist/textAngularSetup');
var prfapp = angular.module('prfapp',['restmod','ngFabForm','ngMessages', 'angularFileUpload','ngAnimate','textAngular']);

prfapp.config(['restmodProvider','$httpProvider','ngFabFormProvider',function(restmodProvider, $httpProvider,ngFabFormProvider) {
    restmodProvider.rebase('AMSApi');
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    restmodProvider.rebase('DefaultPacker');

    ngFabFormProvider.extendConfig({
        validationsTemplate : '../../js/admin/angular/templates/customValidationTemplate.html'
        /*,setFormDirtyOnSubmit: true*/
    });

    $httpProvider.interceptors.push(function($q,$rootScope,$timeout) {
        return {
            'request': function(config) {
                $rootScope.showSystemAlert = false;
                $rootScope.showSpinner = true;
                return config;
            },

            'response': function(response) {
                $rootScope.showSpinner = false;
                return response;
            },
            'requestError':function(rejection){
                console.log(rejection);
                return $q.reject(rejection);
            },
            'responseError':function(rejection){

                var status = rejection.status;
                switch (status){
                    case 401:
                        $rootScope.showSpinner = false;
                        $rootScope.showSystemAlert = true;
                        $rootScope.systemAlert = "Ha caducado tu sesión. Debes ingresar nuevamente!";
                        $timeout(function(){
                            location.href = "/auth/logout";
                        },4000);
                        break;
                    case 500:
                        $rootScope.showSpinner = false;
                        $timeout(function(){
                            $rootScope.showSystemAlert = false;
                        },3000);
                        $rootScope.showSystemAlert = true;
                        $rootScope.systemAlert = "Vaya! :( Hubo un problema en la respuesta del servidor. <br>" +
                        "Por favor intenta la acción nuevamente o contacta al Administrador";
                        break;
                    case 404:
                        $rootScope.showSpinner = false;
                        $timeout(function(){
                            $rootScope.showSystemAlert = false;
                        },3000);
                        $rootScope.showSystemAlert = true;
                        $rootScope.systemAlert = "Vaya! :( No se encontró el servicio que requieres. <br>" +
                        "Por favor intenta la acción nuevamente o contacta al Administrador";
                        break;
                    /*case 413:
                        //$rootScope.messageType = 'danger';
                        //$rootScope.fileTooLarge = true;
                        //$rootScope.fileTooLargeMessage = "Está intentando subir un archivo demasiado pesado. El archivo no debe superar los 5MB";
                        alert("Está intentando subir un archivo demasiado pesado. El archivo no debe superar los 5MB");
                        location.reload();
                        break;*/
                    default :
                        $rootScope.showSpinner = false;
                        $timeout(function(){
                            $rootScope.showSystemAlert = false;
                        },3000);
                        $rootScope.showSystemAlert = true;
                        $rootScope.systemAlert = "Se detectó un problema de conexión. <br>" +
                        "Por favor comprueba que estás conectada/o a una red. Si persisten los problemas, <br> por favor contacta al Administrador.";


                }
                return $q.reject(rejection);

            }
        };
    });

}]);

var homeController = require('./admin/angular/controllers/homecontroller');
var bioController = require('./admin/angular/controllers/biocontroller');
var userController = require('./admin/angular/controllers/usercontroller');
var configController = require('./admin/angular/controllers/configcontroller');
var saleableController = require('./admin/angular/controllers/saleablecontroller');
var saleableDetailController = require('./admin/angular/controllers/saleabledetailcontroller');
var saleableBasicController = require('./admin/angular/controllers/basicdetailcontroller');
var saleableAllDetailsController = require('./admin/angular/controllers/saleablealldetailscontroller');
var saleablePriceController = require('./admin/angular/controllers/saleablepricescontroller');
var resumeController = require('./admin/angular/controllers/resumecontroller');
var portfolioController = require('./admin/angular/controllers/portfoliocontroller');

var messageService = require('./admin/angular/services/messageservice');
var userService = require('./admin/angular/services/userservice');
var userContentTypeService = require('./admin/angular/services/usercontenttypeservice');
var profileService = require('./admin/angular/services/profileservice');
var saleableService = require('./admin/angular/services/saleableservice');
var bioService = require('./admin/angular/services/biographyservice');
var thePacker = require('./admin/angular/services/thepacker');
var saleableDetailService = require('./admin/angular/services/saleabledetails');
var saleablePriceService = require('./admin/angular/services/saleableprice');
var newPassword = require('./admin/angular/services/newpasswordservice');
var numberFormat = require('./admin/angular/services/formatfilterservice');
var fileProcessor = require('./admin/angular/services/fileprocessor');
var resumeService = require('./admin/angular/services/resumeservice');
var resumeHelper = require('./admin/angular/services/resumehelper');
var categoryHelper = require('./admin/angular/services/categoryhelper');
var experienceService = require('./admin/angular/services/experience');
var helpersService = require('./admin/angular/services/helpers');
var educationService = require('./admin/angular/services/education');
var skillService = require('./admin/angular/services/skill');
var languageService = require('./admin/angular/services/language');
var interestService = require('./admin/angular/services/interest');
var categoryService = require('./admin/angular/services/category');
var projectService = require('./admin/angular/services/project');
var galleryService = require('./admin/angular/services/gallery');
var homeCalloutService = require('./admin/angular/services/homecallout');

var alertDirective = require('./admin/angular/directives/global/alertdirective');
var closeContentDirective = require('./admin/angular/directives/global/closecontentdirective');
var contentSelectorDirective = require('./admin/angular/directives/global/contentselector');
var prodileMenuDirective = require('./admin/angular/directives/profile/profilemenu');
var configMenuDirective = require('./admin/angular/directives/global/configmenu');
var categoryDirective = require('./admin/angular/directives/configuration/category');
var projectListDirective = require('./admin/angular/directives/portfolio/projectlist');
var projectWizardDirective = require('./admin/angular/directives/portfolio/projectwizard');
var projectDirective = require('./admin/angular/directives/portfolio/project');
var projectGalleryDirective = require('./admin/angular/directives/portfolio/projectgallery');
var homePageDirective = require('./admin/angular/directives/homepage/homecalls');

var resumeSelectorDirective = require('./admin/angular/directives/resume/resumeselector');
var resumeDirective = require('./admin/angular/directives/resume/resumedirective');
var resumeEditForm = require('./admin/angular/directives/resume/resumeeditform');
var resumeForm = require('./admin/angular/directives/resume/resumeform');
var resumeExperience = require('./admin/angular/directives/resume/experience');
var resumeSections = require('./admin/angular/directives/resume/sections');
var resumeEducation = require('./admin/angular/directives/resume/education');
var resumeSkill = require('./admin/angular/directives/resume/skill');
var resumeLanguage = require('./admin/angular/directives/resume/language');
var resumeInterest = require('./admin/angular/directives/resume/interest');
var resumeList = require('./admin/angular/directives/resume/resumelist');

var bioDirective = require('./admin/angular/directives/biographies/biography');


var saleableDetails = require('./admin/angular/directives/saleables/saleabledetails');
var saleableBasic = require('./admin/angular/directives/saleables/saleablebasic');
var saleableDetailsList = require('./admin/angular/directives/saleables/saleabledetailslist');
var saleablePricesList = require('./admin/angular/directives/saleables/saleablepriceslist');



prfapp.factory('Messages',[stc_messages]);
prfapp.factory('MessageService',['Messages','$timeout',messageService]);
prfapp.factory('UserService',['restmod',userService]);
prfapp.factory('ProfileService',['restmod',profileService]);
prfapp.factory('SaleableService',['restmod',saleableService]);
prfapp.factory('SaleableDetailsService',['restmod',saleableDetailService]);
prfapp.factory('SaleablePriceService',['restmod',saleablePriceService]);
prfapp.factory('UserContentType',['restmod',userContentTypeService]);
prfapp.factory('BiographyService',['restmod',bioService]);
prfapp.factory('ThePacker',[thePacker]);
prfapp.factory('NewPassword',['$http',newPassword]);
prfapp.factory('NumberFormatFilter',[numberFormat]);
prfapp.factory('FileProcessor',['$upload','$http','MessageService','$timeout',fileProcessor]);
prfapp.factory('Resume',['restmod',resumeService]);
prfapp.factory('Experience',['restmod',experienceService]);
prfapp.factory('ResumeHelper',['$http','MessageService',resumeHelper]);
prfapp.factory('CategoryHelper',['$http',categoryHelper]);
prfapp.factory('Helper',[helpersService]);
prfapp.factory('Education',['restmod',educationService]);
prfapp.factory('Skill',['restmod',skillService]);
prfapp.factory('Language',['restmod',languageService]);
prfapp.factory('Interest',['restmod',interestService]);
prfapp.factory('Category',['restmod',categoryService]);
prfapp.factory('Project',['restmod',projectService]);
prfapp.factory('Gallery',['restmod',galleryService]);
prfapp.factory('Homecallout',['restmod',homeCalloutService]);

prfapp.directive('alert',[alertDirective]);
prfapp.directive('closeContent',[closeContentDirective]);
prfapp.directive('contentSelector',['MessageService','UserContentType',contentSelectorDirective]);
prfapp.directive('profileMenu',[prodileMenuDirective]);
prfapp.directive('configMenu',[configMenuDirective]);
prfapp.directive('saleableDetails',['$templateCache','$compile','$rootScope',saleableDetails]);
prfapp.directive('saleableBasic',['SaleableService',saleableBasic]);
prfapp.directive('saleableDetailsList',[saleableDetailsList]);
prfapp.directive('saleablePricesList',[saleablePricesList]);

prfapp.directive('resumeSelector',['MessageService',resumeSelectorDirective]);
prfapp.directive('resume',['MessageService','Resume','$timeout','ResumeHelper',resumeDirective]);
prfapp.directive('resumeEditForm',['MessageService','Resume','ResumeHelper','$timeout',resumeEditForm]);
prfapp.directive('resumeForm',['MessageService','Resume','ResumeHelper','$timeout',resumeForm]);
prfapp.directive('resumeExperience',['MessageService','Experience','$timeout','Helper',resumeExperience]);
prfapp.directive('resumeSections',['Resume',resumeSections]);
prfapp.directive('resumeEducation',['MessageService','Education','$timeout','Helper',resumeEducation]);
prfapp.directive('resumeSkill',['MessageService','Skill','$timeout','Helper',resumeSkill]);
prfapp.directive('resumeLanguage',['MessageService','Language','$timeout','Helper',resumeLanguage]);
prfapp.directive('resumeInterest',['MessageService','Interest','$timeout','Helper',resumeInterest]);
prfapp.directive('biography',['MessageService','BiographyService','$timeout','Helper','$http',bioDirective]);
prfapp.directive('resumeList',['MessageService','Resume','$timeout','Helper',resumeList]);
prfapp.directive('categoryManager',['MessageService','Category','$timeout','Helper',categoryDirective]);
prfapp.directive('projectList',['MessageService','Project','$timeout','Helper',projectListDirective]);
prfapp.directive('projectWizard',['MessageService','Project','$timeout','Helper',projectWizardDirective]);
prfapp.directive('project',['MessageService','Project','$timeout','CategoryHelper','FileProcessor','Helper',projectDirective]);
prfapp.directive('projectGallery',['MessageService','Project','$timeout','FileProcessor','Gallery',projectGalleryDirective]);
prfapp.directive('homePage',['MessageService','Homecallout','$timeout','Helper','FileProcessor','$http',homePageDirective]);

prfapp.controller('HomeCtrl',['$scope','UserService','UserContentType',homeController]);
prfapp.controller('BioCtrl',['$scope','BiographyService','MessageService',bioController]);
prfapp.controller('UserCtrl',['$scope','$timeout','UserService','ProfileService','MessageService','NewPassword',userController]);
prfapp.controller('ConfigCtrl',['$scope','$timeout','MessageService','UserContentType',configController]);

prfapp.controller('SaleableCtrl',['$scope','$rootScope','$timeout','SaleableService','MessageService','SaleableDetailsService',saleableController]);
prfapp.controller('SaleableDetailCtrl',['$scope','$rootScope','SaleableService','MessageService','$element','$compile',saleableDetailController]);
prfapp.controller('saleableBasicCtrl',['$scope','$rootScope','SaleableService','MessageService','CategoryHelper',saleableBasicController]);
prfapp.controller('saleableAllDetailsCtrl',['$scope','$rootScope','SaleableDetailsService','MessageService','FileProcessor',saleableAllDetailsController]);
prfapp.controller('saleablePriceCtrl',['$scope','$rootScope','SaleablePriceService','MessageService',saleablePriceController]);
prfapp.controller('resumeCtrl',['$scope','$rootScope','ResumeHelper','MessageService',resumeController]);
prfapp.controller('PortfolioCtrl',['$scope','$rootScope',portfolioController]);