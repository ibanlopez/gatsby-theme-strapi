module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`page`, `user`],
        //If using single types place them in this array.
        singleTypes: [`home-page`],
      },
    },
  ],
};
