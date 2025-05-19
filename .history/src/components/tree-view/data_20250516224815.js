export const sideMenu = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'profile',
        to: '/profile',
        children: [
            {
                label: 'Details',
                to: '/Details',
                children: []
            },
        ]
    }
]