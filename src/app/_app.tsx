import type { AppProps } from 'next/app'
import HexabaseProvider from '@/contexts/hexabase-provider';
import { HexabaseClient, Project } from '@hexabase/hexabase-js';
import { useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
	return (
			<HexabaseProvider hexabaseInfo={{
				client: new HexabaseClient(),
			}}>
				<Component {...pageProps} />
			</HexabaseProvider>
	)
}
export default App