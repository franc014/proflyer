<?php
/**
 * Created by PhpStorm.
 * User: Juan Francisco Andrade
 * Date: 11/20/15
 * Time: 5:05 PM
 */

namespace App\Services\File;


use Illuminate\Support\Facades\Auth;

class Directory
{
    const PREFIX_INDEX = 'prefix';
    const PATH_INDEX = 'path';
    const NEW_FILE_DIMENS_INDEX = 'size';
    const FILE_SIZE_INDEX = 'file_size';

    const BIO_PHOTO_KEY = "bio_photo";
    const LOGO_KEY = "logo";
    const DETAIL_ICON_KEY = "detail_icon";
    const PROJECT_IMAGE_KEY = "project_image";
    const PROJECT_GALLERY_IMAGE_KEY = "project_gallery_image";
    const HOME_IMAGE_KEY = "home_image";
    const DEFAULT_KEY = "default";
    const CLOUD_PATH = "https://s3-sa-east-1.amazonaws.com/profesionalxyz";
    const GRAVATAR_URL = "http://www.gravatar.com/avatar/";


    protected static $testPath = '/test';
    protected static $productionPath = '/production';
    protected static $nameOfLocalEnvironment = 'local';
    protected $user;


    protected static $prefixes = [
        self::DEFAULT_KEY => "def-",
        self::BIO_PHOTO_KEY => "bio-photo-",
        self::LOGO_KEY => "logo-",
        self::DETAIL_ICON_KEY => "detailicon-",
        self::PROJECT_IMAGE_KEY => "projectimage-",
        self::PROJECT_GALLERY_IMAGE_KEY => "projectgallery-",
        self::HOME_IMAGE_KEY => "homeimage-"
    ];
    protected static $upload_paths = [
        self::DEFAULT_KEY => "/images",
        self::BIO_PHOTO_KEY => "/bio/",
        self::LOGO_KEY => "/logos/",
        self::DETAIL_ICON_KEY => "/saleables/details/icons/",
        self::PROJECT_IMAGE_KEY => "/projects/project_image/",
        self::PROJECT_GALLERY_IMAGE_KEY => "/projects/project_gallery_image/",
        self::HOME_IMAGE_KEY => "/home/home_image/"];

    protected static $image_sizes = [
        self::DEFAULT_KEY => ["x" => 100, "y" => 100],
        self::BIO_PHOTO_KEY => ["x" => 100, "y" => 100],
        self::LOGO_KEY => ["x" => 48, "y" => 48],
        self::DETAIL_ICON_KEY => ["x" => 100, "y" => 100],
        self::PROJECT_IMAGE_KEY => ["x" => 400, "y" => 400],
        self::HOME_IMAGE_KEY => ["x" => 1300, "y" => 850]
    ];

    protected static $image_file_sizes = [
        self::DEFAULT_KEY => 100,
        self::BIO_PHOTO_KEY => 100,
        self::LOGO_KEY => 100,
        self::DETAIL_ICON_KEY => 100,
        self::PROJECT_IMAGE_KEY => 100,
        self::HOME_IMAGE_KEY => 100
    ];

    protected static $default_images = [
        "characteristic_default_icon" => "/defaults/characteristic_default_icon3.png",
        "benefit_default_icon" => "/defaults/benefit_default_icon.png",
        "default_gravatar_url" => "/defaults/default_member.png",
        "default_image" => "/defaults/default.png"
    ];


    /**
     * Directory constructor.
     */
    public function __construct()
    {
        $this->user = Auth::user();
    }

    public function isLocalEnvironment()
    {
        return app()->environment() == static::$nameOfLocalEnvironment;
    }

    private function directory()
    {
        $userDirectory = "/" . $this->user->username;
        $directoryEnvironment = ($this->isLocalEnvironment()) ? static::$testPath : static::$productionPath;
        return $userDirectory . $directoryEnvironment;
    }

    /**
     * Return prefix , new file size or path for a file to be stored
     * @param $type
     * @param $item
     * @return mixed|string
     */
    public function segment($type, $item)
    {
        $prefixes = static::$prefixes;
        $paths = static::$upload_paths;
        $image_new_sizes = static::$image_sizes;
        $file_sizes = static::$image_file_sizes;

        switch ($type) {
            case  self::PREFIX_INDEX :
                $segment = $this->value($item, $prefixes);
                break;
            case self::PATH_INDEX :

                $segment = $this->directory() . $this->value($item, $paths);

                break;
            case self::NEW_FILE_DIMENS_INDEX :
                $segment = $this->value($item, $image_new_sizes);
                break;
            case self::FILE_SIZE_INDEX :
                $segment = $this->value($item, $file_sizes);
                break;
        }
        return $segment;

    }


    /** get the value in a prefixes or paths array
     * @param $item
     * @param $container
     * @return mixed
     * @internal param $prefixes
     */
    private function value($item, $container)
    {
        if (array_key_exists($item, $container)) {
            return $container[$item];
        }
        return $container[self::DEFAULT_KEY];
    }

    public function defaultImage(){
        return $this->directory().static::$default_images['default_image'];
    }

    public function defaultGravatarUrl(){
        return self::CLOUD_PATH.static::$default_images['default_gravatar_url'];
    }





}
