<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "status".
 *
 * @property int $id
 * @property string $nomi
 * @property int $soni
 */
class Status extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'status';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['nomi', 'soni'], 'required'],
            [['soni'], 'integer'],
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
            'soni' => 'Soni',
        ];
    }

    /**
     * {@inheritdoc}
     * @return StatusQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new StatusQuery(get_called_class());
    }

}
