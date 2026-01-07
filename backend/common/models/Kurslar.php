<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "kurslar".
 *
 * @property int $id
 * @property string $nom
 * @property string $malumot
 * @property string $rasm
 * @property int $narx
 */
class Kurslar extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'kurslar';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['nom', 'malumot', 'rasm', 'narx'], 'required'],
            [['malumot', 'rasm'], 'string'],
            [['narx'], 'integer'],
            [['nom'], 'string', 'max' => 150],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'nom' => 'Nom',
            'malumot' => 'Malumot',
            'rasm' => 'Rasm',
            'narx' => 'Narx',
        ];
    }

    /**
     * {@inheritdoc}
     * @return KurslarQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new KurslarQuery(get_called_class());
    }

}
