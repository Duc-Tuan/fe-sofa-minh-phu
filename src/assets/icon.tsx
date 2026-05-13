import { SVGProps } from "react";

import IconLogo from "./icons/IconLogo.svg";
import IconArrow from "./icons/IconArrow.svg";
import IconArrowLine from "./icons/IconArrowLine.svg";
import IconLanguage from "./icons/IconLanguage.svg";
import IconDown from "./icons/IconDown.svg";
import IconSearch from "./icons/IconSearch.svg";
import IconMenu from "./icons/IconMenu.svg";
import IconHeadquarters from "./icons/IconHeadquarters.svg";
import IconFactory from "./icons/IconFactory.svg";
import IconMap from "./icons/IconMap.svg";
import IconFacebook from "./icons/IconFacebook.svg";
import IconTiktok from "./icons/IconTiktok.svg";
import IconYoutobe from "./icons/IconYoutobe.svg";
import IconIntagram from "./icons/IconIntagram.svg";
import IconClose from "./icons/IconClose.svg";

import IconZalo from "./icons/IconZalo.svg";
import IconPhone from "./icons/IconPhone.svg";
import IconMessager from "./icons/IconMessager.svg";

import IconProcess1 from "./icons/IconProcess1.svg";
import IconProcess2 from "./icons/IconProcess2.svg";
import IconProcess3 from "./icons/IconProcess3.svg";
import IconProcess4 from "./icons/IconProcess4.svg";
import IconProcess5 from "./icons/IconProcess5.svg";
import IconProcess6 from "./icons/IconProcess6.svg";
import IconProcess7 from "./icons/IconProcess7.svg";

import IconChooseUs1 from "./icons/IconChooseUs1.svg";
import IconChooseUs2 from "./icons/IconChooseUs2.svg";
import IconChooseUs3 from "./icons/IconChooseUs3.svg";
import IconChooseUs4 from "./icons/IconChooseUs4.svg";

import IconWhy1 from "./icons/IconWhy1.svg";
import IconWhy2 from "./icons/IconWhy2.svg";
import IconWhy3 from "./icons/IconWhy3.svg";
import IconWhy4 from "./icons/IconWhy4.svg";

import IconPhoneV2 from "./icons/IconPhoneV2.svg";
import IconEmailV2 from "./icons/IconEmailV2.svg";
import IconLocalV2 from "./icons/IconLocalV2.svg";
import IconFacebookV2 from "./icons/IconFacebookV2.svg";

type IconProps = SVGProps<SVGSVGElement> & {
  name?: string;
};

export default function Icon({ name, className, ...props }: IconProps) {
  switch (name?.toLowerCase()) {
    case "icon-phone-v2":
      return <IconPhoneV2 className={className} {...props} />;
    case "icon-email-v2":
      return <IconEmailV2 className={className} {...props} />;
    case "icon-local-v2":
      return <IconLocalV2 className={className} {...props} />;
    case "icon-facebook-v2":
      return <IconFacebookV2 className={className} {...props} />;
    case "icon-why-1":
      return <IconWhy1 className={className} {...props} />;
    case "icon-why-2":
      return <IconWhy2 className={className} {...props} />;
    case "icon-why-3":
      return <IconWhy3 className={className} {...props} />;
    case "icon-why-4":
      return <IconWhy4 className={className} {...props} />;
    case "icon-choose-us-1":
      return <IconChooseUs1 className={className} {...props} />;
    case "icon-choose-us-2":
      return <IconChooseUs2 className={className} {...props} />;
    case "icon-choose-us-3":
      return <IconChooseUs3 className={className} {...props} />;
    case "icon-choose-us-4":
      return <IconChooseUs4 className={className} {...props} />;
    case "icon-process-1":
      return <IconProcess1 className={className} {...props} />;
    case "icon-process-2":
      return <IconProcess2 className={className} {...props} />;
    case "icon-process-3":
      return <IconProcess3 className={className} {...props} />;
    case "icon-process-4":
      return <IconProcess4 className={className} {...props} />;
    case "icon-process-5":
      return <IconProcess5 className={className} {...props} />;
    case "icon-process-6":
      return <IconProcess6 className={className} {...props} />;
    case "icon-process-7":
      return <IconProcess7 className={className} {...props} />;
    case "icon-close":
      return <IconClose className={className} {...props} />;
    case "icon-zalo":
      return <IconZalo className={className} {...props} />;
    case "icon-phone":
      return <IconPhone className={className} {...props} />;
    case "icon-messager":
      return <IconMessager className={className} {...props} />;
    case "icon-facebook":
      return <IconFacebook className={className} {...props} />;
    case "icon-tiktok":
      return <IconTiktok className={className} {...props} />;
    case "icon-youtobe":
      return <IconYoutobe className={className} {...props} />;
    case "icon-instagram":
      return <IconIntagram className={className} {...props} />;
    case "icon-map":
      return <IconMap className={className} {...props} />;
    case "icon-search":
      return <IconSearch className={className} {...props} />;
    case "icon-down":
      return <IconDown className={className} {...props} />;
    case "icon-language":
      return <IconLanguage className={className} {...props} />;
    case "icon-logo":
      return <IconLogo className={className} {...props} />;
    case "icon-arrow":
      return <IconArrow className={className} {...props} />;
    case "icon-arrow-line":
      return <IconArrowLine className={className} {...props} />;
    case "icon-menu":
      return <IconMenu className={className} {...props} />;
    case "icon-headquarters":
      return <IconHeadquarters className={className} {...props} />;
    case "icon-factory":
      return <IconFactory className={className} {...props} />;
    default:
      return null;
  }
}
