 const menus = [
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
                to: 'Details',
                children: [
                    {
                        label: 'location',
                        to: 'location',
                    },
                ],
            },
        ],
    },
    {
        label: 'settings',
        to: '/settings',
        children: [
            {
                label: 'Account',
                to: 'Account',
            },
            {
                label: 'security',
                to: 'security',
            },
            {
                label: 'login',
                to: 'login',
            },
            {
                label: 'register',
                to: 'register',
            },
        ]      
    },
            
]

export default menus;