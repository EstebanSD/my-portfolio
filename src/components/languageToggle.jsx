'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useTranslation } from '@/app/i18n/client';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import Image from 'next/image';
import { spain_img, usa_img } from '../../public/img';
import { useCookies } from 'react-cookie';
import { i18CookieName, languages } from '@/app/i18n/settings';

const LANGUAGE_IMG = { en: usa_img, es: spain_img };
const FILE_JSON = 'home';
export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname().split('/');
  const lng = pathname[1];
  const searchParams = useSearchParams().toString();

  const { t } = useTranslation(lng, FILE_JSON);

  const [cookies, setCookie] = useCookies([i18CookieName]);

  const LANGUAGE_VALUES = languages.map((value) => ({ value, label: t(value) }));

  const changeLanguage = (value) => {
    if (value === lng) return;
    const url = pathname.slice(2).join();

    router.push(`/${value}/${url}?${searchParams}`);
  };

  useEffect(() => {
    if (cookies?.i18next === lng) return;

    setCookie(i18CookieName, lng, { path: '/' });
  }, [lng, cookies?.i18next]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image src={LANGUAGE_IMG[lng]} priority width={20} height={20} alt="flag-img" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGE_VALUES.map(({ value, label }, idx) => {
          return (
            <DropdownMenuItem key={idx} onClick={() => changeLanguage(value)}>
              {label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
