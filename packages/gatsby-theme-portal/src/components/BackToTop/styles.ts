import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    element: {
      backgroundColor: theme.palette.primary.main,
      border: 'none',
      color: theme.palette.common.black,
      position: 'fixed',
      width: 45,
      height: 45,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      right: 15,
      bottom: 20,
      zIndex: 2,
      transform: 'perspective(1px) translateZ(0) translateX(100px)',
      transition: 'all .5s',
      '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 'auto',
        background: theme.palette.common.black,
        transform: 'scaleY(0)',
        transformOrigin: '0 100%',
        transitionProperty: 'transform',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-out',
      },
      '&:hover': {
        '&:before': {
          transform: 'scaleY(1)',
        },
        '& svg': {
          fill: theme.palette.primary.main,
        },
      },
      '&:focus': {
        transform: 'perspective(1px) translateZ(0) translateX(0)',
      },
      '& svg': {
        fill: theme.palette.common.black,
        width: 24,
        height: 24,
        transition: 'all .5s',
      },
      [theme.breakpoints.up('md')]: {},
    },
    isActive: {
      transform: 'perspective(1px) translateZ(0) translateX(0)',
    },
    isHidden: {
      transform: 'perspective(1px) translateZ(0) translateX(100px)',
    },
    srOnly: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      clipPath: 'polygon(0 0,0 0,0 0)',
      height: '.0625rem',
      margin: '-.0625rem',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '.0625rem',
      whiteSpace: 'nowrap',
    },
  })
);
