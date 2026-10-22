<template>
  <div v-if="variant == 'do'" class="mb-5">
    <div class="fw-bold fs-5 mb-2">Do</div>
    <div class="border-start border-success mb-5 w-100 border-3 ps-2 pe-2">
      <!-- layout that uses UsageBlockRow -->
      <template v-if="$slots['row']">
        <ul class="list-unstyled">
          <slot name="row"></slot>
        </ul>
      </template>

      <!-- legacy layout for pages that don't use UsageBlockRow -->
      <div v-else class="d-flex align-items-start">
        <i class="bi bi-check-circle-fill text-success ms-2 me-3"></i>
        <div class="d-flex flex-column flex-md-row w-100">
          <div v-if="$slots['text']" class="mb-3 w-100">
            <slot name="text"></slot>
          </div>
          <div v-if="$slots['preview']" class="px-md-5 w-100">
            <slot name="preview"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="variant == 'dont'" class="mb-5">
    <div class="fw-bold fs-5 mb-2">Don&rsquo;t</div>
    <div class="border-start border-danger mb-5 w-100 border-3 ps-2 pe-2">
      <!-- layout that uses UsageBlockRow -->
      <template v-if="$slots['row']">
        <ul class="list-unstyled d-flex flex-column">
          <slot name="row"></slot>
        </ul>
      </template>

      <!-- legacy layout for pages that don't use UsageBlockRow -->
      <div v-else class="d-flex align-items-start">
        <i class="bi bi-x-circle-fill text-danger ms-2 me-3"></i>
        <div class="d-flex flex-column flex-md-row w-100">
          <div v-if="$slots['text']" class="mb-3 w-100">
            <slot name="text"></slot>
          </div>
          <div v-if="$slots['preview']" class="px-md-5 w-100">
            <slot name="preview"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PreviewBlock from "./PreviewBlock.vue";

  export default {
    props: {
      variant: {
        type: String,
        default: "do",
        required: false,
      },
    },
    data() {
      return {};
    },
  };
</script>
