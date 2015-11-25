@extends('layouts.admin.master')
@section('page_title')
    Biografía
@stop
@section('main_content')
    <div class="col-sm-10 col-sm-offset-2 col-lg-10 col-lg-offset-2 " >

        <div class="row" >
            <div class="col-md-8 col-lg-8" >
                @include('admin.biography.partials._body')
            </div>
            <div class="col-md-4 col-lg-4">
                <div content-selector class="content-selector"></div>
            </div>

        </div>





    </div>	<!--/.main-->

@stop
@section('javascripts')
    @parent
    <script >var imageLoadPath = "/biography/uploadedphoto";</script>
    <script type="text/javascript" src="/js/admin/fileUploads.js"></script>
@stop
