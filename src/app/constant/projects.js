import { hooberBg, menaHomesBg, recoveryBg } from '../../../public/img';

export const PROJECTS = [
  {
    name: 'Hoober',
    small_description: {
      en: 'A mobile app and web dashboard for professional services organisations that transforms raw data into valuable insights, giving you a comprehensive view of your financial health and KPIs.',
      es: 'Una aplicación móvil y web para empresas de servicios que transforma los datos brutos en información valiosa, ofreciéndole una visión completa de su salud financiera y sus KPIs.',
    },
    full_description: {
      en: 'Hoober is an application designed to help small and medium sized businesses meet the challenges of a changing economy by facilitating efficient information management. By syncing their bank accounts and accounting through QuickBooks, businesses can access their financial status and history in real time within the app. Hoober allows businesses to set Key Performance Indicators (KPIs) such as targets and integrates seamlessly with CRM platforms such as Jobber and HouseCall Pro. In essence, Hoober serves as a comprehensive solution for tracking financials and ensuring that businesses meet their KPI targets.',
      es: 'Hoober es una aplicación diseñada para ayudar a las pequeñas y medianas empresas a afrontar los retos de una economía cambiante facilitando una gestión eficaz de la información. Al sincronizar sus cuentas bancarias y su contabilidad a través de QuickBooks, las empresas pueden acceder a su situación financiera y a su historial en tiempo real dentro de la aplicación. Hoober permite a las empresas establecer indicadores clave de rendimiento (KPI), como objetivos, y se integra perfectamente con plataformas CRM como Jobber y HouseCall Pro. En esencia, Hoober es una solución integral para hacer un seguimiento de las finanzas y garantizar que las empresas cumplen sus objetivos de KPI.',
    },
    image: hooberBg,
    technologies: ['Firebase', 'Mongo DB', 'Next.js', 'NestJS'],
  },
  {
    name: 'Recovery Delivered',
    small_description: {
      en: 'We developed a customised, HIPAA-compliant EHR that allows physicians to manage patients from a web dashboard and mobile application.',
      es: 'Desarrollamos una HCE personalizada y conforme a la HIPAA que permite a los médicos gestionar a los pacientes desde un panel web y una aplicación móvil.',
    },
    full_description: {
      en: 'The challenge was to create a HIPAA-compliant platform that would provide personalised medical care and support to patients, while providing physicians with a virtual administrative space with key features such as billing and online prescriptions.',
      es: 'El reto consistía en crear una plataforma que cumpliera la HIPAA y ofreciera atención médica personalizada y apoyo a los pacientes, al tiempo que proporcionaba a los médicos un espacio administrativo virtual con funciones clave como facturación y recetas en línea.',
    },
    image: recoveryBg,
    technologies: ['Cognito', 'Mongo DB', 'Next.js', 'Node JS'],
  },
  {
    name: 'Mena Homes',
    small_description: {
      en: 'A dynamic web application portal designed to revolutionise the real estate landscape across the MENA region.',
      es: 'Un portal dinámico de aplicaciones web diseñado para revolucionar el panorama inmobiliario en toda la región MENA.',
    },
    full_description: {
      en: 'Mena Homes tackled the complex task of integrating with the MENA region`s diverse real estate market while incorporating advanced AI capabilities. They strategically selected features that would enhance the user experience and platform efficiency, outperforming existing solutions in the market. Imajine successfully developed an innovative web application that overcame the challenges of integrating into the MENA real estate landscape. With a dedicated team of designers and developers, supported by local authorities and industry stakeholders, Imajine created the most innovative real estate platform in the region. By addressing the complexities of integration, Mena Homes is able to seize new growth opportunities and deliver unparalleled value to users across the MENA region.',
      es: 'Mena Homes abordó la compleja tarea de integrarse en el variado mercado inmobiliario de la región MENA incorporando al mismo tiempo funciones avanzadas de IA. Seleccionaron estratégicamente características que mejoraran la experiencia del usuario y la eficiencia de la plataforma, superando las soluciones existentes en el mercado. Imajine desarrolló con éxito una innovadora aplicación web que superó los retos de integración en el panorama inmobiliario de la región MENA. Con un equipo especializado de diseñadores y desarrolladores, apoyado por las autoridades locales y las partes interesadas del sector, Imajine creó la plataforma inmobiliaria más innovadora de la región. Al abordar las complejidades de la integración, Mena Homes es capaz de aprovechar nuevas oportunidades de crecimiento y ofrecer un valor inigualable a los usuarios de toda la región MENA.',
    },
    image: menaHomesBg,
    technologies: ['Firebase', 'Mongo DB', 'Next.js', 'NestJS'],
  },
];
