import { ModelEntity } from "../types/Entities";
import { ModelTypes } from "../types/ModelTypes";
import { getModel } from "../utils/utils";

export const createSingleModelEntry = async (
    type: ModelTypes,
    entryInfo: ModelEntity,
) => {
    const model = getModel(type);
    try {
        await model.create({...entryInfo});
    } catch {
        console.log(`Error in create in ${type}`);
    }
};

export const deleteSingleModelEntry = async (
    type: ModelTypes,
    id: number,
) => {
    const model = getModel(type);
    try {
        await model.destroy({
            where: {
                id: id,
            },
        });
    } catch {
        console.log(`Error in delete in ${type}`);
    }
};

export const updateSingleModelEntry = async (
    type: ModelTypes,
    id: number,
    entryInfo: ModelEntity,
) => {
    const model = getModel(type);
    try {
        await model.update({...entryInfo}, {
            where: {
                id: id,
            },
        });
    } catch {
        console.log(`Error in update in ${type}`);
    }
};

export const getSingleModelEntry = async (
    type: ModelTypes,
    id: number,
) => {
    const model = getModel(type);
    try {
        return await model.findOne({
            where: {
                id: id,
            },
        });
    } catch {
        console.log(`Error in get in ${type}`);
    }
};

export const getModelEntries = async (
    type: ModelTypes,
    entryInfo: ModelEntity,
) => {
    const model = getModel(type);
    try {
        return await model.findAll({
            where: { ...entryInfo }
        });
    } catch {
        console.log(`Error in get models by in ${type}`);
    }
};

export const getAssociatedModel = async (
    id: number,
    baseType: ModelTypes,
    associatedType: ModelTypes,
) => {
    const baseModel = getModel(baseType);
    const associatedModel = getModel(associatedType);

    try {
        return await baseModel.findOne({
            where: { id: id },
            include: associatedModel,
        });
    } catch {
        console.log(`Error in get associated models by in ${baseType} - ${associatedType}`);
    }
};

export const getModelsByAssociation = async (
    id: number,
    baseType: ModelTypes,
    associatedType: ModelTypes,
) => {
    const baseModel = getModel(baseType);
    const associatedModel = getModel(associatedType);

    try {
        return await baseModel.findAll({
            include: {
                model: associatedModel,
                where: { id: id },
            },
        });
    } catch {
        console.log(`Error in get associated models by in ${baseType} - ${associatedType}`);
    }
};
