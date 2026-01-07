<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\HerodanKeyin $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="herodan-keyin-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'nomi')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'malumot')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'rasm')->textarea(['rows' => 6]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
