<script setup>
import { ref } from 'vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import Modal from '@/Components/Modal.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { router, useForm } from '@inertiajs/vue3';
import { toMonetary } from '/resources/js/shared_functions.js';

const props = defineProps({
    ceremony: Object,
    expense: Object,
});

const form = useForm({
    ceremony_id: props.expense ? props.expense.ceremony_id : props.ceremony.id,
    name: props.expense ? props.expense.name : '',
    amount: props.expense ? props.expense.amount : 0,
});

const emit = defineEmits(['modal_open']);

const closeModal = () => {
    form.reset();
    emit('modal_open', false);
}

const create_expense = () => {
    form.post(route('ceremonies.create.expense'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
    });
}

const update_expense = () => {
    form.put(route('ceremonies.update.expense', props.expense.id), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
    });
}

const submit = () => {
    if (props.expense) update_expense();
    else create_expense();
}
</script>
<template>
    {{ expense }}
    <Modal :show="true">
        <div class="mt-5 mx-5">
            <div class="flex flex-row align-middle items-center space-x-2">
                <span class="bg-blue-100 p-2 rounded-full text-blue-400">
                    <PlusIcon class="w-5 h-5" />
                </span>
                <h2 class="text-2xl bold">Cadastrar Parcelas</h2>
            </div>
            <p class="text-xm text-gray-500 mt-3">Formulário para cadastro do parcelamento do pagamento da cerimônia</p>
        </div>
        <form id="create_task" @submit.prevent="submit" class="w-full">

            <div class="overflow-hidden m-5 md:m-0 p-5 sm:rounded-md bg-white sm:p-3 flex-col-config divide-y-2">
                <div class="w-full m-0 p-0 space-y-2">

                    <!-- Nome -->
                    <div class="w-full">
                        <label for="form_name" class="text-xs text-slate-700">Nome</label>
                        <input type="text" id="form_name" placeholder="Ex: Mais uma mesa de buffet" v-model="form.name"
                            class="w-full border-slate-300 sm:text-md" autofocus="true" />
                    </div>

                    <!-- Valor -->
                    <div class="w-full">
                        <label for="form_amount" class="text-xs text-slate-700">Valor (R$)</label>
                        <input type="number" step="0.01" min="0" id="form_amount" placeholder="Ex: R$ 123,45"
                            v-model="form.amount" class="w-full border-slate-300 sm:text-md" />
                    </div>

                    <div class="w-full px-4 py-3 sm:px-6 mt-5 text-right">
                        <SecondaryButton :type="'button'" class="ml-4" :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing" @click="closeModal">
                            Cancelar
                        </SecondaryButton>

                        <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Cadastrar
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </form>
    </Modal>
</template>