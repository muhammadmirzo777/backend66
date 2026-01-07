<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\HerodanKeyin $model */

$this->title = 'Update Herodan Keyin: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Herodan Keyins', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="herodan-keyin-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
