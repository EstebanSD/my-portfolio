import Image from 'next/image';

import {
  Badge,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import { PROJECTS } from '@/app/constant/projects';

const hoober = 'Hoober';
export default function Projects({ lng }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Carousel className="h-min w-full max-w-[80%] p-1 md:p-0">
        <CarouselContent className="h-[240px] lg:h-min">
          {PROJECTS.map(
            ({ name, small_description, full_description, image, technologies }, idx) => {
              return (
                <CarouselItem key={idx}>
                  <Card className="relative flex h-full w-full items-center overflow-hidden">
                    <div className="h-full w-full blur-md lg:w-[50%] lg:blur-0">
                      <Image src={image} priority className="h-full w-full" alt="project-image" />
                    </div>
                    <div className="absolute z-10 flex h-full w-full flex-col justify-between lg:relative lg:w-[50%]">
                      <CardHeader>
                        <CardTitle>{name}</CardTitle>

                        <CardDescription>
                          <span
                            className={`block rounded-md bg-gray-200/20 p-1 text-gray-800 lg:hidden ${name === hoober && 'text-white'}`}
                          >
                            {small_description[lng]}
                          </span>

                          <span className="hidden lg:block">{full_description[lng]}</span>
                        </CardDescription>
                      </CardHeader>

                      <CardFooter className="hidden space-x-2 md:block">
                        {technologies.map((item, i) => {
                          return (
                            <Badge key={i} variant="primary">
                              {item}
                            </Badge>
                          );
                        })}
                      </CardFooter>
                    </div>
                  </Card>
                </CarouselItem>
              );
            },
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
