<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "hero".
 *
 * @property int $id
 * @property string $nomi
 * @property string $malumot
 * @property string $rasm
 */
class Hero extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'hero';
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
     * @return HeroQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new HeroQuery(get_called_class());
    }

}
