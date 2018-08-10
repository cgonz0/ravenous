const apiKey = 'itRRHlXuM4MbxDTnDdo_6-YqzpOlXnv-v6pHO7LLoCHwFUj0Nk-vwtDxODbQTLvnnyZmfsl_Jo0c9IJ0ifgFC1_uEYwGJ-z-_cauwQHOFNhBJv2FNLKNrgGcrZBrW3Yx';

//store the functionality needed to interact with the Yelp API
const Yelp = {
    //method we'll use to retrieve search results from the Yelp API.
  search(term, location, sortBy) {
    //return a promise that will ultimately resolve to our list of businesses
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  }
};

export default Yelp;