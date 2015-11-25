<?php
/**
 * Created by PhpStorm.
 * User: Juan Francisco Andrade
 * Date: 2/14/15
 * Time: 4:59 PM
 */

namespace App\Services\File;


use Intervention\Image\Facades\Image;



class ImageResizer  implements FileTransformation {


    /**
     * @var
     */
    private $xSize;
    /**
     * @var
     */
    private $ySize;

    /**
     * @param $xSize
     * @param $ySize
     */
    function __construct($xSize, $ySize)
    {

        $this->xSize = $xSize;
        $this->ySize = $ySize;
    }

    /**
     * @param TransformableFile $transformableFile
     * @return mixed image resized
     */
    function transform(TransformableFile $transformableFile)
    {
        $resource = $transformableFile->file();
        $xSize = $this->xSize;
        $ySize = $this->ySize;
        //TODO implement try catch block for image transformation
        $transformedImage = Image::make($resource->getRealPath())->resize($xSize,$ySize)->encode('png');
        $newTransformable =  new ImageTransformed($transformedImage);
        return $newTransformable;//$newTransformable->file();

    }


}