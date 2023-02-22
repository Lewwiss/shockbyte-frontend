<script lang="ts">
    import Form from './Form.vue';
    import Loading from './Loading.vue';
    import Download from './Download.vue';

    export default {
        data() {
            return {
                // Custom url (string)
                url: "",
                // Size of url (px)
                size: 500,
                // Status of component shown
                status: 0,
                // Any url errors
                urlErr: false,
                // Any size errors
                sizeErr: false,
                // Qr variable (string)
                qrCode: "",
            }
        },
        methods: {
            async generateQrCode() {
                // Our API endpoint
                const endpoint = '/create';

                // Creates our API request and send our url and size variables
                const apiReq = await fetch(endpoint, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        },
                    body: JSON.stringify({
                        "url": this.url.toString(),
                        "size": this.size
                    })
                });

                // Gets the json from our API request
                const apiData = await apiReq.json();

                // Sets the qrCode variable to our generated data url
                this.qrCode = apiData.data;
            },
            resetQrCode() {
                this.url = "";
                this.size = 500;
                this.qrCode = "/src/assets/8.svg";
            },
        },
        components: {
            Form,
            Loading,
            Download,
        }
    };
</script>

<template>
    <Form v-if="status === 0"
        @seturl="$event => url = $event"
        @setsize="$event => size = $event"
        @setstatus="$event => status = $event"
    />
    <Loading v-if="status === 1"
        @setstatus="$event => status = $event"
    />
    <Download v-if="status === 2" 
        v-bind:url=url
        v-bind:size=size
        v-bind:qrCode=qrCode
        @seturl="$event => url = $event"
        @setsize="$event => size = $event"
        @generate="generateQrCode"
        @reset="resetQrCode"
    />
</template>