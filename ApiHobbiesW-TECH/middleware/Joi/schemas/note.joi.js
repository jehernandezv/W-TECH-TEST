import Joi from 'joi';

const addJoi = Joi.object({
  note: Joi.string()
    .max(150)
    .required()
});

const editJoi = Joi.object({
    note: Joi.string()
    .max(150)
    .required()
});

export {addJoi, editJoi};
