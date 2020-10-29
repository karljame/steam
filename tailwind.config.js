module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            colors: {
                'navy-500': '#171a21',
                'green-steam': '#5c7e10'
            },
            backgroundImage: theme => ({
                'body-bg': "url('assets/taust.png')",
                'icons': "url('https://steamstore-a.akamaihd.net/public/images/v6/store_menu_icons.png?v=2')"
            })
        },
    },
    variants: {},
    plugins: [],
}
