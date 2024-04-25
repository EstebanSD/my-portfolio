'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TriangleAlert } from 'lucide-react';

import { useTranslation } from './i18n/client';

const FILE_JSON = 'error';
export default function Error({ reset }) {
  const pathname = usePathname();
  const lng = pathname.split('/')[1];
  const path = pathname.split('/')[2];

  const { t } = useTranslation(lng, FILE_JSON);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md bg-gray-500">
      {/* <div className="text-white md:hidden">
        <i aria-hidden className="fa-solid fa-circle-xmark fa-2x" />
      </div>
      <div className="hidden text-white md:block lg:hidden">
        <i aria-hidden className="fa-solid fa-circle-xmark fa-4x" />
      </div>
      <div className="hidden text-white lg:block">
        <i aria-hidden className="fa-solid fa-circle-xmark fa-8x" />
      </div> */}

      <TriangleAlert className="h-20 w-20" />

      <div className="mt-2">{t('title')}</div>

      <div>
        <span className="me-1 cursor-pointer font-bold hover:underline" onClick={() => reset()}>
          {t('tryAgain')}
        </span>
        {t('later')}
      </div>

      {path && (
        <Link href={`/${lng}`} className="hover:underline">
          {t('goBack')}
        </Link>
      )}
    </div>
  );
}
