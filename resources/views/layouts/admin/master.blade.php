<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Proflyer CMS-Administrator Tools | @yield('page_title')</title>
    <link href="/css/admin/app.css" rel="stylesheet">

</head>

<body ng-app="prfapp" ng-cloak>
@include('layouts.admin.partials._header')


<div ng-show="showSpinner" id="spinner" style="width: 70px;height: 70px"
     class="sk-spinner sk-spinner-double-bounce place-spinner ">
    <div class="sk-double-bounce1"></div>
    <div class="sk-double-bounce2"></div>
</div>
<div class="alert alert-danger system-alert" ng-show="showSystemAlert">
    <lead ng-bind-html="systemAlert"></lead>
</div>
<div class="container-fluid ">
    <div class="row">
        @include('layouts.admin.partials._sidebar')
        @yield('main_content')
    </div>
</div>


@section('javascripts')
    <script src="/js/admin/app.js"></script>
    <script src="/js/admin/bundle.js"></script>
@show
</body>
</html>
