import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------
import LogoX from '../assets/images/logo/favicon.ico'

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src={LogoX} sx={{ width: 40, height: 40, ...sx }} />;
}
