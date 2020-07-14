import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    wrapper: {
      margin-bottom: 30px,
      margin-top: 30px,
      text-align: 'center',
      position: 'relative',
    },
    name: {
      font-size: '.875rem',
      font-weight: 700,
      max-width: '80%',
      margin: 'auto',
      padding-bottom: 3px,
      '& span': {
        background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
        background-repeat: 'no-repeat',
        background-size: '100% .1875rem',
        background-position: '0 100%',
      },
      [breakpoints.up('md')]: {
        font-size: '1.125rem !important',
      },
    },
    tagline: {
      margin-bottom: 10px,
      '& span': {
        font-size: '1.125rem',
        font-weight: 700,
        background: `linear-gradient(to bottom,${white} 40%,${palette.quaternary.main} 5%,${palette.quaternary.main} 95%)`,
        display: 'inline-block',
      },
    },
    image: {
      width: 250,
      margin: 'auto',
      position: 'relative',
    },
    link: {
      display: 'block !important',
      '&:before, &:after': {
        display: 'none',
      },
    },
    buynow: {
      background-color: var(--primary-color),
      color: white,
      font-size: '.875rem',
      font-weight: 700,
      overflow: 'hidden',
      transform: 'perspective(1px) translateZ(0)',
      border-radius: 3,
      transition: 'all .5s',
      margin-top: 16px,
      display: 'inline-block',
      '&:after': {
        display: 'none',
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        z-index: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 'auto',
        background: black,
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      '& svg': {
        margin-right: 16px,
        margin-left: 16px,
        transition: 'all .5s',
      },
      '&:hover': {
        '&:before': {
          transform: 'scaleX(1)',
        },
        '& svg': {
          fill: white,
        },
      },
    },
    animateIcon: {
      display: 'flex',
      align-items: 'center',
      '& span': {
        background-color: #b8f0c0,
        display: 'block',
        padding-top: 10px,
        padding-bottom: 10px,
        padding-left: 16px,
        padding-right: 16px,
        color: black,
      },
    },
  })
);
