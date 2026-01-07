<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\HerodanKeyin $model */

$this->title = 'Create Herodan Keyin';
$this->params['breadcrumbs'][] = ['label' => 'Herodan Keyins', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="herodan-keyin-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
