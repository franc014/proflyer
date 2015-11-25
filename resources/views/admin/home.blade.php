@extends('layouts.admin.master')
@section('page_title')
    Home
@stop
@section('main_content')
    <div class="col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2" ng-controller="HomeCtrl">


        <div class="row">
            <div class="col-md-8 col-md-8">
                @include('admin.partials._body')
            </div>
            <div class="col-md-4 col-md-4 widgets-container">
                <div content-selector class="content-selector"></div>

            </div>
        </div>

        <!--/.row-->


    </div>    <!--/.main-->

@stop