import { useTranslation } from '@/app/i18n';

const FILE_JSON = 'about';
export default async function AboutMe({ lng }) {
  const { t } = await useTranslation(lng, FILE_JSON);
  return (
    <div className="h-full w-full overflow-scroll overflow-x-hidden">
      <div className="flex max-h-[10%] w-full items-center justify-center bg-gradient-to-tr from-indigo-700 via-lime-500 to-yellow-500 p-10 lg:max-h-[30%]">
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white px-2 pr-5 text-5xl font-bold text-gray-900 dark:text-white">
            Hello World
          </h1>
        </div>
      </div>
      <div className="block h-min w-full space-y-2 overflow-scroll p-2 md:flex md:flex-col md:items-start md:justify-center lg:h-[70%] lg:space-y-5">
        <div className="font-semibold">{t('intro')}</div>
        <div className="font-serif">{t('develop')}</div>
        <div className="font-mono">{t('greetings')}</div>
      </div>
    </div>
  );
}
