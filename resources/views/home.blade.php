@extends('layouts.landing.master')

@section('main_content')
    <div class="intro">
        <h2>CMS Para profesionales</h2>

        <p>Promueve tus negocios o tu imagen profesional fácilmente con una aplicación especialmente diseñada para
            ésto!</p>

    </div>


    <div class="footer">

        <p>Copyright 2016 <strong><a href="http://jandrade.co">Juan Francisco Andrade</a></strong>. Todos los
            derechos reservados.

        <div class="get-it-buttons">
            <a href="/auth/login" class="buy-it-button" style="width: 300px;background-color: tomato">Login</a>
        </div>
        <div class="get-it-buttons">
            <a href="http://jandrade.co/contacto" class="free-trial-button" style="width: 300px">Solicitar pre
                registro</a>
        </div>
    </div>
@endsection
