<?php

use common\models\HerodanKeyin;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\widgets\Pjax;
/** @var yii\web\View $this */
/** @var common\models\HerodanKeyinSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Herodan Keyins';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="herodan-keyin-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Herodan Keyin', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php Pjax::begin(); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'nomi',
            'malumot:ntext',
            'rasm:ntext',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, HerodanKeyin $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>

    <?php Pjax::end(); ?>

</div>
