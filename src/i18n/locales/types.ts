export interface GmRecommendation {
  title: string;
  note: string;
}

export interface GmTranslation {
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  recommendations: GmRecommendation[];
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    events: string;
    contact: string;
    login: string;
    register: string;
    logout: string;
  };
  common: {
    featureStrip: {
      community: { title: string; desc: string };
      events: { title: string; desc: string };
      food: { title: string; desc: string };
      magic: { title: string; desc: string };
    };
  };
  footer: {
    tagline: string;
    locationTitle: string;
    viewOnMap: string;
    contactTitle: string;
    whatsapp: string;
    contactForm: string;
    privacyPolicy: string;
    termsOfUse: string;
    copyright: string;
  };
  home: {
    heroEyebrow: string;
    heroTitlePrefix: string;
    heroTitleHighlight: string;
    heroTitleSuffix: string;
    heroSubtitle: string;
    heroCta1: string;
    heroCta2: string;
    worlds: {
      cafe: { title: string; tagline: string; desc: string; cta: string };
      emporium: { title: string; tagline: string; desc: string; cta: string };
      rpg: { title: string; tagline: string; desc: string; cta: string };
    };
    upcomingEventsTitle: string;
    viewAllEvents: string;
    events: { month: string; day: string; weekday: string; title: string; meta: string; tag: string }[];
    highlightsTitle: string;
    highlights: { title: string; desc: string; cta: string }[];
  };
  about: {
    title: string;
    storyP1: string;
    storyP2: string;
    offeringsTitle: string;
    craftBrewsTitle: string;
    craftBrewsDesc: string;
    epicEatsTitle: string;
    epicEatsDesc: string;
    specialtyCoffeeTitle: string;
    specialtyCoffeeDesc: string;
    hoursTitle: string;
    hoursMonThu: string;
    hoursFriday: string;
    hoursSaturday: string;
    hoursSunday: string;
    timeMonThu: string;
    timeFriday: string;
    timeSaturday: string;
    timeSunday: string;
    addressLine1: string;
    addressLine2: string;
    phone: string;
    email: string;
  };
  login: {
    welcomeBack: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    signIn: string;
    noAccount: string;
    registerHere: string;
    errorFillFields: string;
  };
  register: {
    title: string;
    subtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    confirmPasswordLabel: string;
    createAccount: string;
    alreadyHaveAccount: string;
    loginHere: string;
    errorFillFields: string;
    errorPasswordMismatch: string;
  };
  reserve: {
    title: string;
    subtitle: string;
    pickDateTitle: string;
    pickDateDesc: string;
    chooseSlotTitle: string;
    chooseSlotDesc: string;
    selectTableTitle: string;
    selectTableDesc: string;
    dateLabel: string;
    guestsLabel: string;
    playersOption: string;
    timeSlotLabel: string;
    slotAfternoon: string;
    slotAfternoonTime: string;
    slotEvening: string;
    slotEveningTime: string;
    slotNight: string;
    slotNightTime: string;
    tableTypeLabel: string;
    tableStandard: string;
    tableLarge: string;
    tablePremium: string;
    feeNotice: string;
    confirmButton: string;
    confirmedTitle: string;
    confirmedMessage: string;
    summaryDate: string;
    summaryTime: string;
    summaryTable: string;
    summaryParty: string;
    summaryPartyValue: string;
    backToHome: string;
  };
  geekCafe: {
    eyebrow: string;
    tagline1: string;
    tagline2: string;
    subtitle: string;
    ctaMenu: string;
    ctaBook: string;
    dishesTitle: string;
    dishesSubtitle: string;
    dishes: { name: string; desc: string }[];
    viewAllDishes: string;
    drinksTitle: string;
    drinksSubtitle: string;
    drinks: { name: string; desc: string }[];
    viewAllDrinks: string;
    dessertsTitle: string;
    dessertsSubtitle: string;
    desserts: { name: string; desc: string }[];
    viewAllDesserts: string;
    menuTitle: string;
    menuSubtitle: string;
    categories: string[];
    viewFullMenu: string;
    eventsTitle: string;
    eventsSubtitle: string;
    viewAllEvents: string;
    events: { month: string; day: string; weekday: string; title: string; time: string; desc: string; tag: string }[];
  };
  geekEmporium: {
    eyebrow: string;
    tagline: string;
    subtitle: string;
    ctaExplore: string;
    treasuresTitle: string;
    treasures: { name: string; category: string; price: number }[];
    viewAllTreasures: string;
    categoriesTitle: string;
    categories: string[];
    browseAllCategories: string;
    newArrivalsTitle: string;
    newArrivals: { name: string; price: number }[];
    viewAllNew: string;
    creatorSpotlightTitle: string;
    creatorName: string;
    creatorTag: string;
    creatorDesc: string;
    viewCollection: string;
  };
  geekRPG: {
    eyebrow: string;
    tagline: string;
    subtitle: string;
    ctaBook: string;
    features: { title: string; desc: string }[];
    adventuresTitle: string;
    adventures: { title: string; desc: string; cta: string }[];
    howToJoinTitle: string;
    steps: { title: string; desc: string }[];
    groupCtaTitle: string;
    groupCtaDesc: string;
    groupCtaButton: string;
  };
  ttrpg: {
    title: string;
    subtitle: string;
    subtitleLinkPrefix: string;
    subtitleLinkText: string;
    subtitleLinkSuffix: string;
    meetGmsTitle: string;
    recommendsLabel: string;
    gms: GmTranslation[];
    postGameTitle: string;
    postGameDesc: string;
  };
  events: {
    eyebrow: string;
    title: string;
    subtitle: string;
    events: { month: string; day: string; weekday: string; title: string; time: string; location: string; desc: string; tag: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
  };
}
