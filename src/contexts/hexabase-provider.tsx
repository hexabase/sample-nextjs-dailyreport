"use client";
import { HexabaseContext, HexabaseInfo } from './hexabase';

type Props = {
  hexabaseInfo: HexabaseInfo
  children: React.ReactNode
}

const HexabaseProvider = ({ hexabaseInfo, children }: Props) => {
  return <HexabaseContext.Provider value={hexabaseInfo}>{children}</HexabaseContext.Provider>;
}

export default HexabaseProvider