import type {ReactNode} from 'react';
import {useEffect} from 'react';

type RootProps = {
  children: ReactNode;
};

const isEnabled = (params: URLSearchParams, key: string) => {
  const value = params.get(key)?.trim().toLowerCase();
  return value === '1' || value === 'true' || value === 'yes';
};

export default function Root({children}: RootProps): ReactNode {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const embed = isEnabled(params, 'embed');
    const root = document.documentElement;

    root.toggleAttribute('data-hide-navbar', embed || isEnabled(params, 'hideNavbar'));
    root.toggleAttribute('data-hide-footer', embed || isEnabled(params, 'hideFooter'));

    return () => {
      root.removeAttribute('data-hide-navbar');
      root.removeAttribute('data-hide-footer');
    };
  }, []);

  return children;
}
