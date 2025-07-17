import {
  Star, Flower, Calendar, Heart, Users, Sun, Music, BookOpen, Handshake, Gift,
  Moon, Camera, Smile, Globe, Home
} from "lucide-react";

export const rituals = [
  {
    id: 1,
    name: "रोका समारोह",
    category: "Pre-Wedding",
    icon: Calendar,
    color: "bg-gradient-to-br from-blue-500 to-purple-500",
    description: "विवाह की आधिकारिक घोषणा और परिवारों की सहमति।",
    link: "/services/roka"
  },
  {
    id: 2,
    name: "गणेश पूजा",
    category: "Pre-Wedding",
    icon: Star,
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    description: "विवाह के मंगल आरंभ हेतु भगवान गणेश की पूजा।",
    link: "/services/ganesh-pooja"
  },
  {
    id: 3,
    name: "माता पूजा",
    category: "Pre-Wedding",
    icon: Flower,
    color: "bg-gradient-to-br from-pink-400 to-purple-500",
    description: "विवाह के लिए देवी माँ का आशीर्वाद प्राप्त करना।",
    link: "/services/mata-pooja"
  },
  {
    id: 4,
    name: "तिलक",
    category: "Wedding",
    icon: Heart,
    color: "bg-gradient-to-br from-red-500 to-yellow-400",
    description: "दुल्हे को सम्मानित करने हेतु कन्या पक्ष द्वारा किया गया संस्कार।",
    link: "/services/tilak"
  },
  {
    id: 5,
    name: "हल्दी",
    category: "Wedding",
    icon: Users,
    color: "bg-gradient-to-br from-yellow-400 to-green-400",
    description: "दूल्हा-दुल्हन को शुभता और सुंदरता हेतु हल्दी लगाई जाती है।",
    link: "/services/haldi"
  },
  {
    id: 6,
    name: "मेहंदी",
    category: "Wedding",
    icon: Sun,
    color: "bg-gradient-to-br from-green-400 to-yellow-500",
    description: "दुल्हन व अन्य महिलाओं के हाथों पर मेहंदी रचाई जाती है।",
    link: "/services/mehendi"
  },
  {
    id: 7,
    name: "संगीत",
    category: "Wedding",
    icon: Music,
    color: "bg-gradient-to-br from-purple-600 to-indigo-600",
    description: "विवाह से पूर्व गीत-संगीत और नृत्य का आयोजन।",
    link: "/services/sangeet"
  },
  {
    id: 8,
    name: "बारात",
    category: "Wedding",
    icon: Moon,
    color: "bg-gradient-to-br from-gray-600 to-blue-600",
    description: "दूल्हा और बारातियों का विवाह स्थल तक जुलूस।",
    link: "/services/baraat"
  },
  {
    id: 9,
    name: "मंडप व्यवस्था",
    category: "Wedding",
    icon: Home,
    color: "bg-gradient-to-br from-yellow-500 to-amber-600",
    description: "विवाह संस्कार हेतु मंडप की सुंदर सजावट।",
    link: "/services/mandap-arrangement"
  },
  {
    id: 10,
    name: "वरमाला",
    category: "Wedding",
    icon: BookOpen,
    color: "bg-gradient-to-br from-red-600 to-pink-500",
    description: "दूल्हा-दुल्हन द्वारा एक-दूसरे को फूलों की माला पहनाना।",
    link: "/services/varmala"
  },
  {
    id: 11,
    name: "कन्यादान",
    category: "Wedding",
    icon: Handshake,
    color: "bg-gradient-to-br from-yellow-600 to-orange-600",
    description: "पिता द्वारा कन्या को वर को समर्पित करना।",
    link: "/services/kanyadaan"
  },
  {
    id: 12,
    name: "फेरे",
    category: "Wedding",
    icon: Gift,
    color: "bg-gradient-to-br from-purple-600 to-pink-400",
    description: "अग्नि के चारों ओर सात फेरे और सात वचन।",
    link: "/services/phere"
  },
  {
    id: 13,
    name: "फोटोग्राफी",
    category: "Wedding",
    icon: Camera,
    color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    description: "हर पल को यादगार बनाने के लिए फोटोज़।",
    link: "/services/photography"
  },
  {
    id: 14,
    name: "विदाई",
    category: "Post-Wedding",
    icon: Globe,
    color: "bg-gradient-to-br from-orange-500 to-red-600",
    description: "दुल्हन का भावुक रूप से अपने मायके से विदा लेना।",
    link: "/services/bidai"
  },
  {
    id: 15,
    name: "गृह प्रवेश",
    category: "Post-Wedding",
    icon: Home,
    color: "bg-gradient-to-br from-green-600 to-blue-500",
    description: "दुल्हन का ससुराल में पहला प्रवेश।",
    link: "/services/griha-pravesh"
  },
  {
    id: 16,
    name: "रिसेप्शन",
    category: "Post-Wedding",
    icon: Smile,
    color: "bg-gradient-to-br from-indigo-500 to-teal-500",
    description: "नवविवाहित जोड़े के स्वागत हेतु आयोजन।",
    link: "/services/reception"
  }
];
