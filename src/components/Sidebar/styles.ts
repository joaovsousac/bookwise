import { styled } from "@stitches/react";

export const SidebarContainer = styled('aside', {
    width: '14.5rem',
    height: '57rem',
    backgroundImage: "url('/images/sidebar-background.png')",
    backgroundSize: "cover",
    marginLeft: 1.25 * 16,
    marginTop: 1.25 * 16,
    marginBottom: 1.25 * 16,
    borderRadius: '$lg',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'fixed',
})

export const SidebarContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '2.5rem', // Ajuste para manter o logo no topo
    marginTop: '2rem'
})

export const SidebarLogo = styled('div', {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


    img: {
        width: '8rem',
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export const SidebarSessions = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4rem',
    flexDirection: 'column',


    button: {
        all: 'unset',
        cursor: 'pointer',
        color: '$gray-400',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        paddingLeft: '0.5rem', // Espaço à esquerda do texto e do ícone
        position: 'relative',
        transition: '0.2s',

        '&.active': {
            color: '#FFF',
            fontWeight: '700'
        },

        '&:hover': {
            color: '#FFF'
        }

    }
})

export const SidebarFooter = styled('footer', {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 'auto', // Empurra o footer para a parte inferior
    padding: '2rem',

    div: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.75rem',
        alignItems: 'center'
    },

    img: {
        borderRadius: '$full'
    },

    button: {
        all: 'unset',
        color: '$danger',
        justifyContent: 'center',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center', // Alinha verticalmente o conteúdo do botão
    }
})

export const DoLogin = styled('button', {
    justifyContent: 'center',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center', // Alinha verticalmente o conteúdo do botão

    p: {
        color: '$gray-200',
        fontWeight: '700',
        paddingRight: '0.75rem',
    },

    svg: {
        color: '$green-100'
    }
})

export const SidebarRectangle = styled('div', {
    width: '4px',
    height: '24px',
    marginRight: '0.5rem',
    borderRadius: '999px',
    backgroundImage: 'linear-gradient(to bottom, #7fd1cc 0%, #9694f5 100%)',
    flexShrink: 0,
})