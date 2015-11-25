<?php
/**
 * Created by PhpStorm.
 * User: Juan Francisco Andrade
 * Date: 11/20/15
 * Time: 6:45 PM
 */
/* Biography directory values */
function bio_photo_prefix()
{
    $directory = app('App\Services\File\Directory');
    return $directory->segment($directory::PREFIX_INDEX, $directory::BIO_PHOTO_KEY);
}

function bio_photo_path()
{
    $directory = app('App\Services\File\Directory');

    return $directory->segment($directory::PATH_INDEX, $directory::BIO_PHOTO_KEY);
}

function bio_photo_size()
{
    $directory = app('App\Services\File\Directory');
    return $directory->segment($directory::NEW_FILE_DIMENS_INDEX, $directory::BIO_PHOTO_KEY);
}

function bio_photo_file_size()
{
    $directory = app('App\Services\File\Directory');
    return $directory->segment($directory::FILE_SIZE_INDEX, $directory::BIO_PHOTO_KEY);
}
/*profile directory values*/

function logo_prefix()
{
    $directory = app('App\Services\File\Directory');
    return $directory->segment($directory::PREFIX_INDEX, $directory::LOGO_KEY);
}

function logo_path()
{
    $directory = app('App\Services\File\Directory');

    return $directory->segment($directory::PATH_INDEX, $directory::LOGO_KEY);
}

function logo_size()
{
    $directory = app('App\Services\File\Directory');
    return $directory->segment($directory::NEW_FILE_DIMENS_INDEX, $directory::LOGO_KEY);
}

function logo_file_size()
{
    $directory = app('App\Services\File\Directory');
    return $directory->segment($directory::FILE_SIZE_INDEX, $directory::LOGO_KEY);
}

/* Default paths*/

function default_image()
{
    $directory = app('App\Services\File\Directory');
    return $directory->defaultImage();
}

function cloud_url()
{
    $directory = app('App\Services\File\Directory');
    return $directory::CLOUD_PATH;
}


function gravatar($email)
{
    $directory = app('App\Services\File\Directory');
    $gravatar_url = $directory::GRAVATAR_URL;
    $default_gravatar = $directory->defaultGravatarUrl();
    return $gravatar_url . md5(mb_strtolower($email)) . "?default=" . $default_gravatar . "";
}

