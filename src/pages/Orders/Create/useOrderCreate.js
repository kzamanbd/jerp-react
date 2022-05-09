import axios from '../../../config/useAxios';

export const getTerritoryList = () => axios.get('/api/web/get-territory-list');

export const getDICWiseUsers = () => axios.get('/api/web/dic-wise-users');

export const getAllCustomersForOrderByDepotTerritory = (territoryId) =>
    axios.post(`api/web/all-customers-for-order-by-depot-territory?territory_id=${territoryId}`);
