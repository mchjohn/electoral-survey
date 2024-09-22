import { logo } from '@/constants/images';
import { memo } from 'react';

function Logo() {
  return <img src={logo} alt="" className="w-20 md:w-32" />;
}

export default memo(Logo);
