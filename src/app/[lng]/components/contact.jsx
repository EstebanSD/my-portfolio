'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { profile_picture } from '../../../../public/img';

const EMAIL = process.env.EMAIL;
const PHONE = process.env.PHONE;

export default function Contact() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-200 p-4 dark:bg-gray-900">
      <Card className="w-full p-2 md:w-[60%] md:p-0">
        <CardHeader>
          <div className="flex flex-col items-center md:flex-row">
            <Avatar className="min-h-[80px] min-w-[80px] lg:min-h-[100px] lg:min-w-[100px]">
              <AvatarImage src={profile_picture.src} />
              <AvatarFallback>ES</AvatarFallback>
            </Avatar>
            <div className="mt-4 md:ms-4 md:mt-0">
              <CardTitle>Esteban Salvay Dilena</CardTitle>
              <CardDescription>Front-end Developer Jr.</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="flex items-center space-x-2">
            <i aria-hidden className="fa-solid fa-envelope fa-lg" />
            <span className="truncate">{EMAIL}</span>
            <i
              aria-hidden
              className="fa-regular fa-copy cursor-pointer"
              onClick={() => navigator.clipboard.writeText(EMAIL)}
            />
          </p>
          <p className="flex items-center space-x-2">
            <i aria-hidden className="fa-solid fa-phone fa-lg" />
            <span className="truncate">{PHONE}</span>
            <i
              aria-hidden
              className="fa-regular fa-copy cursor-pointer"
              onClick={() => navigator.clipboard.writeText(PHONE)}
            />
          </p>
        </CardContent>

        {/* TODO Download CV */}
        <CardFooter>
          <p>
            <i aria-hidden className="fa-solid fa-file fa-lg" />
          </p>

          <a href={'/files/CV.pdf'} download="ESD_CV" className="ms-2 hover:underline">
            Download My CV
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
