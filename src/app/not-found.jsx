import Link from 'next/link';
import { cookies } from 'next/headers';

import { i18CookieName } from './i18n/settings';
import { useTranslation } from './i18n';

const FILE_JSON = 'notFound';
export default async function NotFound() {
  const lng = cookies().get(i18CookieName).value;
  const { t } = await useTranslation(lng, FILE_JSON);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md bg-gray-500">
      <div className="text-white md:hidden">
        <i aria-hidden className="fa-solid fa-triangle-exclamation fa-2x" />
      </div>
      <div className="hidden text-white md:block lg:hidden">
        <i aria-hidden className="fa-solid fa-triangle-exclamation fa-4x" />
      </div>
      <div className="hidden text-white lg:block">
        <i aria-hidden className="fa-solid fa-triangle-exclamation fa-8x" />
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row">
        <h2 className="font-bold md:me-2">404</h2>
        <span className="hidden md:block">|</span>
        <h3 className="md:ms-2">{t('title')}</h3>
      </div>

      <Link href={`/${lng}`} className="hover:underline">
        {t('goBack')}
      </Link>
    </div>
  );
}
