<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AppLayout from '@/Layouts/AppLayout.vue';
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

defineProps({
    sessions: Array,
});

const form = ref({
  title: '',
  starts_at: '',
  duration_minutes: 60
});

const fetchSessions = async () => {
  const { data } = await axios.get('/api/training-sessions');
  sessions.value = data;
};

const createSession = async () => {
  await axios.post('/api/training-sessions', form.value)
  await fetchSessions()
  form.value = { title: '', starts_at: '', duration_minutes: 60 };
};

onMounted(fetchSessions)
</script>
<style scoped>

</style>
<template>
    <AppLayout title="Training Sessions">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Training Sessions
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <h1 class="text-2xl font-bold mb-4">Sessions</h1>
                <form @submit.prevent="createSession" class="space-y-2 mb-6">
                    <TextInput v-model="form.title" placeholder="Title" required />
                    <TextInput v-model="form.starts_at" type="datetime-local" required />
                    <TextInput v-model="form.duration_minutes" type="number" placeholder="Duration (minutes)" required />
                    <PrimaryButton type="submit">Add Session</PrimaryButton>
                </form>

                <ul>
                    <li v-for="session in sessions" :key="session.id" class="mb-2">
                        {{ session.title }} – {{ session.starts_at }} ({{ session.duration_minutes }} mins)
                    </li>
                </ul>
            </div>
        </div>
    </AppLayout>
</template>
