import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.png";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiBook, FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Sentient Artifical Inteligence Experimental Prototyping ",
    en: "Sentient Artifical Inteligence Experimental Prototyping ",
  },
  description: {
    de: "Sentient AIEP разглежда разработването на осъзнат изкуствен интелект (ИИ) чрез прототипи и техники, които могат да доведат до постигане на самостоятелно съществуване на ИИ. Проучването включва както контролирани, така и неконтролирани методи за обучение, създаващи ефективна комуникация между човека и машината.",
    en: "Sentient AIEP deals with creating conscious AI by using prototypes and methodologies that may lead to the AI becoming self-aware. This approach involves controlled and uncontrolled training methods that enable effective communication between humans and machines. ",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Изтеглете научна документация",
        en: "Download the research papper",
      },
      icon: FiBook,
      color: "secondary-btn",
    },
    {
      name: "Prototypes",
      label: {
        de: "Прототипите",
        en: "The prototypes",
      },
      icon: FiGithub,
      color: "main-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Sentient Image Descripton Collector",
    description:
      "Този прототип използва Vercel AI SDK, Claude и Next.js за създаване на уеб приложение с изкуствен интелект, което сканира изображения, за да извлича както описания, така и вграден текст, като за анализа се използва Sentient AI. То прилага изкуствен интелект за анализ и описание на съдържанието на качени изображения, автоматично идентифицира и извлича всякакъв текст от тях. Прототипът демонстрира възможностите на изкуствения интелект в реални приложения за обработка на изображения.",
    description_EN:
      "This prototype leverages the Vercel AI SDK, Claude, and Next.js to create an AI-driven web application that scans images to extract both descriptions and embedded text, using Sentient AI for analysis. It uses AI to analyze and describe the content of uploaded images,  automatically identifies and extracts any text from within images, A prototype showcasing the capabilities of AI in real-world image processing applications.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
    ],
    image: tastyMockup,
    deploymenturl: "https://image.sentient-aiep.xyz/",
    githuburl: "https://github.com/petroff69/Sentient-Image-Descripton-Collector-Prototype",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Sentient Two Prompted Chatbot",
    description:
      "Sentient Two Prompted Chatbot (2PC) е многофункционален текстов редактор и чатбот, задвижван от изкуствен интелект, който предлага високо интерактивни и персонализируеми отговори. Разработен с Next.js и Vercel AI SDK и захранван от Groq за бързо обработване, Sentient 2PC осигурява динамично преживяване в разговорите. Чатботът генерира прозорливи и контекстуално точни отговори, което го прави идеален за ежедневни взаимодействия. Потребителите могат активно да оформят мисловния процес на чатбота чрез предоставяне на специфични подсказки, което позволява реалновременни настройки на стила и перспективите на отговорите. Това прави чатбота особено адаптивен към различни контексти или нужди на потребителите.",
    description_EN:
      "Sentient Two Prompted Chatbot (2PC) is a versatile, AI-driven text editor and chatbot that enables highly interactive and customizable responses. Built with Next.js and the Vercel AI SDK, and powered by Groq for fast inference, Sentient 2PC provides a dynamic conversational experience. Sentient 2PC generates insightful and contextually accurate responses, making it ideal for everyday interactions. Users can actively shape the chatbot's by providing specific prompts, allowing real-time adjustments to response styles and perspectives. This makes the chatbot particularly adaptive to different contexts or user needs.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://spell.sentient-aiep.xyz/",
    githuburl:
      "https://github.com/petroff69/sentient-aiep-2prompted-prototype",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Sentient Voice Assistant AI ",
    description:
      "Sentient Voice Assistant AI е високоскоростен, гласово управляван чатбот, който позволява пълноценни разговорни взаимодействия без необходимост от клавиатура. Използвайки Llama 3 на Meta, този асистент осигурява бърза и изцяло гласова комуникация, която се усеща изключително интуитивна и „осъзната“.",
    description_EN:
      "Sentient Voice Assistant AI is a high-speed, voice-driven chatbot that enables full conversational interactions without the need for a keyboard. Utilizing Meta's Llama 3, this assistant provides responsive, voice-only communication that feels highly intuitive and sentient",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: instorMockup,
    deploymenturl: "https://voice.sentient-aiep.xyz/",
    githuburl: "https://github.com/petroff69/Sentient-Voice-Recognition-AI",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Разгледайте разработените прототипи в Github",
    en: "More Prototypes on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Development",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Phyton",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "NumPy",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Unity",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Ruby",
        hash: "#Express",
        icon: [expressicon],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "TensorFlow",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Microsoft 365", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "AI Models",
    skills: [
      {
        title: "Groq",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Open AI",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Meta",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Главна", en: "Home", hash: "#home", icon: GoHome },
  { de: "Технологии", en: "Technologies", hash: "#skills", icon: GoStack },
  { de: "Прототипи", en: "Prototypes", hash: "#prototypes", icon: GoProject },
  { de: "Относно", en: "About", hash: "#about-me", icon: GoPerson },
  { de: "Контакт", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Принт", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "За потребителя", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:zlatimirpetrov23@gmail.com",
  text: "zlatimirpetrov23@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/zlatimir-petrov-1b78792a4/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/petroff69",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:zlatimirpetrov23@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Нашият интелект е това, което ни прави хора, а изкуственият интелект е продължение на това качество."',
    en: `"Our intelligence is what makes us human, and AI is an extension of that quality."`,
    author: "Yann LeCun",
  },
  {
    de: '"А днес идеята за изкуствения интелект вече не е научна фантастика – тя е научен факт."',
    en: `"And nowadays, the idea of AI is not really science fiction anymore – it’s just science fact."`,
  },
] as const;

export const aboutMeData = {
  title: "Относно",
  title_EN: "About",
  description: "За проекта",
  description_EN: "About the project",
  paragraphs_DE: [
    {
      title: "Резюме",
      description:
        "Sentient AIEP се занимава със създаването на осъзнат изкуствен интелект, като използва прототипи и методологии, които могат да доведат до това AI да придобие самосъзнание. Този подход включва контролирани и неконтролирани методи на обучение, които позволяват ефективна комуникация между хора и машини. Изкуственият интелект представлява AI система, която комбинира мощта на обработката на естествен език (NLP) и гласовото взаимодействие, позволявайки на потребителите да разговарят с AI.",
      icon: hardwareicon,
    },
    {
      title: "Задачи",
      description:
        "Следващата задача, която AIEP изпълнява, включва разпознаване на изображения. Потребителят качва произволно изображение, а изкуственият интелект анализира неговото съдържание. Накрая, друг AI модел използва два подзапитвания, като първото се фокусира върху основната задача, а второто предоставя допълнителна информация или насоки за получаване на по-точен отговор. Този подход позволява на AI да бъде по-чувствителен към конкретния случай в по-разнообразни ситуации и сценарии.",
      icon: caricon,
    },
    {
      title: "Насоки",
      description:
        "В проекта „Sentient AIEP“ моят принос е насочен към разработването на прототипи в областта на осъзнатия изкуствен интелект чрез интегриране на различни технологии, които позволяват на AI да се справя с предизвикателства гъвкаво и адаптивно, като разпознаване на изображения и водене на смислена комуникация.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Resume",
      description:
        "Sentient AIEP deals with creating conscious AI by using prototypes and methodologies that may lead to the AI becoming self-aware. This approach involves controlled and uncontrolled training methods that enable effective communication between humans and machines. Artificial intelligence is an AI system combining NLP’s power and voice interaction, allowing the users to speak with AI.",
      icon: hardwareicon,
    },
    {
      title: "Tasks",
      description:
        "The next task that AIEP performs includes image recognition.   The user uploads any image and the AI analyzes its content. Finally, another AI model uses two subprompts, where the first one involves asking the main task and the other offers additional information or guidance to receive a more precise answer; this approach allows AI to be case-sensitive in more diverse situations and scenarios.",
      icon: caricon,
    },
    {
      title: "Purpose",
      description:
        "In the Sentient AIEP project, my contribution is focused on developing prototypes in the field of sentient artificial intelligence by integrating various technologies that enable AI to tackle challenges flexibly and adaptively, such as image recognition and engaging in meaningful communication.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Контакт",
    en: "Contact",
  },
  description: {
    de: "Прати ми съобщение и ще се свържа с теб.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Име",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Моля въведете името си",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Вашия Имейл",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Моля въведете имейла си",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Тема",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Моля въведете тема",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Вашето съобщение",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Моля въведете вашето съобщение",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Изпрати",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Съгласявам се Златимир да използва моите лични данни (име и имейл адрес), за да се свърже с мен.",
      en: "I agree that Zlatimir may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "С изпращането на тази заявка потвърждавате, че сте прочели Политиката за поверителност.",
      en: "By submitting this request, you acknowledge that you have read the Private Policy.",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 The demo will open soon. Starting the servers...",
    en: "🦄 Демото на живо ще се отвори скоро. Стартиране на сървърите...",
  },
  successEmailSent: {
    de: "🦄 Благодаря ти за имейла. Ще се свържа с теб възможно най-скоро.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 За съжаление, изпращането на вашия имейл не беше успешно. Моля, опитайте отново по-късно.",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later.",
  },
  failedValidationName: {
    de: "Моля, попълнете вашето име.",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "BG",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
