// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { useNavigate } from '@builder.io/qwik-city';
import { qwikify$ } from '@builder.io/qwik-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { getSupabaseClient } from '~/server/supabase';

const SupabaseAuth = () => {
	const supabaseClient = getSupabaseClient();

	useEffect(() => {
		supabaseClient.auth.onAuthStateChange((_event, session) => {
			if (session) {
				console.log('session', session)
				alert('Logged');
			}
		});
	}, []);
	return (
		<Auth
			supabaseClient={supabaseClient}
			appearance={{
				theme: ThemeSupa,
				style: {
					button: {
						borderRadius: '5px',
						borderColor: 'rgba(0,0,0,0)',
					},
				},
				variables: {
					default: {
						colors: {
							brand: 'rgb(202, 37, 37)',
							brandAccent: `gray`,
						},
					},
				},
			}}
			socialLayout={'vertical'}
			theme={'dark'}
		/>
	);
};

// Qwik component wrapping the React component
export const QSupabaseAuth = qwikify$(SupabaseAuth, { eagerness: 'visible' });
