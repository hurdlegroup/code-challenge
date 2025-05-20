import { config } from '@vue/test-utils';
import { vi } from "vitest";

import { route } from 'ziggy-js';
// @ts-ignore yes Ziggy is there.
import { Ziggy } from '@/ziggy';
import { createHeadManager } from '@inertiajs/core';
import Head from '@/Components/Testing/MockedHead.vue';

const pageProps = {
    props: {
        jetstream: {
            hasApiFeatures: true,
            hasTeamFeatures: true,
            canCreateTeams: true,
            managesProfilePhotos: true,
        },
        auth: {
            user: {
                name: 'test user',
                profile_photo_url: undefined,
                current_team_id: 1,
                current_team: {
                    id: 1,
                    name: 'my team',
                },
                all_teams: [],
            },
        },
    },
};

config.global.mocks = {
    route: (name, params) => route(name, params, undefined, Ziggy),
    '$page': pageProps,
}
config.global.components = {
    Head,
};

vi.mock('@inertiajs/vue3', async () => ({
    ...(await vi.importActual('@inertiajs/vue3')),
    usePage: () => pageProps,
}));

// fixes TypeError: Cannot read properties of undefined (reading 'createProvider')
const mockedHeadManager = createHeadManager(
    false,
    () => '',
    () => '',
);
config.global.mocks.$headManager = mockedHeadManager;
