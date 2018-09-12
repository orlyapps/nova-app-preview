<template>
    <div>
        <heading class="mb-6">App Preview</heading>
        <!--
        <div class="flex justify-between" >
            <div class="relative h-9 mb-6">
              <span class="ml-auto mb-6"><a class="btn btn-default btn-primary" dusk="create-button" href="/apk/app.apk" target="_blank">Download App</a></span>
            </div>
        </div>
        -->
        <card class="bg-90 flex flex-col items-center justify-center py-8" >
            <div class="phone-frame-wrap" v-if="config">
                <div class="statusbar" v-bind:style="{ backgroundColor: config.color}"></div>
                <iframe :src="config.appUrl"></iframe>
            </div>
        </card>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            config: {}
        };
    },
    async mounted() {
        this.config = (await Nova.request().get("/nova-vendor/nova-app-preview/")).data;
    }
};
</script>

<style lang="scss" scoped>
.phone-frame-wrap {
    position: relative;
    width: 375px;
    height: 667px;
    border-radius: 3px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08), 0 0px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    .statusbar {
        position: absolute;
        top: 0;
        width: 375px;
        height: 24px;
        padding: 5px 0;
        background-size: 100%;
        background-repeat: no-repeat;
        background-color: #e64116;
        background-position: center;
        border-radius: 3px 3px 0 0;
        background-image: url("data:image/png;base64,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");
    }

    iframe {
        height: 647px;
        margin-top: 20px;
        width: 100%;
    }
}
</style>
