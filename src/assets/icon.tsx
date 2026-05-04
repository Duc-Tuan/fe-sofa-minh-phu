import { SVGProps } from "react";

import IconLogo from "./icons/IconLogo.svg";
import IconArrow from "./icons/IconArrow.svg";
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

type IconProps = SVGProps<SVGSVGElement> & {
  name?: string;
};

export default function Icon({ name, className, ...props }: IconProps) {
  switch (name?.toLowerCase()) {
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
