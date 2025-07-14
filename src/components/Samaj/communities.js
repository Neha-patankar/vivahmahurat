// // src/data/communityData.js

// export const communities = [
//   { name: 'अग्रवाल', english: 'Agrawal', icon: '👑', gradient: 'from-purple-500 to-pink-500' },
//   { name: 'माहेश्वरी', english: 'Maheshwari', icon: '🏛️', gradient: 'from-pink-500 to-red-500' },
//   { name: 'जांगड़ा पोरवाल', english: 'Jangra Porwal', icon: '⭐', gradient: 'from-red-500 to-purple-500' },
//   { name: 'दिगम्बर जैन', english: 'Digambar Jain', icon: '🕉️', gradient: 'from-purple-600 to-pink-600' },
//   { name: 'श्वेतांबर जैन', english: 'Shwetambar Jain', icon: '☸️', gradient: 'from-pink-600 to-red-600' },
//   { name: 'खंडेलवाल', english: 'Khandelwal', icon: '💎', gradient: 'from-red-600 to-purple-600' },
//   { name: 'विजयवर्गीय', english: 'Vijayvargiya', icon: '🏆', gradient: 'from-purple-500 to-red-500' },
//   { name: 'मोड माण्डलिया', english: 'Mod Mandliya', icon: '🌟', gradient: 'from-pink-500 to-purple-500' },
//   { name: 'नीमा', english: 'Nima', icon: '🌺', gradient: 'from-red-500 to-pink-500' },
//   { name: 'स्वर्णकार सोनी', english: 'Swarnkar Soni', icon: '✨', gradient: 'from-purple-400 to-pink-400' },
//   { name: 'ब्राह्मण', english: 'Brahmin', icon: '🙏', gradient: 'from-pink-400 to-red-400' },
//   { name: 'पुरवार पोरवाल', english: 'Purwar Porwal', icon: '🎭', gradient: 'from-red-400 to-purple-400' },
//   { name: 'मेडतवाल', english: 'Medtwal', icon: '🎨', gradient: 'from-purple-600 to-red-600' },
//   { name: 'नागर चित्तौड़ा', english: 'Nagar Chittoda', icon: '🏰', gradient: 'from-pink-600 to-purple-600' },
//   { name: 'अग्रहरि वैश्य', english: 'Agrahari Vaishya', icon: '🌅', gradient: 'from-red-600 to-pink-600' },
//   { name: 'लाड', english: 'Lad', icon: '🌸', gradient: 'from-purple-500 to-pink-500' },
//   { name: 'गंगराड़े पोरवाल', english: 'Gangarade Porwal', icon: '🌊', gradient: 'from-pink-500 to-red-500' },
//   { name: 'माथुर वैश्य', english: 'Mathur Vaishya', icon: '🏮', gradient: 'from-red-500 to-purple-500' },
//   { name: 'विशा नगर वणिक', english: 'Visha Nagar Vanik', icon: '🎪', gradient: 'from-purple-400 to-red-400' },
//   { name: 'दशा नीमा', english: 'Dasha Nima', icon: '🌙', gradient: 'from-pink-400 to-purple-400' },
//   { name: 'केसरवानी', english: 'Kesarwani', icon: '🌼', gradient: 'from-red-400 to-pink-400' },
//   { name: 'गुजराती मोड', english: 'Gujarati Mod', icon: '🎯', gradient: 'from-purple-600 to-pink-600' },
//   { name: 'नेमा', english: 'Nema', icon: '🌷', gradient: 'from-pink-600 to-red-600' },
//   { name: 'माहौर वैश्य', english: 'Mahour Vaishya', icon: '🏵️', gradient: 'from-red-600 to-purple-600' }
// ];


// src/data/communityData.js

