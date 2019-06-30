<template>
  <section class="profile-error">
    <article v-html="message"></article>
    <p>
      Set your
      <a
        class="anchor"
        href="steam://url/SteamIDEditPage"
        target="_blank"
        rel="noopener"
        >steam profile</a
      >
      privacy settings to <strong>public</strong>
    </p>
    <br />

    <div class="flex flex-row flex-wrap md:flex-no-wrap">
      <ol class="w-1/2 pr-4">
        <li class="mb-3">
          Open your
          <a
            class="anchor"
            href="steam://url/SteamIDEditPage"
            rel="noopener"
            target="_blank"
            >steam profile page</a
          >
          inside the steam desktop app
        </li>
        <li class="mb-3">Navigate to <strong>"My Privacy Settings"</strong></li>
        <li class="mb-3">
          Set <strong>"My Profile"</strong> and
          <strong>"Game Details"</strong>(uncheck checkbox) to Public <br /><a
            class="anchor"
            :href="settingsImageURL"
            target="_blank"
            rel="noopener"
            >Recommended Privacy Settings</a
          >
        </li>
      </ol>
      <div class="w-1/2">
        <div style="padding:62.5% 0 0 0;position:relative;">
          <iframe
            src="https://player.vimeo.com/video/282723315?byline=0&portrait=0"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <br />
    <p class="opacity-50">
      You can easily change back your settings to private after you've received
      your recommendations
    </p>
  </section>
</template>

<script>
import profilePrivacy from "@/assets/img/tutorial/profile-privacy.jpg";

export default {
  name: "profile-error",
  props: ["message", "steamUserID"],
  data() {
    return {
      settingsImageURL: profilePrivacy,
      editSettingsURL: `https://steamcommunity.com/profiles/${
        this.steamUserID
      }/edit/settings`
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
