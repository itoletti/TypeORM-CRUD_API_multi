import { Request, Response } from "express";
import { getRepository } from "typeorm";
import {City} from "../entities/city";

/* Entity City con relacion a Country */
export const getCities = async (req: Request, res: Response) : Promise<Response> => {
    const cities = await getRepository(City).find({relations : ["country"]});
    return res.json(cities);
};

export const getCity = async (req: Request, res: Response) : Promise<Response> => {
    const resultado = await getRepository(City).findOne(req.params.id, {relations : ["country"]});
    return res.json(resultado);
};

export const searchCity = async (req: Request, res: Response) : Promise<Response> => {
    console.log(req.params.id);
    const resultado = await getRepository(City).find({ where: {name : req.params.id} , relations : ["country"]});
    return res.json(resultado);
};

export const insertCity = async (req: Request, res: Response) : Promise<Response> => {
    const city = await getRepository(City).findOne({ name : req.body.name, country : req.body.country});
   if (!city){
        const newCity = getRepository(City).create(req.body);
        try {
            const resultado = await getRepository(City).save(newCity);
            return res.json(resultado);    
        } catch (error) {
            return res.json(error);
        }
    }
    return res.status(406).json ({"msg":"Ciudad duplicada"});
};

export const deleteCity = async (req: Request, res: Response) : Promise<Response> => {
    try {
        const resultado = await getRepository(City).delete(req.params.id)
        return res.json(resultado);
    } catch (error) {
        return res.json(error);
    }
};

export const updateCity = async (req: Request, res: Response) : Promise<Response> => {
    const resultado = await getRepository(City).update(req.params.id, req.body);
    return res.json(resultado);
};







// userRepository.find({
//     select: ["firstName", "lastName"],
//     relations: ["profile", "photos", "videos"],
//     where: {
//         firstName: "Timber",
//         lastName: "Saw"
//     },
//     order: {
//         name: "ASC",
//         id: "DESC"
//     },
//     skip: 5,
//     take: 10,
//     cache: true
// });