import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    section: {
      margin-top: 30px,
      margin-bottom: 30px,
      position: 'relative',
      '&:before': {
        content: '""',
        background: palette.quaternary.main,
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100vw',
        height: 10,
        z-index: -1,
      },
    },
    sectionTitle: {
      font-size: '1.875rem',
      font-weight: 600,
      line-height: 1.1,
      position: 'relative',
      margin: 0,
      margin-bottom: 30px,
      '&:before': {
        content: '""',
        background: palette.quaternary.main,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100vw',
        height: 20,
        z-index: -1,
      },
    },
    productTitle: {
      font-size: '.875rem',
      font-weight: 600,
      line-height: 1.4,
      margin: 0,
      margin-top: 8px,
      text-align: 'center',
    },
    image: {
      max-width: 140,
      maxHeight: 140,
      margin: 'auto',
    },
    gridContainer: {
      padding-bottom: 10px,
    },
    gridItem: {
      padding: 0,
      margin-bottom: 20px,
      '& img': {
        transition: 'all 500ms !important',
      },
      '& a': {
        color: black,

        '&:hover img': {
          transform: 'scale(1.05)',
        },
        '&:hover h3 span': {
          background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
          background-repeat: 'no-repeat',
          background-size: '100% .1875rem',
          background-position: '0 100%',
        },
      },
    },
    gridItemLink: {
      '& img': {
        margin: 'auto',
      },
    },
  })
);
