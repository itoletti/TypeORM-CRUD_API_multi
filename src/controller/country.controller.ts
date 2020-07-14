import { Request, Response } from "express";
import { getRepository } from "typeorm";
import  { Country } from "../entities/country";


export const getCountries = async (req: Request, res: Response) : Promise<Response> => {
    const countries = await getRepository(Country).find({relations : ["cities"]});
    return res.json(countries);
};

export const getCountry = async (req: Request, res: Response) : Promise<Response> => {
    const resultado = await getRepository(Country).findOne(req.params.id, {relations : ["cities"]});
    return res.json(resultado);
};

export const searchCountry = async (req: Request, res: Response) : Promise<Response> => {
    const resultado = await getRepository(Country).find({ name : req.params.id});
    return res.json(resultado);
};

export const insertCountry = async (req: Request, res: Response) : Promise<Response> => {
    const country = await getRepository(Country).findOne({ code : req.body.code })
    if (!country) {
        const newCountry =  getRepository(Country).create(req.body);
        try {
            const resultado = await getRepository(Country).save(newCountry);
            return res.json(resultado);            
        } catch (error) {
            return res.json(error);
        }
    }
    return res.status(406).json ({"msg":"Pais duplicado"});
};

export const deleteCountry = async (req: Request, res: Response) : Promise<Response> => {
    try {
        const resultado = await getRepository(Country).delete(req.params.id)
        return res.json(resultado);
    } catch (error) {
        return res.json(error);
    }
};

export const updateCountry = async (req: Request, res: Response) : Promise<Response> => {
    const resultado = await getRepository(Country).update(req.params.id, req.body);
    return res.json(resultado);
};