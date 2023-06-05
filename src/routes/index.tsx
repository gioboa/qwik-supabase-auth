import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { QSupabaseAuth } from '~/components/supabase-auth/supabase-auth';

export default component$(() => {
	return <QSupabaseAuth />;
});

export const head: DocumentHead = {
	title: 'Qwik + Supabase + Auth',
	meta: [{ name: 'description', content: 'Qwik + Supabase + Auth' }],
};
