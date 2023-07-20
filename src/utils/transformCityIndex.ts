const transformCityIndex = (city: string) => {
  if (!city) return '';
  return city.toLocaleLowerCase().split(' ').join('_');
};

export default transformCityIndex;
