const theme={
    space:[0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors:{
        grays: {//from light to dark
        0: 'hsl(208, 13%, 100%)',
        1: 'hsl(208, 13%, 95%)',
        2: 'hsl(208, 13%, 85%)',
        3: 'hsl(208, 13%, 75%)',
        4: 'hsl(208, 13%, 65%)',
        5: 'hsl(208, 13%, 55%)',
        6: 'hsl(208, 13%, 40%)',
        7: 'hsl(208, 13%, 35%)',
        8: 'hsl(208, 13%, 25%)',
        9: 'hsl(208, 13%, 10%)',
        10: 'hsl(208, 13%, 5%)'
        }
    }
    }
    const variants= {
        iconButton: {
            primary:{
                color: theme.colors.grays[8]
            },
            contrast: {
                color: theme.colors.grays[0]
            }
        },
        header: {
            primary:{
                //You could also use color vars form the global styles. e.g., 'var(--color-primary)'
                backgroundColor: theme.colors.grays[8],
                color: theme.colors.grays[0]
            }
        }
    }

export const Gray= {...theme, variants }