"use client";
import { createContext } from 'react'
import { HexabaseClient, Project } from '@hexabase/hexabase-js';

export type HexabaseInfo = {
  client: HexabaseClient
}

export const HexabaseContext = createContext<HexabaseInfo>(
	{
		client: new HexabaseClient()
	}
);
