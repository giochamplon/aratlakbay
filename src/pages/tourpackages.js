import React from 'react'
import { Box, Typography } from '@mui/material';

import AdminLayout from '../components/AdminLayout'

export default function Tourpackages() {
  return (

    <Box>
        <Typography>GIO CARLOS</Typography>
    </Box>

  )
}

Tourpackages.getLayout = function getLayout(page) {

    return <AdminLayout>{page}</AdminLayout>
}
