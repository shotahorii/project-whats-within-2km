/* define icon from font awesome */
const iconSupermarket = L.divIcon({
  html: '<i class="fas fa-shopping-cart fa-lg" style="color:black;"></i>',
  className: 'iconShopping'
});
const iconPharmacy = L.divIcon({
  html: '<i class="fas fa-prescription-bottle-alt fa-lg" style="color:black;"></i>',
  className: 'iconPharmacy'
});

/* define data */
const supermarkets = [
  [53.3401936,-6.2374167,iconSupermarket,'EuroSpar Barrow Street'],
  [53.3434368,-6.2410043,iconSupermarket,'Fresh Grand Canal'],
];
const pharmacies = [
  [53.3427544,-6.2423422,iconPharmacy,'Gallery Quay Pharmacy'],
];

const data = {'Supermarkets':supermarkets,'Pharmacies':pharmacies};
