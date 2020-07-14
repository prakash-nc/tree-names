import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    searchControlWrapper: {
      width: '100%',
      '& form': {
        display: 'flex',
        flex-wrap: 'wrap',
        margin: '20px auto',
        position: 'relative',
        [breakpoints.up('md')]: {
          margin: '60px auto 30px',
        },
        '& input': {
          outline: 'none',
          padding: '5px 10px',
          border: '1px solid #999',
          width: '100%',
          flex: 1,
          font-size: '1.25rem',
          line-height: '48px',
          color: black,
          borderRight: 'none',
          [breakpoints.up('md')]: {
            font-size: '1.875rem',
            padding: '10px 20px',
          },
        },
        '& button': {
          padding: '10px 0',
          width: 80,
          background-color: '#fff',
          borderLeft: 'none',
          border: '1px solid #999',
          text-align: 'center',
          cursor: 'pointer',
          '&:hover svg': {
            fill: black,
          },
        },
        '& svg': {
          width: 28,
          height: 28,
          fill: var(--primary-color),
          transition: 'all .3s ease-in',
        },
        '& .ais-SearchBox-loadingIndicator': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      },
    },
    resultsInfo: {
      font-size: '1.125rem',
      line-height: 1.1,
      font-weight: 400,
      margin-bottom: 8px,
      display: 'flex',
      align-items: 'flex-end',
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
      },
    },
    searchQuery: {
      font-size: '1.5rem',
      font-weight: 600,
      line-height: 1.1,
      margin-right: 8px,
      [breakpoints.up('md')]: {
        font-size: '2.5rem',
      },
      '& + span': {
        font-size: '1.5rem',
        font-weight: 600,
        line-height: 1.1,
        margin-right: 8px,
        color: var(--primary-color),
        [breakpoints.up('md')]: {
          font-size: '1.5rem',
          margin-bottom: spacing(0.5),
        },
      },
    },
    currentRefinements: {
      display: 'none',
      [breakpoints.up('md')]: {
        display: 'block',
      },
      '& .ais-CurrentRefinements-list': {
        margin-top: 0,
        margin-bottom: 0,
        padding: 0,
        padding-top: 16px,
        minHeight: 47,
        listStyleType: 'none',
        display: 'flex',
        flex-wrap: 'wrap',
      },
      '& .ais-CurrentRefinements-category, & .ais-CurrentRefinements-label': {
        margin-right: 10,
        padding: 6px,
        font-size: '.875rem',
        background-color: #b8f0c0,
        color: black,
        margin-bottom: 10px,
        display: 'inline-block',
      },
      '& .ais-CurrentRefinements-label': {
        background-color: black,
        color: white,
        margin-right: 0,
      },
      '& .ais-CurrentRefinements-delete': {
        background-color: white,
        border: 0,
        margin-left: spacing(0.5),
        padding: spacing(0.25),
        padding-top: spacing(0),
        padding-bottom: spacing(0),
        cursor: 'pointer',
        '&:focus': {
          outline: 0,
        },
      },
    },
    searhResultWrapper: {
      width: '100%',
      '& figure': {
        margin: 0,
      },
      '& .preloader-icon': {
        display: 'flex',
        margin: '30px auto',
      },
      '&.list': {
        '& .image-wrapper': {
          '&  .gatsby-image-wrapper': {
            max-width: 80,
            maxHeight: 80,
            [breakpoints.up('md')]: {
              max-width: 140,
              maxHeight: 140,
            },
          },
        },
      },
      '&.grid': {
        '& .ais-InfiniteHits-list': {
          listStyleType: 'none',
          padding: 0,
          margin: '0',
          display: 'flex',
          flex-direction: 'row',
          flex-wrap: 'wrap',
          justify-content: 'flex-start',
          alignContent: 'stretch',
        },
        '& .ais-InfiniteHits-item': {
          justify-content: 'space-between',
          flex: '0 0 auto',
          width: 'calc(100%/2.19)',
          margin: '0 10px',
          margin-bottom: 10,
          [breakpoints.up('md')]: {
            width: 'calc(100%/4.52)',
            margin: '0 15px',
            margin-bottom: 30,
          },
          '&:hover': {
            background-color: 'transparent',
          },
          '&:nth-child(4n)': {
            margin-right: 0,
          },
        },
        '& .ais-InfiniteHits-item__link': {
          borderBottom: 'none',
          display: 'block',
          padding: 0,
          '&:hover span': {
            background-color: 'transparent',
            background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
            background-repeat: 'no-repeat',
            background-size: '100% .1875rem',
            background-position: '0 100%',
          },
          '& h4': {
            font-size: '.875rem',
            line-height: 1.2,
            margin-top: 8px,
            [breakpoints.up('md')]: {
              font-size: '1.125rem',
            },
          },
        },
        '& .ais-InfiniteHits-item__copy': {
          padding-left: 0,
          [breakpoints.up('md')]: {
            text-align: 'center',
          },
        },
        '& .ais-InfiniteHits-item__desc': {
          display: 'none',
        },
        '&  .gatsby-image-wrapper': {
          max-width: '100%',
          maxHeight: 240,
          [breakpoints.up('md')]: {
            max-width: 210,
            maxHeight: 210,
          },
        },
      },
      '& .ais-InfiniteHits-list': {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
      },
      '& .ais-InfiniteHits-item': {
        transition: 'all .5s',
        '&:hover': {
          background-color: '#f5fdf6',
        },
        '&:last-child a': {
          borderBottom: 0,
        },
      },
      '& .ais-InfiniteHits-item__link': {
        borderBottom: `1px solid #f4f4f4`,
        color: black,
        display: 'flex',
        padding: 12px,
        [breakpoints.up('md')]: {
          padding: 20px,
        },
        '& h4': {
          margin-top: 0,
          margin-bottom: 8,
          display: 'inline-block',
          font-size: '.875rem',
          line-height: 1.1,
          [breakpoints.up('md')]: {
            font-size: '1.5rem',
            margin-top: 10,
          },
        },
      },
      '& .ais-InfiniteHits-item__copy': {
        width: '100%',
        flex: 1,
        padding-left: 30,
      },
      '& .ais-InfiniteHits-item__desc': {
        font-size: '0.75rem',
        margin-top: 0,
        margin-bottom: 0,
        '& + p': {
          margin: 0,
        },
        [breakpoints.up('md')]: {
          font-size: '0.925rem',
        },
      },
      '& .ais-InfiniteHits-loadMore': {
        font-size: '.875rem',
        font-weight: 700,
        background-color: var(--primary-color),
        color: black,
        padding-top: 10px,
        padding-bottom: 10px,
        padding-left: 16px,
        padding-right: 16px,
        position: 'relative',
        display: 'flex',
        margin: 'auto',
        margin-top: 32px,
        margin-bottom: 32px,
        border: 'none',
        cursor: 'pointer',
        transition: 'all .3s',
        transform: 'perspective(1px) translateZ(0)',
        '&:before': {
          content: '""',
          position: 'absolute',
          z-index: -1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: black,
          transform: 'scaleY(0)',
          transformOrigin: '50% 0',
          transitionProperty: 'transform',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-out',
        },
        '&:hover': {
          color: white,
          '&:before': {
            transform: 'scaleY(1)',
          },
        },
        '&:focus': {
          transform: 'perspective(1px) translateZ(0)',
        },
        [breakpoints.up('md')]: {
          font-size: '1.125rem',
          padding-top: spacing(1.75),
          padding-bottom: spacing(1.75),
          padding-left: 20px,
          padding-right: 20px,
        },
      },
    },
    twoColumn: {
      display: 'flex',
      width: '100%',
    },
    gridItems: {
      width: '100%',
      flex: 1,
      [breakpoints.up('md')]: {
        padding-left: 48px,
        margin-bottom: 48px,
      },
    },
    filters: {
      display: 'none',
      [breakpoints.up('md')]: {
        width: 250,
        display: 'block',
      },
      '& .ais-Panel': {
        margin-top: 16px,
        margin-bottom: 16px,
      },
      '& .ais-Panel-header': {
        font-size: '.875rem',
        font-weight: 600,
      },
      '& .filter-wrapper': {
        padding-right: 20,
        position: 'relative',
      },
      '& .ais-RefinementList': {
        margin-top: 8px,
      },
      '& .ais-RefinementList-item': {
        transition: 'all .5s',
      },
      '& .ais-RefinementList-item--selected': {
        '& .ais-RefinementList-labelText': {
          font-weight: 600,
        },
      },
      '& .filter': {
        borderBottom: '1px solid #f4f4f4',
        borderTop: '1px solid #f4f4f4',
      },
      '& .filter-category': {
        display: 'flex',
        align-items: 'center',
        justify-content: 'space-between',

        '& svg': {
          width: 16,
          height: 16,
          transform: 'rotate(-90deg)',
          transition: 'all .3s ease-out',
        },
      },
      '& ul': {
        listStyleType: 'none',
        padding: 0,
        margin-top: 0,
        margin-bottom: 0,
        '& li': {
          margin-right: 8px,
          margin-bottom: 8px,
        },
        '& label': {
          display: 'flex',
          align-items: 'center',
          position: 'relative',
          cursor: 'pointer',
          font-size: '0.875rem',
          userSelect: 'none',
        },
        '& .ais-RefinementList-labelText, & .ais-RefinementList-count': {
          margin-left: 5,
          display: 'inline-block',
        },
        '& input': {
          margin: 0,
        },
        '& .ais-RefinementList-count': {
          background-color: 'rgba(197,201,224,.2)',
          padding: '1px 8px',
          border-radius: 2,
          display: 'inline-block',
          font-size: '.650rem',
          margin-left: '5px',
          color: '#333',
        },
      },
      '& .ais-RefinementList-showMore': {
        background-color: white,
        border: 0,
        padding: 0,
        padding-bottom: spacing(0.5),
        margin-top: 8px,
        color: palette.grey[100],
        cursor: 'pointer',
        background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
        background-repeat: 'no-repeat',
        background-size: '100% .1875rem',
        background-position: '0 100%',
        transition: 'all .4s',
        font-size: '.75rem',
        '&:hover': {
          outline: 0,
          background-image: `linear-gradient(120deg,${var(--primary-color)} 0%,${var(--primary-color)} 100%)`,
        },
        '&:focus': {
          outline: 0,
        },
      },
    },
    filterHeader: {
      display: 'flex',
      justify-content: 'space-between',
      align-items: 'center',
      borderBottom: '1px solid #ddd',
      padding-bottom: 10px,
      '& > span': {
        font-size: '1.125rem',
        font-weight: 600,
      },
      '& .ais-ClearRefinements': {
        '& button': {
          border: 'none',
          background-color: 'transparent',
          cursor: 'pointer',
          padding: 0,
          '&:hover': {
            borderBottom: `2px solid ${#b8f0c0}`,
          },
          '&:disabled': {
            cursor: 'not-allowed',
            '&:hover': {
              border: 'none',
            },
          },
        },
      },
    },
    searchForm: {
      display: 'flex',
      flex-wrap: 'wrap',
      margin: '0 auto',
    },
    searchInput: {
      outline: 'none',
      padding: '10px 20px',
      border: '1px solid #999',
      width: '100%',
      flex: 1,
      font-size: 30,
      line-height: '48px',
      color: black,
      borderRight: 'none',
    },
    searchButton: {
      padding: '10px 0',
      width: 60,
      background-color: '#fff',
      borderLeft: 'none',
      borderColor: '#999',
      text-align: 'center',
      cursor: 'pointer',
    },
    actions: {
      display: 'none',

      [breakpoints.up('md')]: {
        justify-content: 'flex-end',
        display: 'flex',
        align-items: 'center',
        padding-bottom: 16px,
        margin-bottom: 16px,
        width: '100%',
        alignSelf: 'flex-start',
      },
      '& .ais-SortBy-select': {
        padding: 6px,
        padding-top: 6px,
        padding-bottom: 6px,
        margin-right: 8px,
        border: 'none',
        font-size: '1rem',
        color: palette.grey[100],
        background-color: '#f4f4f4',
        border-radius: 4,
      },
    },
    icon: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      align-items: 'center',
      '&:focus': {
        outline: `1px dashed ${var(--primary-color)}`,
      },
      '& svg': {
        width: 28,
        height: 28,
        fill: black,
      },
    },
    iconActive: {
      '& svg': {
        fill: var(--primary-color),
      },
    },
  })
);
