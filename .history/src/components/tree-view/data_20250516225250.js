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
                children: [
                    {
                        label: 'location',
                        to: 'location',
                    },
                ],
            },
            
                ],
    }
]