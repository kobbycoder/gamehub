import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiNintendo,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
  SiPlaystationvita,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    macos: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    playstation5: SiPlaystation5,
    playstation4: SiPlaystation4,
    playstation3: SiPlaystation3,
    "xbox-series-x": FaXbox,
    "nintendo-switch": SiNintendo,
    "xbox-one": FaXbox,
    "ps-vita": SiPlaystationvita,
    xbox360: FaXbox,
  };

  return (
    <HStack marginY={1}>
      {platform.map((platformData) => (
        <Icon key={platformData.id} as={iconsMap[platformData.slug]} color="gray.500"/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
