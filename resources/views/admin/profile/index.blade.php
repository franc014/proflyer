@extends('layouts.admin.master')
@section('page_title')
    Perfil
@stop
@section('main_content')
    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" ng-controller="UserCtrl">


        <div class="row" >
            <div class="col-md-8 col-lg-8" >
                @include('admin.profile.partials._body')
            </div>
            <div class="col-md-4 col-lg-4">
                <div profile-menu></div>
                <div content-selector></div>
            </div>

        </div>

        <!--/.row-->

        <div class="row" >
            <div class="col-lg-12">

            </div>
        </div>

    </div>	<!--/.main-->

@stop
@section('javascripts')
    @parent
    <script >var imageLoadPath = "/profile/uploadedlogo";</script>
    <script type="text/javascript" src="/js/admin/fileUploads.js"></script>

@stop
