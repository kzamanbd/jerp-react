import axios from 'config/useAxios';

export const getTerritoryList = () => axios.get('/api/web/get-territory-list');

export const getDICWiseUsers = () => axios.get('/api/web/dic-wise-users');

export const searchProductDataList = () => axios.get('/api/web/search-product-data-list');

export const areaListByUser = (customerId) =>
    axios.get(`/api/common/area-list-by-user/${customerId}`);

export const customerInfoForDepot = (customerId, territoryId) =>
    axios.get(`/api/web/customer-info-for-depot/${customerId}/${territoryId}`);

export const getAllCustomersForOrderByDepotTerritory = (territoryId) =>
    axios.post(`/api/web/all-customers-for-order-by-depot-territory?territory_id=${territoryId}`);

export const findProductOffer = (productDetail) =>
    axios.get('/api/web/find-product-offer', {
        params: productDetail,
    });
export const orderOfferAmount = (amount, date) =>
    axios.post('/api/mobile/get-order-offer', {
        date,
        amount,
    });
export const createNewOrder = (orderDetail) => axios.post('/api/mobile/create-order', orderDetail);
