<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "herodan_keyin".
 *
 * @property int $id
 * @property string $nomi
 * @property string $malumot
 * @property string $rasm
 */
class HerodanKeyin extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'herodan_keyin';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['nomi', 'malumot', 'rasm'], 'required'],
            [['malumot', 'rasm'], 'string'],
            [['nomi'], 'string', 'max' => 150],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'nomi' => 'Nomi',
            'malumot' => 'Malumot',
            'rasm' => 'Rasm',
        ];
    }

    /**
     * {@inheritdoc}
     * @return HerodanKeyinQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new HerodanKeyinQuery(get_called_class());
    }

}