export const communities = [
  { 
    id: 1,
    name: 'अग्रवाल', 
    english: 'Agrawal', 
    icon: '👑', 
    gradient: 'from-purple-500 to-pink-500',
    description: 'अग्रवाल समुदाय भारत के सबसे प्रतिष्ठित व्यापारिक समुदायों में से एक है। इनकी उत्पत्ति महाराज अग्रसेन के वंश से मानी जाती है।',
    englishDesc: 'The Agrawal community is one of India\'s most prestigious trading communities, believed to be descendants of King Agrasen.',
    gotra: ['गर्ग', 'गोयल', 'बंसल', 'मित्तल', 'सिंघल', 'तिंगल', 'मंगल', 'नागल', 'भंडारी', 'कंसल', 'मधुकुल', 'विजयवर्गीय', 'धारण', 'जिंदल', 'अग्रवाल', 'डालमिया', 'शर्मा', 'गुप्ता']
  },
  { 
    id: 2,
    name: 'माहेश्वरी', 
    english: 'Maheshwari', 
    icon: '🏛️', 
    gradient: 'from-pink-500 to-red-500',
    description: 'माहेश्वरी समुदाय राजस्थान के मूल निवासी हैं और भगवान शिव के अनुयायी हैं। ये व्यापार और कला में प्रसिद्ध हैं।',
    englishDesc: 'The Maheshwari community are natives of Rajasthan and followers of Lord Shiva, famous in trade and arts.',
    gotra: ['सोनी', 'बोहरा', 'कोठारी', 'सुराणा', 'दोशी', 'जोशी', 'शाह', 'दलाल', 'गांधी', 'मेहता', 'भगत', 'सेठ', 'वैद्य', 'केडिया', 'चुनावाला', 'भावसार']
  },
  { 
    id: 3,
    name: 'जांगड़ा पोरवाल', 
    english: 'Jangra Porwal', 
    icon: '⭐', 
    gradient: 'from-red-500 to-purple-500',
    description: 'जांगड़ा पोरवाल समुदाय राजस्थान के जांगलू इलाके से आते हैं। ये व्यापार और सामाजिक सेवा में अग्रणी हैं।',
    englishDesc: 'The Jangra Porwal community originates from the Janglu region of Rajasthan, leading in trade and social service.',
    gotra: ['जांगड़ा', 'पोरवाल', 'चौधरी', 'सैनी', 'गुप्ता', 'शर्मा', 'अग्रवाल', 'बंसल', 'गोयल', 'मित्तल', 'कुमार', 'वर्मा']
  },
  { 
    id: 4,
    name: 'दिगम्बर जैन', 
    english: 'Digambar Jain', 
    icon: '🕉️', 
    gradient: 'from-purple-600 to-pink-600',
    description: 'दिगम्बर जैन समुदाय जैन धर्म की एक प्रमुख शाखा है। अहिंसा और सत्य के सिद्धांतों को मानते हैं।',
    englishDesc: 'Digambar Jain is a major sect of Jainism following principles of non-violence and truth.',
    gotra: ['जैन', 'शाह', 'सेठ', 'कोठारी', 'दोशी', 'गांधी', 'मेहता', 'भगत', 'सोनी', 'बोहरा', 'छाबड़ा', 'जांगिड़', 'सिंघई', 'गालव', 'वैश्य']
  },
  { 
    id: 5,
    name: 'श्वेतांबर जैन', 
    english: 'Shwetambar Jain', 
    icon: '☸️', 
    gradient: 'from-pink-600 to-red-600',
    description: 'श्वेतांबर जैन समुदाय जैन धर्म की दूसरी प्रमुख शाखा है। श्वेत वस्त्र धारण करते हैं और तीर्थंकरों की पूजा करते हैं।',
    englishDesc: 'Shwetambar Jain is the second major sect of Jainism, wearing white clothes and worshipping Tirthankaras.',
    gotra: ['जैन', 'शाह', 'सेठ', 'गांधी', 'मेहता', 'दोशी', 'कोठारी', 'भगत', 'सोनी', 'बोहरा', 'पारीक', 'छाबड़ा', 'जांगिड़', 'सिंघई', 'गालव']
  },
  { 
    id: 6,
    name: 'खंडेलवाल', 
    english: 'Khandelwal', 
    icon: '💎', 
    gradient: 'from-red-600 to-purple-600',
    description: 'खंडेलवाल समुदाय राजस्थान के खंडेला से उत्पन्न हुआ है। ये व्यापार और शिक्षा में अग्रणी हैं।',
    englishDesc: 'The Khandelwal community originated from Khandela in Rajasthan, leading in business and education.',
    gotra: ['खंडेलवाल', 'अग्रवाल', 'गोयल', 'बंसल', 'मित्तल', 'गुप्ता', 'शर्मा', 'जिंदल', 'सिंघल', 'मंगल', 'नागल', 'धारण', 'तिंगल', 'कंसल', 'भंडारी']
  },
  { 
    id: 7,
    name: 'विजयवर्गीय', 
    english: 'Vijayvargiya', 
    icon: '🏆', 
    gradient: 'from-purple-500 to-red-500',
    description: 'विजयवर्गीय समुदाय अपनी विजय परंपरा के लिए प्रसिद्ध है। राजनीति और व्यापार में सक्रिय हैं।',
    englishDesc: 'The Vijayvargiya community is famous for its victory tradition, active in politics and business.',
    gotra: ['विजयवर्गीय', 'वर्गीय', 'अग्रवाल', 'गोयल', 'बंसल', 'मित्तल', 'गुप्ता', 'शर्मा', 'सिंघल', 'जिंदल', 'खंडेलवाल', 'धारण']
  },
  { 
    id: 8,
    name: 'मोड माण्डलिया', 
    english: 'Mod Mandliya', 
    icon: '🌟', 
    gradient: 'from-pink-500 to-purple-500',
    description: 'मोड माण्डलिया समुदाय राजस्थान की एक प्राचीन जाति है। कला और संस्कृति में योगदान के लिए प्रसिद्ध हैं।',
    englishDesc: 'Mod Mandliya is an ancient community from Rajasthan, famous for contributions to art and culture.',
    gotra: ['मोड', 'माण्डलिया', 'शर्मा', 'गुप्ता', 'अग्रवाल', 'वर्मा', 'सिंह', 'कुमार', 'चौधरी', 'जैन', 'सेठ', 'भगत']
  },
  { 
    id: 9,
    name: 'नीमा', 
    english: 'Nima', 
    icon: '🌺', 
    gradient: 'from-red-500 to-pink-500',
    description: 'नीमा समुदाय मध्य प्रदेश और राजस्थान में निवास करते हैं। व्यापार और कृषि में संलग्न हैं।',
    englishDesc: 'The Nima community resides in Madhya Pradesh and Rajasthan, engaged in trade and agriculture.',
    gotra: ['नीमा', 'नेमा', 'शर्मा', 'गुप्ता', 'वर्मा', 'अग्रवाल', 'जैन', 'सेठ', 'भगत', 'कुमार', 'सिंह', 'चौधरी']
  },
  { 
    id: 10,
    name: 'स्वर्णकार सोनी', 
    english: 'Swarnkar Soni', 
    icon: '✨', 
    gradient: 'from-purple-400 to-pink-400',
    description: 'स्वर्णकार सोनी समुदाय स्वर्ण और आभूषण कला में निपुण हैं। पारंपरिक शिल्पकार हैं।',
    englishDesc: 'The Swarnkar Soni community is skilled in gold and jewelry art, traditional craftsmen.',
    gotra: ['सोनी', 'सुनार', 'स्वर्णकार', 'शर्मा', 'गुप्ता', 'वर्मा', 'अग्रवाल', 'जैन', 'सेठ', 'भगत', 'कुमार', 'सिंह']
  },
  { 
    id: 11,
    name: 'ब्राह्मण', 
    english: 'Brahmin', 
    icon: '🙏', 
    gradient: 'from-pink-400 to-red-400',
    description: 'ब्राह्मण समुदाय वेदों और शास्त्रों के ज्ञाता हैं। धार्मिक अनुष्ठानों और शिक्षा में अग्रणी हैं।',
    englishDesc: 'The Brahmin community are knowledgeable in Vedas and scriptures, leading in religious rituals and education.',
    gotra: ['शर्मा', 'त्रिवेदी', 'चतुर्वेदी', 'द्विवेदी', 'पाण्डेय', 'मिश्रा', 'तिवारी', 'उपाध्याय', 'ओझा', 'शुक्ल', 'व्यास', 'जोशी', 'भट्ट', 'आचार्य', 'पुरोहित']
  },
  { 
    id: 12,
    name: 'पुरवार पोरवाल', 
    english: 'Purwar Porwal', 
    icon: '🎭', 
    gradient: 'from-red-400 to-purple-400',
    description: 'पुरवार पोरवाल समुदाय व्यापार और कला में कुशल हैं। उत्तर भारत में व्यापक रूप से फैले हैं।',
    englishDesc: 'The Purwar Porwal community is skilled in trade and arts, widely spread in North India.',
    gotra: ['पुरवार', 'पोरवाल', 'अग्रवाल', 'गोयल', 'बंसल', 'मित्तल', 'गुप्ता', 'शर्मा', 'जैन', 'सेठ', 'भगत', 'कुमार']
  },
  { 
    id: 13,
    name: 'मेडतवाल', 
    english: 'Medtwal', 
    icon: '🎨', 
    gradient: 'from-purple-600 to-red-600',
    description: 'मेडतवाल समुदाय राजस्थान के मेड़ता से उत्पन्न हुआ है। व्यापार और सामाजिक सेवा में सक्रिय हैं।',
    englishDesc: 'The Medtwal community originated from Medta in Rajasthan, active in trade and social service.',
    gotra: ['मेडतवाल', 'मेड़तवाल', 'शर्मा', 'गुप्ता', 'अग्रवाल', 'वर्मा', 'जैन', 'सेठ', 'भगत', 'कुमार', 'सिंह', 'चौधरी']
  },
  { 
    id: 14,
    name: 'नागर चित्तौड़ा', 
    english: 'Nagar Chittoda', 
    icon: '🏰', 
    gradient: 'from-pink-600 to-purple-600',
    description: 'नागर चित्तौड़ा समुदाय चित्तौड़गढ़ से संबंधित है। वीरता और व्यापार की परंपरा रखते हैं।',
    englishDesc: 'The Nagar Chittoda community is related to Chittorgarh, maintaining traditions of valor and trade.',
    gotra: ['नागर', 'चित्तौड़ा', 'शर्मा', 'गुप्ता', 'अग्रवाल', 'वर्मा', 'जैन', 'सेठ', 'भगत', 'कुमार', 'सिंह', 'चौधरी']
  },
  { 
    id: 15,
    name: 'अग्रहरि वैश्य', 
    english: 'Agrahari Vaishya', 
    icon: '🌅', 
    gradient: 'from-red-600 to-pink-600',
    description: 'अग्रहरि वैश्य समुदाय व्यापारिक गतिविधियों में संलग्न हैं। उत्तर प्रदेश और बिहार में मुख्यतः निवास करते हैं।',
    englishDesc: 'The Agrahari Vaishya community is engaged in trading activities, mainly residing in Uttar Pradesh and Bihar.',
    gotra: ['अग्रहरि', 'वैश्य', 'गुप्ता', 'शर्मा', 'अग्रवाल', 'वर्मा', 'जैन', 'सेठ', 'भगत', 'कुमार', 'सिंह', 'चौधरी']
  },
  { 
    id: 16,
    name: 'लाड', 
    english: 'Lad', 
    icon: '🌸', 
    gradient: 'from-purple-500 to-pink-500',
    description: 'लाड समुदाय गुजरात के लाटी क्षेत्र से संबंधित है। व्यापार और कृषि में संलग्न हैं।',
    englishDesc: 'The Lad community is related to the Lati region of Gujarat, engaged in trade and agriculture.',
    gotra: ['लाड', 'शाह', 'पटेल', 'गुप्ता', 'शर्मा', 'मेहता', 'दोशी', 'गांधी', 'जैन', 'सेठ', 'भगत', 'कुमार']
  },
  { 
    id: 17,
    name: 'गंगराड़े पोरवाल', 
    english: 'Gangarade Porwal', 
    icon: '🌊', 
    gradient: 'from-pink-500 to-red-500',
    description: 'गंगराड़े पोरवाल समुदाय गंगा के तट से जुड़ा है। व्यापार और धार्मिक गतिविधियों में सक्रिय हैं।',
    englishDesc: 'The Gangarade Porwal community is connected to the banks of Ganga, active in trade and religious activities.',
    gotra: ['गंगराड़े', 'पोरवाल', 'अग्रवाल', 'गोयल', 'बंसल', 'मित्तल', 'गुप्ता', 'शर्मा', 'जैन', 'सेठ', 'भगत', 'कुमार']
  },
  { 
    id: 18,
    name: 'माथुर वैश्य', 
    english: 'Mathur Vaishya', 
    icon: '🏮', 
    gradient: 'from-red-500 to-purple-500',
    description: 'माथुर वैश्य समुदाय मथुरा क्षेत्र से संबंधित है। व्यापार और कृष्ण भक्ति में प्रसिद्ध हैं।',
    englishDesc: 'The Mathur Vaishya community is related to Mathura region, famous for trade and Krishna devotion.',
    gotra: ['माथुर', 'वैश्य', 'गुप्ता', 'शर्मा', 'अग्रवाल', 'वर्मा', 'जैन', 'सेठ', 'भगत', 'कुमार', 'सिंह', 'चौधरी']
  },
  { 
    id: 19,
    name: 'विशा नगर वणिक', 
    english: 'Visha Nagar Vanik', 
    icon: '🎪', 
    gradient: 'from-purple-400 to-red-400',
    description: 'विशा नगर वणिक समुदाय व्यापारिक कार्यों में संलग्न हैं। गुजरात और राजस्थान में मुख्यतः निवास करते हैं।',
    englishDesc: 'The Visha Nagar Vanik community is engaged in commercial activities, mainly residing in Gujarat and Rajasthan.',
    gotra: ['विशा', 'नगर', 'वणिक', 'शाह', 'पटेल', 'गुप्ता', 'शर्मा', 'मेहता', 'दोशी', 'गांधी', 'जैन', 'सेठ']
  },
  { 
    id: 20,
    name: 'दशा नीमा', 
    english: 'Dasha Nima', 
    icon: '🌙', 
    gradient: 'from-pink-400 to-purple-400',
    description: 'दशा नीमा समुदाय मध्य प्रदेश में निवास करते हैं। पारंपरिक व्यापार और कृषि में संलग्न हैं।',
    englishDesc: 'The Dasha Nima community resides in Madhya Pradesh, engaged in traditional trade and agriculture.',
    gotra: ['दशा', 'नीमा', 'नेमा', 'शर्मा', 'गुप्ता', 'वर्मा', 'अग्रवाल', 'जैन', 'सेठ', 'भगत', 'कुमार', 'सिंह']
  },
  { 
    id: 21,
    name: 'केसरवानी', 
    english: 'Kesarwani', 
    icon: '🌼', 
    gradient: 'from-red-400 to-pink-400',
    description: 'केसरवानी समुदाय केसर के व्यापार से जुड़ा है। उत्तर प्रदेश और बिहार में मुख्यतः निवास करते हैं।',
    englishDesc: 'The Kesarwani community is connected to saffron trade, mainly residing in Uttar Pradesh and Bihar.',
    gotra: ['केसरवानी', 'केसरी', 'गुप्ता', 'शर्मा', 'अग्रवाल', 'वर्मा', 'जैन', 'सेठ', 'भगत', 'कुमार', 'सिंह', 'चौधरी']
  },
  { 
    id: 22,
    name: 'गुजराती मोड', 
    english: 'Gujarati Mod', 
    icon: '🎯', 
    gradient: 'from-purple-600 to-pink-600',
    description: 'गुजराती मोड समुदाय गुजरात की मूल जाति है। व्यापार और उद्योग में अग्रणी हैं।',
    englishDesc: 'The Gujarati Mod community is a native caste of Gujarat, leading in trade and industry.',
    gotra: ['मोड', 'शाह', 'पटेल', 'गुप्ता', 'शर्मा', 'मेहता', 'दोशी', 'गांधी', 'जैन', 'सेठ', 'भगत', 'कुमार']
  },
  { 
    id: 23,
    name: 'नेमा', 
    english: 'Nema', 
    icon: '🌷', 
    gradient: 'from-pink-600 to-red-600',
    description: 'नेमा समुदाय मध्य प्रदेश और राजस्थान में निवास करते हैं। व्यापार और कृषि में संलग्न हैं।',
    englishDesc: 'The Nema community resides in Madhya Pradesh and Rajasthan, engaged in trade and agriculture.',
    gotra: ['नेमा', 'नीमा', 'शर्मा', 'गुप्ता', 'वर्मा', 'अग्रवाल', 'जैन', 'सेठ', 'भगत', 'कुमार', 'सिंह', 'चौधरी']
  },
  { 
    id: 24,
    name: 'माहौर वैश्य', 
    english: 'Mahour Vaishya', 
    icon: '🏵️', 
    gradient: 'from-red-600 to-purple-600',
    description: 'माहौर वैश्य समुदाय व्यापारिक गतिविधियों में संलग्न हैं। उत्तर प्रदेश और मध्य प्रदेश में मुख्यतः निवास करते हैं।',
    englishDesc: 'The Mahour Vaishya community is engaged in trading activities, mainly residing in Uttar Pradesh and Madhya Pradesh.',
    gotra: ['माहौर', 'वैश्य', 'गुप्ता', 'शर्मा', 'अग्रवाल', 'वर्मा', 'जैन', 'सेठ', 'भगत', 'कुमार', 'सिंह', 'चौधरी']
  }
];