import { Router } from "express";
import { getCountries, getCountry, searchCountry, insertCountry, deleteCountry, updateCountry } from "../controller/country.controller";
const router = Router();

router.get('/country', getCountries);
router.get('/country/:id', getCountry);
router.get('/countryname/:id', searchCountry);
router.post('/country', insertCountry);
router.delete('/country/:id', deleteCountry);
router.put('/country/:id', updateCountry);

export default router
