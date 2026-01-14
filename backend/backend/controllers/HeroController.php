<?php

namespace backend\controllers;

use yii\rest\ActiveController;

class HeroController extends ActiveController
{
    public $modelClass = 'common\models\Hero';



    public function behaviors()
    {
        $behaviors = parent::behaviors();

        // add CORS filter
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::class,
        ];

        
        return $behaviors;
    }
}
