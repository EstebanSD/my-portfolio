import Image from 'next/image';

import {
  css_logo,
  html_logo,
  javascript_logo,
  react_logo,
  next_logo,
  bootstrap5_logo,
  tailwind_logo,
  git_logo,
  github_logo,
  figma_logo,
} from '../../../../public/img';
import { useTranslation } from '@/app/i18n';
import { Badge, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

const FILE_JSON = 'skills';
export default async function Skills({ lng }) {
  const { t } = await useTranslation(lng, FILE_JSON);

  const SOFT_SKILLS = [
    t('teamwork'),
    t('problem_solving'),
    t('adaptability'),
    t('critical_thinking'),
    t('attention'),
    t('empathy'),
    t('resilience'),
    t('prof_ethics'),
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-around overflow-scroll overflow-x-hidden bg-gray-200 p-4 dark:bg-gray-900">
      <div className="w-full">
        <p className="underline">{t('title1')}</p>
        <div className="mt-2 flex items-center justify-around">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="p-1">
                <Image src={html_logo} className="h-14 w-14 md:h-20 md:w-20" alt="html-logo" />
              </TooltipTrigger>
              <TooltipContent>
                <p>HTML 5</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="p-1">
                <Image src={css_logo} className="h-14 w-14 md:h-20 md:w-20" alt="css-logo" />
              </TooltipTrigger>
              <TooltipContent>
                <p>CSS 3</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="p-1">
                <Image src={javascript_logo} className="h-14 w-14 md:h-20 md:w-20" alt="js-logo" />
              </TooltipTrigger>
              <TooltipContent>
                <p>JavaScript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="mt-4 w-full">
        <p className="underline">{t('title2')}</p>
        <div className="mt-2 flex gap-1 md:items-center md:justify-between md:gap-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="rounded-full bg-transparent p-1 dark:bg-gray-100">
                <Image src={react_logo} className="h-14 w-14 md:h-20 md:w-20" alt="react-logo" />
              </TooltipTrigger>
              <TooltipContent>
                <p>React js</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="rounded-full bg-transparent p-1 dark:bg-gray-100">
                <Image src={next_logo} className="h-14 w-14 md:h-20 md:w-20" alt="next-logo" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Next js</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="rounded-full bg-transparent p-1 dark:bg-gray-100">
                <Image
                  src={bootstrap5_logo}
                  className="h-14 w-14 md:h-20 md:w-20"
                  alt="bootstrap-logo"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Bootstrap 5</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="rounded-full bg-transparent p-1 dark:bg-gray-100">
                <Image
                  src={tailwind_logo}
                  className="h-14 w-14 md:h-20 md:w-20"
                  alt="tailwind-logo"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Tailwind CSS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="mt-4 w-full">
        <p className="underline">{t('title3')}</p>
        <div className="mt-2 flex items-center justify-around">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="rounded-full bg-transparent p-1 dark:bg-gray-100">
                <Image src={git_logo} className="h-14 w-14 md:h-20 md:w-20" alt="git-logo" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Git</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="rounded-full bg-transparent p-1 dark:bg-gray-100">
                <Image src={github_logo} className="h-14 w-14 md:h-20 md:w-20" alt="github-logo" />
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="rounded-full bg-transparent p-1 dark:bg-gray-100">
                <Image src={figma_logo} className="h-14 w-14 md:h-20 md:w-20" alt="figma-logo" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Figma</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="mt-6 w-full border-t">
        <p className="mt-2 text-center underline">{t('title4')}</p>
        <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-3">
          {SOFT_SKILLS.map((item, idx) => {
            return (
              <div key={idx} className="col-span-1 w-full break-words">
                <Badge variant="primary" className="h-10 cursor-default font-extrabold">
                  {item}
                </Badge>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
