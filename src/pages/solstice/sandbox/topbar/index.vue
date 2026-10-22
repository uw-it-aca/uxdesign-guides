<template>
  <!-- layout.vue: this is where you override the layout -->
  <STopbar
    :app-name="appName"
    :app-root-url="appRootUrl"
    :page-title="pageTitle"
    :user-name="userNetid"
    :sign-out-url="signOutUrl"
  >
    <template #profile>
      <SProfile
        :variant="'flyout'"
        :user-netid="userNetid"
        :user-official-name="userOfficial"
        :user-preferred-name="userPreferred"
        :profile-url="'https://identity.uw.edu'"
        :signout-url="signOutUrl"
      ></SProfile>
    </template>
    <template #navigation>
      <ul class="nav flex-column my-3">
        <li class="nav-item bg-gray rounded-3 mb-1">
          <a href="#" class="nav-link text-purple d-block px-3 py-2"
            ><i class="bi bi-house-door-fill me-3"></i>Home</a
          >
        </li>
        <li class="nav-item bg-gray-hover rounded-3 mb-1">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-mortarboard-fill me-3"></i>Academics</a
          >
        </li>
        <li class="nav-item bg-gray-hover rounded-3 mb-1">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-pencil-square me-3"></i>Teaching</a
          >
        </li>
        <li class="nav-item bg-gray-hover rounded-3">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-credit-card me-3"></i>Accounts</a
          >
        </li>
        <li aria-hidden="true" class="nav-item my-2">
          <a
            href="#"
            class="nav-link disabled text-muted d-block internal-link p-0"
            ><hr class="bg-light m-0" />
            <span class="visually-hidden"> Navigation separator</span></a
          >
        </li>
        <li class="nav-item bg-gray-hover rounded-3 mb-1">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-calendar-check me-3"></i>Calendar</a
          >
        </li>
        <li class="nav-item bg-gray-hover rounded-3">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-bookmark-fill me-3"></i>UW Resources</a
          >
        </li>
      </ul>
    </template>
    <template #aside>
      <div class="alert alert-dark-beige small rounded-3 my-5 border-0">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates
        molestias hic. Esse ab inventore rerum, ipsa cupiditate quo. Aliquid
        optio, commodi sit fugit harum perspiciatis quia sunt fuga. Aliquam?
      </div>
    </template>
    <template #bar>
      <div
        class="alert alert-warning alert-dismissible fade show border-warning border-start rounded-0 m-0 border-0 border-5"
        role="alert"
      >
        <p>
          <strong>Holy guacamole!</strong>You should check in on some of those
          fields below.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          fuga, voluptatem ad corrupti nobis eveniet tempore nam magni
          consequuntur iste unde corporis! Eum molestias nulla perspiciatis
          impedit alias hic veritatis.
        </p>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </template>
    <template #main>
      <!-- main section override -->
      <h1>
        <slot name="title">{{ pageTitle }}</slot>
      </h1>
      <slot name="content"></slot>
    </template>
    <template #footer></template>
  </STopbar>
</template>

<script>
  import { SProfile, STopbar } from "solstice-vue";

  export default {
    name: "DocsSandboxTopbarIndex",
    components: { STopbar, SProfile },
    data() {
      return {
        // minimum application setup overrides
        appName: "MyApp",
        appRootUrl: "/",
        signOutUrl: "/signout",
        pageTitle: "Home",
        userNetid: "myusername",
        userOfficial: "MYOFFICAL NAME",
        userPreferred: "Preferred Name",
        currentYear: new Date().getFullYear(),
      };
    },
    created: function () {
      // constructs page title in the following format "Page Title - AppName"
      document.title = `${this.pageTitle} - ${this.appName}`;
    },
  };
</script>
