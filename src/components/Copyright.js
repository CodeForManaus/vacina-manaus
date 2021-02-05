import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link
        color='inherit'
        onClick={() =>
          window.open(
            'https://github.com/pvfrota/vacina-manaus/blob/master/LICENSE.MD',
            '_blank'
          )
        }
      >
        #VacinaManaus
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
