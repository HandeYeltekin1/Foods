import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer OTI2ke_mGmGOE5ZAfKfV_Rs9k8VoBV8qOn60LX9mv9WEmvjKZPiF4Mc38GNI_J9XIlPtsGe5Y8HLnIXkeT1jWd6qTiQoqnPJBGPS5xD9DyZLs2JZEppUyjeNZQfJY3Yx ",
  },
});
