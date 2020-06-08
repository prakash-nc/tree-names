import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    richText: {
      counterReset: 'step',
      paddingTop: theme.spacing(5),
      marginBottom: theme.spacing(4),
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        background: theme.palette.tertiary.main,
        height: 20,
        right: 0,
        top: 0,
        width: '100vw',
        zIndex: -1,
      },
      '& .c-image': {
        marginBottom: theme.spacing(2),
        '&>div': {
          marginBottom: 0,
        },
        '&__credit': {
          fontSize: '.75rem',
          color: theme.palette.grey[100],
          marginTop: theme.spacing(0.5),
        },
      },
      '& h2': {
        fontSize: '1.875rem',
        fontWeight: 700,
        lineHeight: 1.1,
        marginTop: theme.spacing(6.25),
        marginBottom: theme.spacing(2.5),
        marginLeft: 0,
        marginRight: theme.spacing(2.5),
        position: 'relative',
        background: theme.palette.common.white,
        padding: theme.spacing(2),
        paddingBottom: 0,
        [theme.breakpoints.up('md')]: {
          fontSize: '2.25rem',
        },

        '&:before': {
          content: '""',
          position: 'absolute',
          background: theme.palette.common.black,
          right: -20,
          top: -20,
          width: '100vw',
          zIndex: -1,
          backgroundColor: theme.palette.tertiary.main,
          height: 'calc(100% - .15em)',
        },
      },
      '& h3': {
        fontSize: '1.5rem',
        fontWeight: 600,
        marginTop: 0,
        marginBottom: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
          fontSize: '1.875rem',
        },
      },
      '& p': {
        fontSize: '.875rem',
        marginTop: 0,
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          fontSize: '1.125rem',
        },
      },
      '& div': {
        marginTop: 0,
        marginBottom: theme.spacing(2),
      },
      '& figure': {
        margin: 0,
      },
      '& a': {
        color: theme.palette.common.black,
        position: 'relative',
        textDecoration: 'none',
        display: 'inline-block',
        '&:before': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          backgroundColor: theme.palette.primary.main,
          transition: 'all 0.3s ease-in-out',
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: '100%',
          bottom: 0,
          height: 2,
          backgroundColor: theme.palette.common.black,
          transition: 'all 0.3s ease-in-out',
        },
        '&:hover:after': {
          right: 0,
        },
      },
      '& .c-step': {
        position: 'relative',
        paddingLeft: 40,
        marginTop: theme.spacing(5),
        [theme.breakpoints.up('md')]: {
          paddingLeft: 100,
        },
        '&:before': {
          position: 'absolute',
          top: 0,
          left: 0,
          counterIncrement: 'step',
          content: `${'counter(step)'}`,
          fontSize: '3.125rem',
          fontWeight: 600,
          lineHeight: 1,
          marginTop: theme.spacing(-0.625),
          color: theme.palette.tertiary.main,
          fontFamily: 'Proxima Nova Alt',
          [theme.breakpoints.up('md')]: {
            fontSize: '6.25rem',
          },
        },
      },
      '& .c-step__reset': {
        counterReset: 'step',
        position: 'relative',
        paddingLeft: 40,
        marginTop: theme.spacing(5),
        [theme.breakpoints.up('md')]: {
          paddingLeft: 100,
        },
        '&:before': {
          position: 'absolute',
          top: 0,
          left: 0,
          counterIncrement: 'step',
          content: `${'counter(step)'}`,
          fontSize: '3.125rem',
          fontWeight: 600,
          lineHeight: 1,
          marginTop: theme.spacing(-0.625),
          color: theme.palette.tertiary.main,
          fontFamily: 'Proxima Nova Alt',
          [theme.breakpoints.up('md')]: {
            fontSize: '6.25rem',
          },
        },
      },
    },
  })
);
