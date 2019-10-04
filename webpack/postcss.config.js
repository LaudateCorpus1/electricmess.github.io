module.exports = {
    /**
     * PostCSS Plugins
     *
     * Include whatever plugins you want but make sure you install these via yarn or npm!
     */
    plugins: {
        lost: {},
        /**
         * Autoprefixer
         *
         * Note:
         * Don't forget to add browserslist config in the thene's package.json file.
         */
        autoprefixer: {
            browsers: ['ie 11', 'not op_mini all', 'not ie 10', '> 0.25%']
        }
    }
};
