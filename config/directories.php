<?php

$env_prefix = ($app->environment()=='local') ? '/test':'/production';
return [
    "cloudfullpath"=>"https://s3-sa-east-1.amazonaws.com/profesionalxyz",
    "user_photos"=>"https://s3-sa-east-1.amazonaws.com/profesionalxyz",

    "prefix"=>[
        "photo_bio"=>"phBio-",
        "logo"=>"logo-",
        "detail_icon"=>"detailicon-",
        "project_image"=>"projectimage-",
        "project_gallery_image"=>"projectgallery-",
        "home_image"=>"homeimage-"
    ],
    "upload"=>[
        "photo_bio"=>$env_prefix."/members/bio/",
        "logo"=>$env_prefix."/members/logos/",
        "detail_icon"=>$env_prefix."/members/saleables/details/icons/",
        "project_image"=>"/members/projects/project_image/",
        "project_gallery_image"=>"/members/projects/project_gallery_image/",
        "home_image"=>"/members/home/home_image/"
    ],
    "imagesizes"=>[
        "photo_bio"=>["x"=>100,"y"=>100],
        "logo"=>["x"=>48,"y"=>48],
        "detail_icon"=>["x"=>100,"y"=>100],
        "project_image"=>["x"=>400,"y"=>400],
        "home_image"=>["x"=>1300,"y"=>850]
    ],
    "default_images"=>[
        "characteristic_default_icon"=>$env_prefix."/members/saleables/details/icons/characteristic_default_icon3.png",
        "benefit_default_icon"=>$env_prefix."/members/saleables/details/icons/benefit_default_icon.png"
    ]
];