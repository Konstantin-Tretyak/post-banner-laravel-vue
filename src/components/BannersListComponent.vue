<template>
    <div class="container mt-5">
        <h2 class="mb-4">Banners Data Table</h2>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="banner in getBanners" :key="banner.id">
                <td>{{ banner.id }}</td>
                <td>{{ banner.name }}</td>
                <td>
                    <b-button class="btn btn-primary" @click="showModal(banner)">View Details</b-button>
                </td>
            </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <b-modal id="bannerDetailsModal" @hidden="closeModal">
            <template #modal-title>Related Models</template>
            <template #default>
                <slot>
                    <banner-details-modal-component :current-banner="currentBanner"></banner-details-modal-component>
                </slot>
            </template>
        </b-modal>
    </div>
</template>

<script>
import BannerDetailsModalComponent from "@/components/Modals/BannerDetailsModalComponent.vue";
import {BButton, BModal} from "bootstrap-vue";
import {mapGetters, mapActions} from "vuex";

export default {
    name: "BannersListComponent",
    components: {BButton, BModal, BannerDetailsModalComponent},
    data() {
        return {
            banners: [],
            showModalFlag: false,
            currentBanner: null,
        };
    },
    mounted() {
        this.fetchBanners();
    },
    computed: {
        ...mapGetters(['getBanners'])
    },
    methods: {
        ...mapActions(['fetchBanners']),
        showModal(banner) {
            this.$bvModal.show('bannerDetailsModal');
            this.currentBanner = banner;
        },
        closeModal() {
            this.$bvModal.hide('bannerDetailsModal');
            this.currentBanner = null;
        },
    },
};
</script>

