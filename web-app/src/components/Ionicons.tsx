import React from "react";
import * as Lucide from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  "home": Lucide.Home,
  "home-outline": Lucide.Home,
  "arrow-forward": Lucide.ArrowRight,
  "arrow-forward-outline": Lucide.ArrowRight,
  "time": Lucide.Clock,
  "time-outline": Lucide.Clock,
  "person": Lucide.User,
  "person-outline": Lucide.User,
  "notifications-outline": Lucide.Bell,
  "notifications-off-outline": Lucide.BellOff,
  "sunny-outline": Lucide.Sun,
  "partly-sunny-outline": Lucide.CloudSun,
  "moon-outline": Lucide.Moon,
  "chevron-back": Lucide.ChevronLeft,
  "chevron-forward": Lucide.ChevronRight,
  "chevron-up": Lucide.ChevronUp,
  "chevron-down": Lucide.ChevronDown,
  "add": Lucide.Plus,
  "add-circle-outline": Lucide.PlusCircle,
  "search": Lucide.Search,
  "link": Lucide.Link,
  "checkmark": Lucide.Check,
  "checkmark-circle": Lucide.CheckCircle2,
  "qr-code-outline": Lucide.QrCode,
  "share-outline": Lucide.Share2,
  "shield-checkmark-outline": Lucide.ShieldCheck,
  "business-outline": Lucide.Building2,
  "globe-outline": Lucide.Globe,
  "key-outline": Lucide.Key,
  "wallet-outline": Lucide.Wallet,
  "trending-up-outline": Lucide.TrendingUp,
  "logo-bitcoin": Lucide.Bitcoin,
  "leaf-outline": Lucide.Leaf,
  "card-outline": Lucide.CreditCard,
  "phone-portrait-outline": Lucide.Smartphone,
  "piggy-bank-outline": Lucide.PiggyBank,
  "bar-chart-outline": Lucide.BarChart3,
  "eye-outline": Lucide.Eye,
  "eye-off-outline": Lucide.EyeOff,
  "arrow-down-circle-outline": Lucide.ArrowDownCircle,
  "arrow-down": Lucide.ArrowDown,
};

interface Props {
  name: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const Ionicons = ({ name, size = 20, color = "currentColor", style }: Props) => {
  const IconComp = iconMap[name] || Lucide.HelpCircle;
  return <IconComp size={size} color={color} style={style} />;
};

export const MaterialCommunityIcons = Ionicons;
