<svelte:options runes />

<script lang="ts">
  import CreateProject from "$lib/components/CreateProject.svelte";
  import AttendEvent from "$lib/components/AttendEvent.svelte";
  import { user, signOut } from "$lib/user.svelte";
</script>

<div class="space-y-8 p-4 max-w-2xl mx-auto flex flex-col justify-center min-h-screen">
  <section>
    <h2 class="text-xl font-semibold mb-4">Login</h2>
    {#if user.isAuthenticated}
      <div class="my-4 text-center">
        <h2>Hey!</h2>
        <p>
          You're signed in as <strong>{user.email}</strong>.
        </p>
        <button class="btn mt-2 btn-primary" onclick={signOut}>Sign out</button>
      </div>
    {:else}
      <div class="flex justify-center my-4">
        <a href="/login" class="btn btn-primary">Login / Sign Up</a>
      </div>
    {/if}
  </section>

  {#if user.isAuthenticated}
    <!-- Style and center -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Events</h2>
      <div class="flex justify-center">
        <a href="/events" class="btn btn-wide btn-primary">
          Events Dashboard
        </a>
      </div>
    </section>
    <section>
      <h2 class="text-xl font-semibold mb-4">Projects</h2>
      <div class="flex justify-center">
        <a href="/projects" class="btn btn-wide btn-primary">
          Projects Dashboard
        </a>
      </div>
    </section>

    <!-- <section>
      <h2 class="text-xl font-semibold mb-4">Attend Event</h2>
      <AttendEvent />
    </section> -->
  {/if}
</div>

<style>
  section {
    /* @apply p-6 rounded-lg shadow-sm border-accent border-2 border-dotted border-opacity-50; */
    @apply p-6 rounded-3xl shadow-2xl ring-2 ring-accent border-accent border-2 border-dotted border-opacity-10 bg-neutral;
  }

  * {
    @apply text-neutral-content;
  }
  
</style>
