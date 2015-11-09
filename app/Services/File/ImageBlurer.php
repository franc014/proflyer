<?php
/**
 * Created by PhpStorm.
 * User: Juan Francisco Andrade
 * Date: 2/16/15
 * Time: 12:26 PM
 */

namespace App\Services\File;


use Intervention\Image\Facades\Image;

class ImageBlurer implements FileTransformation{


    /**
     * @var
     */
    private $porcentage;

    function __construct($porcentage)
    {
        $this->porcentage = $porcentage;
    }

    function transform(TransformableFile $transformableFile)
    {
        $resource = $transformableFile->file();
        $porc = $this->porcentage;
        //try, catch
        $transformedImage = Image::make($resource)->blur($porc)->encode('png');
        $newTransformed = new ImageTransformed($transformedImage);
        return $newTransformed;//$newTransformed->file();
    }
}