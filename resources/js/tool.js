Nova.booting((Vue, router) => {
    router.addRoutes([
        {
            name: 'nova-app-preview',
            path: '/nova-app-preview',
            component: require('./components/Tool'),
        },
    ])
})
