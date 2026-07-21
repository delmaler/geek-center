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
    login: string;
    register: string;
    logout: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    home: string;
    ourStory: string;
    memberLogin: string;
    community: string;
    upcomingEvents: string;
    tournamentResults: string;
    gameLibrary: string;
    membershipPerks: string;
    stayConnected: string;
    newsletterPlaceholder: string;
    copyright: string;
  };
  home: {
    heroTitlePrefix: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    reserveTable: string;
    ourStory: string;
    whyTitle: string;
    whySubtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    buzzTitle: string;
    buzzSubtitle: string;
    testimonial1Quote: string;
    testimonial1Author: string;
    testimonial1Role: string;
    testimonial2Quote: string;
    testimonial2Author: string;
    testimonial2Role: string;
    testimonial3Quote: string;
    testimonial3Author: string;
    testimonial3Role: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  about: {
    title: string;
    storyP1: string;
    storyP2: string;
    imagePlaceholder: string;
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
    visitTitle: string;
    addressLine1: string;
    addressLine2: string;
    phone: string;
    email: string;
    mapPlaceholder: string;
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
    title: string;
    subtitle: string;
    comingSoonTitle: string;
    comingSoonDesc: string;
  };
  geekArt: {
    title: string;
    subtitle: string;
    comingSoonTitle: string;
    comingSoonDesc: string;
  };
  geekRPG: {
    title: string;
    subtitle: string;
    boardGamesTitle: string;
    boardGamesDesc: string;
    boardGamesCta: string;
    ttrpgTitle: string;
    ttrpgDesc: string;
    ttrpgCta: string;
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
}
