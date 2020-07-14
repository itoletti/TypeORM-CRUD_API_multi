import { Router } from "express";
import { getCities, getCity, searchCity, insertCity, deleteCity, updateCity } from "../controller/city.controller";
const router = Router();

router.get('/city', getCities);
router.get('/cityid/:id', getCity);
router.get('/cityname/:id', searchCity);
router.post('/city', insertCity);
router.delete('/city/:id', deleteCity);
router.put('/city/:id', updateCity);

export default router
