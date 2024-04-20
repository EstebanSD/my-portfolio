import Link from 'next/link';

import { useTranslation } from '../i18n';

const TABS = [
  { label: 'about', value: 'about' },
  { label: 'projects', value: 'projects' },
  { label: 'hard_skills', value: 'hard-skills' },
  { label: 'soft_skills', value: 'soft-skills' },
];

const FILE_JSON = 'home';
export default async function Home({ params: { lng }, searchParams: { tab } }) {
  const { t } = await useTranslation(lng, FILE_JSON);

  const selectedTab = TABS.some(({ value }) => value === tab) ? tab : TABS[0].value;

  return (
    <div className="flex h-full w-full flex-col border-t pt-4 md:grid md:grid-cols-12">
      <div className="order-1 h-min md:order-2 md:col-span-3 md:h-full">
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
      </div>
      <div className="order-2 h-full rounded-sm border md:order-1 md:col-span-9">Component</div>
    </div>
  );
}
