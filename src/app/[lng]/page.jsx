import { lazy } from 'react';
import Link from 'next/link';

import { useTranslation } from '../i18n';

const AboutMe = lazy(() => import('./components/aboutMe'));
const Skills = lazy(() => import('./components/skills'));
const Contact = lazy(() => import('./components/contact'));

const TABS = [
  { label: 'about', value: 'about' },
  { label: 'projects', value: 'projects' },
  { label: 'skills', value: 'skills' },
  { label: 'contact', value: 'contact' },
];

const FILE_JSON = 'home';
export default async function Home({ params: { lng }, searchParams: { tab } }) {
  const { t } = await useTranslation(lng, FILE_JSON);

  const selectedTab = TABS.some(({ value }) => value === tab) ? tab : TABS[0].value;

  return (
    <div className="flex h-full w-full flex-col border-t pt-4 md:grid md:grid-cols-12">
      <div className="order-1 h-min md:order-2 md:col-span-3 md:flex md:h-full md:flex-col md:justify-between">
        <div className="flex h-full w-full items-center justify-around p-2 md:flex-col md:items-start md:justify-start">
          {TABS.map(({ value, label }) => {
            return (
              <Link
                key={value}
                href={`?tab=${value}`}
                className={`me-2 truncate md:me-0 md:mt-2 ${selectedTab === value && 'font-bold underline'}`}
              >
                {t(label)}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex md:items-center md:justify-center md:px-2">
          <i aria-hidden className="fa-regular fa-copyright" />
          <span className="ms-2 font-thin">Copyright 2024</span>
        </div>
      </div>
      <div className="order-2 h-full overflow-hidden rounded-sm border md:order-1 md:col-span-9">
        {selectedTab === TABS[0].value ? (
          <AboutMe lng={lng} />
        ) : selectedTab === TABS[1].value ? (
          <>Incoming...</>
        ) : selectedTab === TABS[2].value ? (
          <Skills lng={lng} />
        ) : (
          <Contact lng={lng} />
        )}
      </div>

      <div className="order-3 flex items-center justify-center px-2 md:hidden">
        <i aria-hidden className="fa-regular fa-copyright" />
        <span className="ms-2 font-thin">Copyright 2024</span>
      </div>
    </div>
  );
}
